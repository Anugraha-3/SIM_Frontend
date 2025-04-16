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
    role: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Muthu Pandian",
    image: muthu,
    role: "Manager",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He was the first South African to travel to space.",
  },
  {
    name: "Siva perumal",
    image: siva,
    role: "Senior Editor",
    description:
      "Pilot on the first operational SpaceX Crew Dragon flight. Glover is a U.S. Navy commander and Expedition 64 crew member.",
  },
  {
    name: "Seenu Bala",
    image: seenu,
    role: "Designer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space.",
  },
  {
    name: "Anuz Balamurali",
    image: anuz,
    role: "Frontend Developer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space.",
  },
  {
    name: "Dineshprasath G A",
    image: dinesh,
    role: "Backend Developer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space.",
  },
  {
    name: "Kalaiyarasi",
    image: kalai,
    role: "Senior Content Writer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space.",
  },
  {
    name: "Sandra",
    image: sandra,
    role: "Senior Content Writer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian in space.",
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
              <button onClick={prevMember}>⏮ Prev</button>
              <button onClick={nextMember}>Next ⏭</button>
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
