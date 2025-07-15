import React, { useRef, useState, useEffect } from "react";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";

// Audio Visualizer Component
const AudioVisualizer = ({ isRecording, audioStream }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const dataArrayRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;
    const bars = 60;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isRecording && analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        
        // Draw circular bars
        for (let i = 0; i < bars; i++) {
          const angle = (i / bars) * Math.PI * 2;
          const dataIndex = Math.floor((i / bars) * dataArrayRef.current.length);
          const amplitude = dataArrayRef.current[dataIndex] / 255;
          
          const barHeight = amplitude * 120 + 10;
          const innerRadius = radius - 5;
          const outerRadius = innerRadius + barHeight;
          
          const hue = (i / bars) * 360;
          const saturation = 80 + amplitude * 20;
          const lightness = 50 + amplitude * 30;
          
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          
          const startX = centerX + Math.cos(angle) * innerRadius;
          const startY = centerY + Math.sin(angle) * innerRadius;
          const endX = centerX + Math.cos(angle) * outerRadius;
          const endY = centerY + Math.sin(angle) * outerRadius;
          
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          
          if (amplitude > 0.7) {
            ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            ctx.shadowBlur = 10;
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      } else {
        // Draw idle state
        const time = Date.now() * 0.002;
        
        for (let i = 0; i < bars; i++) {
          const angle = (i / bars) * Math.PI * 2;
          const wave = Math.sin(time + i * 0.2) * 0.3 + 0.7;
          
          const barHeight = wave * 20 + 5;
          const innerRadius = radius - 5;
          const outerRadius = innerRadius + barHeight;
          
          const hue = (i / bars) * 360 + time * 50;
          
          ctx.beginPath();
          ctx.strokeStyle = `hsl(${hue % 360}, 60%, 40%)`;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.globalAlpha = 0.6;
          
          const startX = centerX + Math.cos(angle) * innerRadius;
          const startY = centerY + Math.sin(angle) * innerRadius;
          const endX = centerX + Math.cos(angle) * outerRadius;
          const endY = centerY + Math.sin(angle) * outerRadius;
          
          ctx.moveTo(startX, startY);
          ctx.lineTo(endX, endY);
          ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
      }
      
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isRecording]);

  useEffect(() => {
    if (isRecording && audioStream) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
        analyserRef.current = audioContextRef.current.createAnalyser();
        sourceRef.current = audioContextRef.current.createMediaStreamSource(audioStream);
        
        analyserRef.current.fftSize = 256;
        analyserRef.current.smoothingTimeConstant = 0.8;
        
        const bufferLength = analyserRef.current.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);
        
        sourceRef.current.connect(analyserRef.current);
      } catch (error) {
        console.error('Error setting up audio analysis:', error);
      }
    }

    return () => {
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isRecording, audioStream]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <canvas 
        ref={canvasRef} 
        width="300" 
        height="300" 
        className="opacity-80"
      />
    </div>
  );
};

// Mock RobotViewer component for demo
const RobotViewer = ({ width, height, }) => (
  <div 
    className="flex items-center justify-center text-white text-6xl"
    style={{ width, height }}
  >
    🤖
  </div>
);

const RobotChatUI = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const chatEndRef = useRef(null);
  const audioRef = useRef(null);

  // Play audio in background when a new bot message with audio arrives
  useEffect(() => {
    if (messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    if (lastMsg.from === "bot" && lastMsg.audioUrl) {
      // Create and play audio
      const audio = new window.Audio(lastMsg.audioUrl);
      audioRef.current = audio;
      audio.play();
    }
    // Optionally, cleanup previous audio
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;
    // Don't add user message here, wait for backend response
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
          from: 'user',
          text: data.user_input_text,
          id: Date.now() + Math.random()
        },
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
        setAudioStream(stream);
        
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
            setAudioStream(null);
            stream.getTracks().forEach((t) => t.stop());
            
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
                  from: 'user',
                  text: data.user_input_text,
                  id: Date.now() + Math.random()
                },
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
      if (mediaRecorder) {
        mediaRecorder.stop();
        setRecording(false);
        setAudioStream(null);
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-transparent" style={{ minHeight: '80vh' }}>
      <div className="rounded-[30px] border border-[#444654] shadow-2xl w-full max-w-[900px] h-[750px] bg-[#40414f] flex flex-col overflow-hidden relative">
        
        {/* Top Content Area (Left + Right) */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Left Pane */}
          <div className="w-1/2 bg-[#343541] relative flex items-center justify-center">
            {/* Audio Visualizer Overlay */}
            <AudioVisualizer isRecording={recording} audioStream={audioStream} />
            
            {/* This RobotViewer is only for the chat window */}
            <RobotViewer
              key="chat-robot-viewer"
              width={window.innerWidth < 768 ? "300px" : "140px"}
              height={window.innerWidth < 768 ? "100px" : "110px"}
              scale={window.innerWidth < 768 ? 0.15 : 0.28}
            />
            {typeof onClose === "function" && (
              <button
                className="absolute top-4 left-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#555] hover:bg-[#666] text-white text-2xl shadow"
                onClick={onClose}
              >
                ✕
              </button>
            )}
          </div>

          {/* Right Pane - Scrollable Chat */}
          <div className="w-1/2 flex flex-col bg-[#343541] h-full">
            <div className="flex-1 px-6 py-4 space-y-3 overflow-y-auto scrollbar-hide">
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
                  {msg.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Input Bar */}
        <div className="w-full sticky bottom-0 border-t border-[#565869] bg-[#40414f] px-6 py-3 z-10">
          <div className="flex items-center gap-4">
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
            <button
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#10a37f] text-white text-xl shadow hover:scale-105 transition-transform"
              onClick={handleSend}
            >
              <FaPaperPlane />
            </button>
            <button
              className={`w-11 h-11 flex items-center justify-center rounded-full border-2 border-[#10a37f] text-[#10a37f] text-xl bg-transparent shadow hover:scale-105 transition-transform ${recording ? "ring-2 ring-[#10a37f] animate-pulse" : ""}`}
              onClick={handleMicClick}
            >
              <FaMicrophone />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default RobotChatUI;