import { useState, useEffect, useRef } from "react";

// Mock images for demo - replace with your actual imports
import keerthi from "../assets/keerthivarman.png";
import siva from "../assets/siva.png";
import anuz from "../assets/anuz copy.jpg";
import kalai from "../assets/kalai.jpg";
import anu from "../assets/anu.jpg"; 
import ayub from "../assets/ayub copy.jpg";
import deva from "../assets/deva copy.jpg";
 import kavya from "../assets/kavya copy.jpg";
 import vivek from "../assets/vivek copy.jpg";
//  import madhana from "../assets/madhana copy.jpg";
 import shaantha from "../assets/shaantha copy.jpeg";
 import sandra from "../assets/sandra.jpg"; 
 import muthu from "../assets/muthu.jpg";
 import seenu from "../assets/seenu.png";
 import sekar from "../assets/sekar.jpg";
 import priya from "../assets/priya.jpg";
 import kavya2 from "../assets/kavya2.jpg";
 import rahini from "../assets/rahini.jpg";
 import josna from "../assets/josna.jpg";
 import varshini from "../assets/varshini.jpg";
 import indhuja from "../assets/indhu.jpg";
 import vikas from "../assets/vikas.jpg";
 import azar from "../assets/azar.jpg";
 import roshan from "../assets/roshan.jpeg";
 import abhishek from "../assets/abhishek.PNG";
 import kavin from "../assets/kavin.jpeg";

const members = [
  {
    name: "KeerthiVarman",
    image: keerthi,
    role: "Founder & CEO – Sun Info Media",
    description:
      "The visionary behind Sun Info Media, Keerthi Varman leads the team with a passion for innovation and technology. With a clear focus on growth and creativity, he drives the company toward building impactful digital experiences and future-ready solutions.",
  },
  {
    name: "Kalaiyarasi",
    image: kalai,
    role: "Manager",
    description:
      "Oversees and coordinates overall production operations acrossdepartments to ensure timely, efficient, and high-quality project delivery. Manages teams, resources, and workflows to achieve organizational goals and maintain performance excellence.",
  },
  {
    name: "Siva Perumal",
    image: siva,
    role: "Media Production Head",
    description:
      "Leads and manages end-to-end media production across video, photography, motion graphics, and digital content platforms. Oversees creative teams, workflows, and quality standards to deliver high-impact content aligned with organizational goals.",
  },
  {
    name: "Sandra Grace",
    image: sandra,
    role: "3D Technical Artist",
    description:
      "Develops high-quality 3D models and digital characters using Blender,unity and unreal with expertise in creating expressive mascots and visual assets. Delivers optimized, visually stunning design",
  },
  {
    name: "Muthupandian",
    image: muthu,
    role: "3D Creative & Meta Marketing Manager",
    description:
      "Leads the creation of high-impact 3D visual content and manages Meta platform campaigns to strengthen digital brand presence. Develops innovative marketing strategies using immersive designs and performance-driven creatives to maximize audience engagement and conversions.",
  },
  {
    name: "Seenu Bala",
    image: seenu,
    role: "UI/UX Designer",
    description:
      "Designs intuitive, user-centered interfaces and seamless digital experiences through research, wireframing, and visual design. Creates visually appealing and functional layouts that enhance usability, engagement, and overall user satisfaction.",
  },
  {
    name: "Sekar",
    image: sekar,
    role: "Cinematographer & Editor",
    description:
      "Captures high-quality visuals and crafts compelling stories through expert camera work and professional video editing. Produces visually stunning and engaging content that enhances brand identity and audience connection across digital platforms.",
  },
  {
    name: "Anuz Balamurali",
    image: anuz,
    role: "Development Team Lead",
    description:
      "Leads development teams in building scalable, high-quality software solutions through strong technical guidance and collaboration. Oversees architecture, code reviews, and project execution to ensure timely delivery. Mentors engineers, streamlines workflows, and drives innovation while maintaining performance, reliability, and best practices.",
  },
  {
    name: "Ayub Alikhan",
    image: ayub,
    role: "Software Developer",
    description:
      "Ayub Alikhan J is a dedicated software developer specializing in large-scale application development and deployment. Renowned for delivering innovative and timely solutions, he excels at optimizing systems for peak performance and seamless scalability. Smart and adaptive, Ayub brings a sharp problem-solving mindset and unwavering focus to every project—ensuring the right solution is always delivered at the perfect moment.",
  },
  {
    name: "Vivekanandhan",
    image: vivek,
    role: "Software Developer",
    description:
      "Vivek is a technology enthusiast with a broad expertise spanning full-stack development, machine learning and cybersecurity. Driven by a deep curiosity for technology, he continuously explores emerging trends and applies them to build innovative and secure software solutions. Vivek combines his technical skills with a problem-solving mindset to contribute effectively to any tech-driven project",
  },
  {
    name: "Shaantha Kumar",
    image: shaantha,
    role: "Full Stack Developer",
    description:
      "Shaanthakumar is a passionate technology enthusiast with strong expertise in software systems, artificial intelligence, and data science. Driven by analytical thinking and innovation, he continuously explores emerging technologies and applies them to build efficient and scalable solutions. He combines technical proficiency with a structured problem-solving approach to design reliable, real-world applications. Shaanthakumar strives to contribute meaningfully to impactful, technology-driven initiatives.",
  },
  {
    name: "Anugraha",
    image: anu,
    role: "Full Stack Developer",
    description:
      "Anugraha is a visionary UI developer, celebrated for her expertise in frontend design and mastery of large language models . She infuses each project with elegant style and creative flair, transforming interfaces into works of art. Her unique blend of design sensibility and technical skill extends to expert video editing. This makes her a standout in creating engaging and visually stunning digital experiences.",
  },
  {
    name: "Devaranjanaa",
    image: deva,
    role: "Software Developer",
    description:
      "Devaranjanaa is a skilled backend and AI developer who thrives on tackling complex challenges. Known for her creative thinking, she builds intelligent and scalable systems. With a strategic approach, she transforms problems into impactful solutions. Her drive for innovation ensures meaningful results every time.",
  },
  {
    name: "Kavya",
    image: kavya,
    role: "Full Stack Developer",
    description:
      "Kavya is a full stack developer who crafts clean, responsive digital experiences focused on users. She excels at creating intuitive, engaging interfaces with a meticulous eye for quality. Reliable and creative, she delivers production-ready solutions across the stack. Every project reflects her commitment to usability and excellence.",
  },
  {
    name: "Priyadharshini",
    image: priya,
    role: "AI Content Specialist",
    description:
      "Creates high-quality AI-generated voice, image, and video content to support digital marketing and brand communication. Develops intelligent AI mascots with realistic gestures, expressive visuals, and accurate lip-syncing for enhanced audience engagement.",
  },
  {
    name: "Kavya",
    image: kavya2,
    role: "Academic Content Developer",
    description:
      "Designs and develops high-quality educational content for technical training programs, combining theory with hands-on practical exercises. Specializes in curriculum and syllabus creation, instructional script writing, and content analysis to deliver structured, impactful, and industry-relevant learning experiences.",
  },
  {
    name: "Rahini",
    image: rahini,
    role: "Academic Content Researcher",
    description:
      "Conducts in-depth research and content analysis to create industry relevant educational materials for technical training programs. Develops structured curriculum, syllabus, and instructional scripts that balance practical learning with strong theoretical foundations.",
  },
  {
    name: "Josna",
    image: josna,
    role: "Aviation Simulation Trainer",
    description:
      "Configures and integrates hardware and software systems to deliver immersive virtual reality training environments. Trains learners to operate advanced simulators using platforms such as Oculus for realistic, interactive, and skill-based learning experiences.",
  },
  {
    name: "Varshini",
    image: varshini,
    role: "E-Commerce Branding Executive (Textile)",
    description:
      "Creates and manages high-quality visual content by filming and editing textile and apparel products for digital platforms. Develops engaging videos and promotional media that strengthen brand identity and support online marketing and sales strategies.",
  },
  {
    name: "Indhuja",
    image: indhuja,
    role: "Textile Marketing Executive",
    description:
      "Creates engaging visual content by shooting and editing textile products for social media and digital marketing platforms. Promotes fabrics and collections through creative videos and campaigns to enhance brand visibility and customer engagement.",
  },
  {
    name: "Vikas",
    image: vikas,
    role: "Professional Educational Content Video Editor",
    description:
      "Edits and produces high-quality educational videos by sourcing content, developing structured storyboards, and integrating engaging motion graphics. Delivers visually polished and informative learning materials that enhance understanding and learner engagement.",
  },
  {
    name: "Mohamed Azardeen",
    image: azar,
    role: "Professional Educational Content Video Editor",
    description:
      "Edits and produces high-quality educational videos by sourcing content, developing structured storyboards, and integrating engaging motion graphics. Delivers visually polished and informative learning materials that enhance understanding and learner engagement.",
  },
  {
    name: "Krithik Roshan",
    image: roshan,
    role: "Business Analyst",
    description:
      "Analyzes business processes, requirements, and data to identify opportunities for improvement and support strategic decision-making. Collaborates with stakeholders to design effective solutions, optimize workflows, and drive operational efficiency and business growth.",
  },
  {
    name: "Abhishek Ramesh",
    image: abhishek,
    role: "Cybersecurity Analyst",
    description:
      "Monitors security systems, analyzes threats, and responds to incidents as a GRC & SOC Analyst while ensuring compliance with governance, risk, and regulatory standards. Conducts security assessments, risk management, and continuous monitoring to protect organizational infrastructure and maintain strong cyber resilience.",
  },
  {
    name: "Kavin",
    image: kavin,
    role: "Business Analyst",
    description:
      "Analyzes business processes, requirements, and data to identify opportunities for improvement and support strategic decision-making. Collaborates with stakeholders to design effective solutions, optimize workflows, and drive operational efficiency and business growth.",
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
    <div className="bg-black text-white px-4 md:px-5 py-10 md:py-20 overflow-hidden font-sans">
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
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider mb-6 md:mb-10 relative text-left inline-block">
        <span className="text-gray-400 mr-2 md:mr-3">03</span>
        <span className="text-white">
          The Minds Behind the Mission
        </span>
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"></span>
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 lg:gap-20">
        {/* Mobile: Image First */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-60 order-1 lg:order-2">
          <div className="relative animate-float">
            <img
              key={member.name}
              src={member.image}
              alt={member.role}
              className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover object-center rounded-2xl transition-all duration-500 ease-in-out hover:scale-105 fade-in"
              style={{
                border: 'none'
              }}
              // ...no boxShadow hover effect...
            />
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-red-500/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-4 h-4 md:w-6 md:h-6 bg-blue-500/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 -right-6 md:-right-8 w-3 h-3 md:w-4 md:h-4 bg-purple-500/30 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Mobile: Text Content Second */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-60 order-2 lg:order-1">
          <div key={member.name} className="fade-in">
            <h4 className="text-sm md:text-lg uppercase opacity-60 tracking-widest mb-2 md:mb-2.5 text-gray-300">
              {member.role}
            </h4>
            <h3 className="text-2xl sm:text-3xl md:text-4xl uppercase text-white mb-3 md:mb-5 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold">
              {member.name}
            </h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-300 whitespace-pre-wrap px-2 md:px-2.5 lg:px-0 mb-4 md:mb-0">
              {member.description}
            </p>



            {/* Navigation Buttons */}
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start mt-4 md:mt-6">
              <button
                className="nav-button text-white p-3 md:p-4 rounded-full text-base md:text-lg font-medium cursor-pointer flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                onClick={prevMember}
                disabled={isAnimating}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button
                className="nav-button text-white p-3 md:p-4 rounded-full text-base md:text-lg font-medium cursor-pointer flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                onClick={nextMember}
                disabled={isAnimating}
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}