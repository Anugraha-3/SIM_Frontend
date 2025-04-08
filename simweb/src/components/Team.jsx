import { useMemo, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "../styles/Team.css";

// Images
import douglas from "../assets/image-douglas-hurley.png";
import mark from "../assets/image-mark-shuttleworth.png";
import victor from "../assets/image-victor-glover.png";
import anousheh from "../assets/image-anousheh-ansari.png";

// Crew data
const members = [
  {
    name: "Douglas Hurley",
    image: douglas,
    role: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: mark,
    role: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu. He was the first South African to travel to space.",
  },
  {
    name: "Victor Glover",
    image: victor,
    role: "Pilot",
    description:
      "Pilot on the first operational SpaceX Crew Dragon flight. Glover is a U.S. Navy commander and Expedition 64 crew member.",
  },
  {
    name: "Anousheh Ansari",
    image: anousheh,
    role: "Flight Engineer",
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
  };

  const prevMember = () => {
    setCurrent((prev) => (prev - 1 + members.length) % members.length);
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % members.length);
    }, 5000);

    return () => clearInterval(autoSlideRef.current);
  }, []);

  const member = members[current];

  return (
    <div className="crew-wrapper">
      <div className="page-title">
        <span className="number"></span> M e e t &emsp; Y o u r &emsp; C r e w
      </div>

      <div className="crew-content" {...handlers}>
        <div className="crew-left">
          <h4 className="crew-role">{member.role}</h4>
          <h3 className="crew-name">{member.name}</h3>
          <p className="crew-description">{member.description}</p>

          <div className="crew-dots">
            {members.map((_, i) => (
              <span
                key={i}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <div className="nav-buttons">
            <button onClick={prevMember}>⏮ Prev</button>
            <button onClick={nextMember}>Next ⏭</button>
          </div>
        </div>

        <div className="crew-right">
          <AnimatePresence mode="wait">
            <motion.img
              key={member.name}
              src={member.image}
              alt={member.role}
              className="crew-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
