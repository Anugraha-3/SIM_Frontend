// RobotChatUI.jsx
import React, { useRef, useState } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import RobotViewer from "../components/RobotViewer"; // Replace with your 3D robot component

const RobotChatUI = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chatEndRef = useRef(null);

  const handleSend = async () => {
    if (input.trim() === "") return;
    const userMsg = { text: input, from: 'user', id: Date.now() + Math.random() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    try {
      const formData = new FormData();
      formData.append('text', input);
      const res = await fetch('http://127.0.0.1:8000/chat/', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error('Backend error: ' + errorText);
      }
      const data = await res.json();
      // Ensure audioUrl is a public URL
      let audioUrl = data.audio_file;
      if (audioUrl && !audioUrl.startsWith("http")) {
        audioUrl = `http://127.0.0.1:8000/audio/${audioUrl}`;
      }
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: data.text,
          audioUrl: audioUrl,
          voice: data.voice,
          source_language: data.source_language,
          id: Date.now() + Math.random()
        }
      ]);
    } catch (err) {
      alert('Failed to get response. ' + (err?.message || ''));
    }
  };

  const handleMicClick = async () => {
    if (!recording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        let recorder, audioChunks = [];
        let audioContext, analyser, source, silenceStart = null;
        const silenceThreshold = 0.01;
        const silenceDuration = 3000;
        if (window.Recorder) {
          recorder = new window.Recorder(new (window.AudioContext || window.webkitAudioContext)(), { type: 'audio/wav' });
          await recorder.init(stream);
          await recorder.start();
          setMediaRecorder(recorder);
          window._recorderInstance = recorder;
          setRecording(true);
          // For recorder-js, fallback to manual stop (no silence detection)
        } else {
          // Use MediaRecorder API (webm/ogg, backend should convert to wav if needed)
          let mimeType = '';
          if (window.MediaRecorder.isTypeSupported('audio/webm')) {
            mimeType = 'audio/webm';
          } else if (window.MediaRecorder.isTypeSupported('audio/ogg')) {
            mimeType = 'audio/ogg';
          }
          recorder = new window.MediaRecorder(stream, mimeType ? { mimeType } : {});
          recorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunks.push(e.data); };
          recorder.onstop = async () => {
            if (audioContext) {
              audioContext.close();
            }
            setRecording(false);
            const blob = new Blob(audioChunks, { type: 'audio/wav' });
            // Send to backend as wav
            const formData = new FormData();
            formData.append('audio', blob, 'recording.wav');
            try {
              const res = await fetch('http://127.0.0.1:8000/chat/', {
                method: 'POST',
                body: formData,
              });
              if (!res.ok) {
                const errorText = await res.text();
                throw new Error('Upload failed: ' + errorText);
              }
              const data = await res.json();
              // Ensure audioUrl is a public URL
              let audioUrl = data.audio_file;
              if (audioUrl && !audioUrl.startsWith("http")) {
                audioUrl = `http://127.0.0.1:8000/audio/${audioUrl}`;
              }
              setMessages((msgs) => [
                ...msgs,
                {
                  from: 'bot',
                  text: data.text,
                  audioUrl: audioUrl,
                  voice: data.voice,
                  source_language: data.source_language,
                  id: Date.now() + Math.random()
                }
              ]);
            } catch (err) {
              alert('Failed to upload audio. ' + (err?.message || ''));
            }
          };
          setMediaRecorder(recorder);
          recorder.start();
          window._recorderInstance = recorder;
          // --- Silence detection logic ---
          audioContext = new (window.AudioContext || window.webkitAudioContext)();
          source = audioContext.createMediaStreamSource(stream);
          analyser = audioContext.createAnalyser();
          analyser.fftSize = 2048;
          source.connect(analyser);
          const data = new Uint8Array(analyser.fftSize);
          function checkSilence() {
            analyser.getByteTimeDomainData(data);
            let sum = 0;
            for (const d of data) {
              let val = (d - 128) / 128;
              sum += val * val;
            }
            let rms = Math.sqrt(sum / data.length);
            if (rms < silenceThreshold) {
              if (!silenceStart) silenceStart = Date.now();
              if (Date.now() - silenceStart > silenceDuration) {
                recorder.stop();
                stream.getTracks().forEach((t) => t.stop());
                return;
              }
            } else {
              silenceStart = null;
            }
            if (recorder.state === 'recording') {
              requestAnimationFrame(checkSilence);
            }
          }
          requestAnimationFrame(checkSilence);
          // --- End silence detection ---
        }
        setRecording(true);
      } catch {
        alert('Microphone access denied or not available.');
      }
    } else {
      // Stop recording (manual)
      mediaRecorder?.stop();
    }
  };
  return (
<div className="w-full h-full flex items-center justify-center bg-transparent" style={{ minHeight: '80vh' }}>
      <div className="rounded-[30px] border border-[#444654] shadow-2xl w-full max-w-[900px] h-[750px] flex flex-col overflow-hidden bg-[#40414f] relative">
      
      {/* Close button */}
      {typeof onClose === "function" && (
        <button
          className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#555] hover:bg-[#666] text-white text-2xl shadow"
          onClick={onClose}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      {/* Main area: Robot and Chat */}
        <div className="flex flex-1 flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-center bg-[#343541]">
            <RobotViewer
          width="140px"
          height="110px"
          // Responsive position: further away on mobile (z: -20), original on desktop (z: -6.5)
          position={[0, -3.2, window.innerWidth < 768 ? -20 : -6.5]}
          rotation={[0, -Math.PI / 2 + 0.6, 0]}
          scale={0.28}
            />
          </div>

          {/* Make only the right chat area scrollable */}
        <div className="flex-1 flex flex-col bg-[#343541] h-full">
          {/* Chat messages */}
          <div
            className="px-6 py-4 space-y-3 overflow-y-auto"
            style={{ flex: 1, minHeight: 0, maxHeight: "100%" }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id || msg.timestamp || msg.text}
                className={`rounded-xl px-4 py-3 max-w-[80%] text-base font-medium shadow-md ${
                  msg.from === 'user'
                    ? 'bg-[#293236] text-white self-end ml-auto'
                    : 'bg-[#444654] text-white self-start mr-auto'
                }`}
                style={{ wordBreak: 'break-word' }}
              >
                {/* Display audio if present, otherwise text */}
                {msg.audioUrl ? (
                  <audio controls src={msg.audioUrl} className="w-full">
                    <track kind="captions" />
                  </audio>
                ) : (
                  msg.text
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t border-[#565869] bg-[#40414f] px-4 py-3 w-full">
        <textarea
          className="flex-1 rounded-lg px-3 py-2 bg-[#343541] text-white border border-[#565869] focus:outline-none focus:ring-2 focus:ring-[#10a37f] resize-none"
          rows={1}
          placeholder="TYPE YOUR QUERIES"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
        />
        <div className="flex items-center gap-3 ml-4">
          <button
            className="w-11 h-11 flex items-center justify-center rounded-full bg-[#10a37f] text-white text-xl shadow hover:scale-105 transition-transform"
            onClick={handleSend}
            aria-label="Send"
          >
            <FaPaperPlane />
          </button>
          <button
            className={`w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#10a37f] text-[#10a37f] text-xl bg-transparent shadow hover:scale-105 transition-transform ${recording ? "ring-2 ring-[#10a37f] animate-pulse" : ""}`}
            onClick={handleMicClick}
            aria-label="Mic"
          >
            <FaMicrophone />
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default RobotChatUI;
