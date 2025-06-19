import { useState, useEffect, useRef } from "react";

// Mock images for demo - replace with your actual imports
import keerthi from "../assets/keerthivarman.png";

import siva from "../assets/sivaperumal.png";
import selvi from "../assets/selvi.jpg";
import anuz from "../assets/anuz.jpg";
//import dinesh from "../assets/dine.jpg";
import kalai from "../assets/kalai.png";
import sandra from "../assets/sandra.jpg";
import anu from "../assets/anu.jpg"; 
import ayub from "../assets/ayub.jpg"
import deva from "../assets/deva.jpg"// 
 import kavya from "../assets/kavya.jpg"
 import vivek from "../assets/vivek.jpg"// Updated Anu image
 import madhana from "../assets/madhana.jpg"; // Updated Sandra image

const members = [
  {
    name: "KeerthiVarman",
    image: keerthi,
    role: "Founder & CEO – Sun Info Media",
    description:
      "The visionary behind Sun Info Media, Keerthi Varman leads the team with a passion for innovation and technology. With a clear focus on growth and creativity, he drives the company toward building impactful digital experiences and future-ready solutions.",
  },
  {
    name: "Siva perumal",
    image: siva,
    role: "Videographer, Photographer & Senior Editor",
    description:
      "Specializes in capturing compelling visuals and delivering polished edits. With a sharp eye and years of experience, he brings stories to life through video.",
  },
  {
    name: "Kalaiyarasi",
    image: kalai,
    role: "Junior Editor & Content Writer",
    description:
      "Works on editing and writing content that communicates clearly and creatively. Passionate about storytelling and visual details.",
  },
  {
    name: "Sandra Grace",
    image: sandra,
    role: "Junior 3D Designer & Content Writer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "KalaiSelvi",
    image: selvi,
    role: "FoPoster Designer & Documentation Coordinator",
    description:
      "Blends creative flair with operational strength—Kalaiselvi designs visually compelling posters while taking charge of critical documentation processes. Her organized approach ensures accuracy, compliance, and smooth coordination across teams.",
  },
  {
    name: "Madhana Devi",
    image: madhana,
    role: "Content Writer",
    description:
      "Crafts clear, engaging, and purposeful content across digital platforms. With a strong command of language and a creative mindset, Madhana Devi brings ideas to life through compelling writing that resonates with the audience.",
  },
  {
    name: "Anuz Balamurali",
    image: anuz,
    role: "Full Stack developer",
    description:
      "Anuz Balamurali is a driven Software Systems student with hands-on experience in full-stack development and a keen eye on Human-Computer Interaction. With a solid grip on data structures and problem-solving, he builds intuitive digital solutions—from dynamic car resale platforms to offline payment systems.",
  },
  {
    name: "Ayub Alikhan",
    image: ayub,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Vivekanandhan",
    image: vivek,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Anugraha",
    image: anu,
    role: "Full Stack Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Devaranjanaa",
    image: deva,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Kavya",
    image: kavya,
    role: "Full Stack Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
];

export default function CrewPage() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef();

  const nextMember = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % members.length);
    resetAutoSlide();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevMember = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev - 1 + members.length) % members.length);
    resetAutoSlide();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setTimeout(() => {
      autoSlideRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % members.length);
      }, 5000);
    }, 10000); // Restart after 10 sec
  };

  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % members.length);
      }, 5000);
    };

    startAutoSlide();

    return () => clearInterval(autoSlideRef.current);
  }, []);

  const member = members[current];

  return (
    <div className="bg-black text-white px-5 py-20 overflow-hidden font-sans">
      <style jsx>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-out {
          0% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-30px); }
        }
        @keyframes button-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 25px rgba(168, 85, 247, 0.5); }
        }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .fade-in { animation: fade-in 0.5s ease-out forwards; }
        .fade-out { animation: fade-out 0.5s ease-out forwards; }
        .nav-button {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
          border: 2px solid rgba(168, 85, 247, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-button:hover {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(59, 130, 246, 0.4));
          border-color: rgba(168, 85, 247, 0.6);
          transform: translateY(-2px) scale(1.05);
          animation: button-glow 1.5s ease-in-out infinite;
        }
        .nav-button:active {
          transform: translateY(0) scale(0.95);
        }
        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
      
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-10 relative text-left inline-block">
        <span className="text-gray-400 mr-3">03</span>
        <span className="text-white">
          The Minds Behind the Mission
        </span>
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-60">
          <div key={member.name} className="fade-in">
            <h4 className="text-lg uppercase opacity-60 tracking-widest mb-2.5 text-gray-300">
              {member.role}
            </h4>
            <h3 className="text-4xl uppercase text-white mb-5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
              {member.name}
            </h3>
            <p className="text-base leading-relaxed text-gray-300 whitespace-pre-wrap px-2.5 lg:px-0">
              {member.description}
            </p>

            {/* Dots */}
            <div className="flex gap-3 justify-center lg:justify-start mt-7">
              {members.map((_, i) => (
                <span
                  key={i}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                    current === i
                      ? 'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-100 animate-glow'
                      : 'bg-white/30 opacity-30 hover:opacity-60 hover:scale-125 hover:bg-purple-500/50'
                  }`}
                  onClick={() => {
                    if (!isAnimating) {
                      setCurrent(i);
                      resetAutoSlide();
                    }
                  }}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start mt-6">
              <button
                className="nav-button text-white p-4 rounded-full text-lg font-medium cursor-pointer flex items-center justify-center w-14 h-14"
                onClick={prevMember}
                disabled={isAnimating}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                className="nav-button text-white p-4 rounded-full text-lg font-medium cursor-pointer flex items-center justify-center w-14 h-14"
                onClick={nextMember}
                disabled={isAnimating}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-60">
          <div className="relative animate-float">
            <img
              key={member.name}
              src={member.image}
              alt={member.role}
              className="w-72 h-72 md:w-96 md:h-96 object-cover object-center rounded-full transition-all duration-500 ease-in-out hover:scale-105 fade-in"
              style={{
                boxShadow: '0 0 40px 10px rgba(168, 85, 247, 0.4)',
                border: '3px solid transparent',
                backgroundImage: 'linear-gradient(black, black), linear-gradient(45deg, #ef4444, #a855f7, #3b82f6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 60px 20px rgba(168, 85, 247, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 0 40px 10px rgba(168, 85, 247, 0.4)';
              }}
            />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500/30 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  );
}