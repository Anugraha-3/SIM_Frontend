import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
// import "../styles/Team.css";

// Images
import keerthi from "../assets/keerthivarman.png";
import muthu from "../assets/muthu.jpg";
import siva from "../assets/sivaperumal.png";
import seenu from "../assets/seenu.png";
import anuz from "../assets/anuz.jpg";
//import dinesh from "../assets/dine.jpg";
import kalai from "../assets/kalai.png";
import sandra from "../assets/sandra.jpg";
import anu from "../assets/anu.jpg"; 
import ayub from "../assets/ayub.jpg"
import deva from "../assets/deva.jpg"// 
 import kavya from "../assets/kavya.jpg"
 import vivek from "../assets/vivek.jpg"// Updated Anu image
// import sandra from "../assets/sandra.jpg"; // Updated Sandra image

const members = [
  {
    name: "KeerthiVarman",
    image: keerthi,
    role: "Founder & CEO – Sun Info Media",
    description:
      "The visionary behind Sun Info Media, Keerthi Varman leads the team with a passion for innovation and technology. With a clear focus on growth and creativity, he drives the company toward building impactful digital experiences and future-ready solutions.",
  },
  {
    name: "Muthu Pandian",
    image: muthu,
    role: "Manager – Game & 3D Designer",
    description:
      "Leads the creative vision for game design and 3D development, blending innovation with design expertise to deliver high-quality interactive experiences.",
  },
  {
    name: "Siva perumal",
    image: siva,
    role: "Videographer, Photographer & Senior Editor",
    description:
      "Specializes in capturing compelling visuals and delivering polished edits. With a sharp eye and years of experience, he brings stories to life through video.",
  },
  {
    name: "Seenu Bala",
    image: seenu,
    role: "Developer",
    description:
      "Focused on building solid and scalable digital solutions. Seenibala supports the team with technical expertise and efficient development practices.",
  },
  {
    name: "Anuz Balamurali",
    image: anuz,
    role: "Full Stack developer",
    description:
      "Anuz Balamurali is a driven Software Systems student with hands-on experience in full-stack development and a keen eye on Human-Computer Interaction. With a solid grip on data structures and problem-solving, he builds intuitive digital solutions—from dynamic car resale platforms to offline payment systems.",
  },
  /*{
    name: "Dineshprasath G A",
    image: dinesh,
    role: "Full Stack developer",
    description:
      "He is a developer with expertise in building secure, scalable web applications and intelligent systems.With a strong foundation in cybersecurity, AI, and machine learning, he integrates smart, data-driven solutions into his projects. His work combines secure architecture, user-focused design, and advanced analytics to deliver reliable and intelligent digital experiences.",
  },*/
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
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Ayub Alikhan",
    image: ayub,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Vivekanandhan",
    image: vivek,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Anugraha",
    image: anu,
    role: "Full Stack Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Devaranjanaa",
    image: deva,
    role: "Software Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
  {
    name: "Kavya",
    image: kavya,
    role: "Full Stack Developer",
    description:
      "Combines 3D design skills with a flair for content creation. Sandra supports visual development and helps shape engaging written content.",
  },
];

export default function CrewPage() {
  const [current, setCurrent] = useState(0);
  const autoSlideRef = useRef();

  const handlers = useSwipeable({
    onSwipedLeft: () => nextMember(),
    onSwipedRight: () => prevMember(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const nextMember = () => {
    setCurrent((prev) => (prev + 1) % members.length);
    resetAutoSlide();
  };

  const prevMember = () => {
    setCurrent((prev) => (prev - 1 + members.length) % members.length);
    resetAutoSlide();
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
  <div className="bg-black text-white px-5 py-20 overflow-hidden font-primary">
  <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-10 relative text-left inline-block">
    <span className="text-gray-700 mr-3">03</span> Meet Your Crew
    <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></span>
  </h2>

  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20" {...handlers}>
    {/* Left: Text Content */}
    <AnimatePresence mode="wait">
      <motion.div
        key={member.name}
        className="w-full lg:w-1/2 text-center lg:text-left lg:pl-60"  // ⬅️ Push content slightly right
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-lg uppercase opacity-60 tracking-widest mb-2.5">{member.role}</h4>
        <h3 className="text-4xl uppercase text-white mb-5">{member.name}</h3>
        <p className="text-base leading-relaxed text-[#d0d6f9] whitespace-pre-wrap px-2.5 lg:px-0">
          {member.description}
        </p>

        {/* Dots */}
        <div className="flex gap-3 justify-center lg:justify-start mt-7">
          {members.map((_, i) => (
            <span
              key={i}
              className={`w-3.5 h-3.5 rounded-full bg-white transition-all duration-300 cursor-pointer ${
                current === i
                  ? 'opacity-100 shadow-[0_0_6px_2px_rgba(255,255,255,0.4)]'
                  : 'opacity-30 hover:opacity-60 hover:scale-120'
              }`}
              onClick={() => {
                setCurrent(i);
                resetAutoSlide();
              }}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-3 justify-center lg:justify-start mt-5">
          <button
            className="bg-transparent text-white border-2 border-white px-4 py-1.5 rounded-lg text-base font-orbitron cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            onClick={prevMember}
          >
            ⏮
          </button>
          <button
            className="bg-transparent text-white border-2 border-white px-4 py-1.5 rounded-lg text-base font-orbitron cursor-pointer transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            onClick={nextMember}
          >
            ⏭
          </button>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Right: Image */}
    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-60">
  <AnimatePresence mode="wait">
    <motion.img
      key={member.name}
      src={member.image}
      alt={member.role}
      className="w-72 h-72 md:w-96 md:h-96 object-cover object-center rounded-full shadow-[0_0_40px_10px_rgba(0,174,255,0.4)] transition-transform duration-400 ease-in-out hover:scale-105 hover:shadow-[0_0_60px_20px_rgba(0,174,255,0.6)]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
    />
  </AnimatePresence>
</div>

  </div>
</div>


  );

}
