import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "../styles/Team.css";

// Images
import keerthi from "../assets/keerthivarman.png";
import muthu from "../assets/muthu.jpg";
import siva from "../assets/sivaperumal.png";
import seenu from "../assets/seenu.png";
import anuz from "../assets/anuz.jpg";
import dinesh from "../assets/dine.jpg";
import kalai from "../assets/kalai.png";
import sandra from "../assets/sandra.jpg";
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
  {
    name: "Dineshprasath G A",
    image: dinesh,
    role: "Full Stack developer",
    description:
      "He is a developer with expertise in building secure, scalable web applications and intelligent systems.With a strong foundation in cybersecurity, AI, and machine learning, he integrates smart, data-driven solutions into his projects. His work combines secure architecture, user-focused design, and advanced analytics to deliver reliable and intelligent digital experiences.",
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
    <div className="crew-wrapper">
      <div className="page-title">
        <span className="number">03</span> Meet Your Crew
      </div>

      <div className="crew-content" {...handlers}>
        <AnimatePresence mode="wait">
          <motion.div
            key={member.name}
            className="crew-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="crew-role">{member.role}</h4>
            <h3 className="crew-name">{member.name}</h3>
            <p className="crew-description">{member.description}</p>

            <div className="crew-dots">
              {members.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${current === i ? "active" : ""}`}
                  onClick={() => {
                    setCurrent(i);
                    resetAutoSlide();
                  }}
                />
              ))}
            </div>

            <div className="nav-buttons">
              <button onClick={prevMember}>⏮</button>
              <button onClick={nextMember}>⏭</button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="crew-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={member.name}
              src={member.image}
              alt={member.role}
              className="crew-image"
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
