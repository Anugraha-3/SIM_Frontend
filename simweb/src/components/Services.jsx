import React, { useEffect, useRef, useState } from "react";
import { Camera, Video, Globe, Zap, Eye, Monitor, Calendar, Building } from "lucide-react";

const services = [
  {
    id: "simulation",
    title: "Simulation",
    image: "/simulation.jpg",
    icon: <Monitor className="w-8 h-8" />,
    description: "Advanced simulation technology for immersive experiences and training solutions.",
    route: "/services/SimulationPage"
  },
  {
    id: "photography", 
    title: "Photography",
    image: "/photography.jpg",
    icon: <Camera className="w-8 h-8" />,
    description: "Professional photography services for events, products, and corporate needs.",
    route: "/services/PhotographyPage"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    image: "/digital.jpg", 
    icon: <Globe className="w-8 h-8" />,
    description: "Strategic digital marketing solutions to boost your online presence.",
    route: "/services/DigitalMarketingPage"
  },
  {
    id: "3d-hologram",
    title: "3D Hologram",
    image: "/hologram.jpg",
    icon: <Eye className="w-8 h-8" />,
    description: "Cutting-edge 3D holographic displays for futuristic presentations.",
    route: "/services/HologramPage"
  },
  {
    id: "it-services", 
    title: "IT Services",
    image: "/it.jpg",
    icon: <Zap className="w-8 h-8" />,
    description: "Comprehensive IT solutions and technical support for your business.",
    route: "/services/ITServicesPage"
  },
  {
    id: "video-production",
    title: "Video Production",
    image: "/video.jpg",
    icon: <Video className="w-8 h-8" />,
    description: "Professional video production services from concept to final cut.",
    route: "/services/VideoProductionPage"
  }
];

export default function Services() {
  const duplicated = [...services, ...services, ...services];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto scroll effect for mobile
  useEffect(() => {
    if (isMobile && !isPaused) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isMobile, isPaused]);

  const pauseAutoScroll = () => {
    setIsPaused(true);
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const resumeAutoScroll = () => {
    setIsPaused(false);
  };

  const handleServiceClick = (service) => {
    // Navigate to the service page
    window.location.href = service.route;
    // Or if using React Router: navigate(service.route);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 5000); // Resume after 5 seconds of inactivity
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 5000); // Resume after 5 seconds of inactivity
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    // Reset touch values
    touchStartX.current = 0;
    touchEndX.current = 0;
    
    // Resume auto scroll after 5 seconds
    setTimeout(resumeAutoScroll, 5000);
  };

  const getVisibleServices = () => {
    const result = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + services.length) % services.length;
      result.push({ ...services[index], position: i });
    }
    return result;
  };

  if (isMobile) {
    return (
      <section className="bg-black text-white px-5 py-20 overflow-hidden font-primary">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-10 relative text-left inline-block">
          <span className="text-gray-700 mr-3">02</span> Our Amazing Services
          <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></span>
        </h2>
        
        {/* Mobile Flipster Carousel */}
        <div className="relative h-[300px] flex items-center justify-center perspective-1000">
          <div 
            className="relative w-full h-full"
            onTouchStart={(e) => {
              handleTouchStart(e);
              pauseAutoScroll();
            }}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          >
            {getVisibleServices().map((service, index) => {
              const { position } = service;
              const isActive = position === 0;
              
              return (
                <div
                  key={`${service.id}-${index}`}
                  className={`absolute top-1/2 left-1/2 transition-all duration-500 ease-out cursor-pointer ${
                    isActive ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    transform: `
                      translate(-50%, -50%) 
                      translateX(${position * 60}px) 
                      scale(${isActive ? 1 : 0.8}) 
                      rotateY(${position * 15}deg)
                    `,
                    opacity: Math.abs(position) > 1 ? 0 : isActive ? 1 : 0.6,
                  }}
                  onClick={() => isActive && handleServiceClick(service)}
                >
                  <div className={`w-[280px] bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ${
                    isActive ? 'hover:-translate-y-2' : ''
                  }`}>
                    <div
                      className="h-[180px] bg-cover bg-center rounded-t-2xl relative"
                      style={{ backgroundImage: `url(${service.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors rounded-t-2xl"></div>
                      <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black p-4 text-white text-lg font-semibold text-center">
                        {service.title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-110 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-pink-500 to-indigo-500 border-pink-500 shadow-lg shadow-pink-500/30'
                  : 'bg-transparent border-white/40 hover:border-white/70 hover:bg-white/10'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                pauseAutoScroll();
                setTimeout(resumeAutoScroll, 5000); // Resume after 5 seconds
              }}
              aria-label={`Go to ${services[index].title} service`}
            />
          ))}
        </div>
      </section>
    );
  }

  // Desktop version with original scrolling animation
  return (
    <section className="bg-black text-white px-5 py-20 overflow-hidden font-primary">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-10 relative text-left inline-block">
        <span className="text-gray-700 mr-3">02</span> Our Amazing Services
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></span>
      </h2>
      <div className="group relative w-full overflow-hidden">
        <div className="flex flex-nowrap gap-6 min-w-fit animate-scroll_left group-hover:animation-paused">
          {duplicated.map((service, index) => (
            <div
              key={index}
              className="flex-none w-[280px] bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleServiceClick(service)}
            >
              <div
                className="h-[180px] bg-cover bg-center rounded-t-2xl relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors rounded-t-2xl"></div>
                <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black p-4 text-white text-lg font-semibold text-center">
                  {service.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll_left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll_left {
          animation: scroll_left 30s linear infinite;
        }
        
        .animation-paused {
          animation-play-state: paused;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}