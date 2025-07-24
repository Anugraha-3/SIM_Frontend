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
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  // Ultra smooth auto scroll effect for coverflow
  useEffect(() => {
    if (isMobile && !isPaused) {
      autoScrollRef.current = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % services.length);
          setTimeout(() => setIsTransitioning(false), 600);
        }, 100);
      }, 4000);
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

  const smoothTransition = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 100);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % services.length;
    smoothTransition(newIndex);
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 5000);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + services.length) % services.length;
    smoothTransition(newIndex);
    pauseAutoScroll();
    setTimeout(resumeAutoScroll, 5000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    pauseAutoScroll();
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

    touchStartX.current = 0;
    touchEndX.current = 0;
    
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
        
        {/* Mobile Flipster Carousel with True Coverflow */}
        <div 
          className="relative h-[400px] flex items-center justify-center overflow-hidden"
          style={{ perspective: '1200px' }}
        >
          <div 
            className="relative w-full h-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={pauseAutoScroll}
            onMouseLeave={resumeAutoScroll}
          >
            {getVisibleServices().map((service, index) => {
              const { position } = service;
              const isActive = position === 0;
              const absPosition = Math.abs(position);
              
              // True flipster/coverflow calculations
              const translateX = position * 120; // Increased spacing for better visibility
              const rotateY = position * -45; // More dramatic rotation
              const translateZ = isActive ? 0 : -Math.abs(position) * 100; // Depth effect
              const scale = isActive ? 1 : Math.max(0.75, 1 - absPosition * 0.15); // Less aggressive scaling
              const opacity = Math.max(0.6, 1 - absPosition * 0.25); // Side items more visible
              const zIndex = isActive ? 30 : 25 - absPosition;
              
              return (
                <div
                  key={`${service.id}-${index}`}
                  className={`absolute top-1/2 left-1/2 cursor-pointer transition-all ${
                    isTransitioning ? 'duration-700 ease-in-out' : 'duration-1000 ease-out'
                  }`}
                  style={{
                    transform: `
                      translate(-50%, -50%) 
                      translateX(${translateX}px) 
                      translateZ(${translateZ}px)
                      scale(${scale}) 
                      rotateY(${rotateY}deg)
                    `,
                    opacity: opacity,
                    zIndex: zIndex,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => isActive && handleServiceClick(service)}
                >
                  <div className={`w-[280px] relative transition-all ${
                    isTransitioning ? 'duration-700 ease-in-out' : 'duration-1000 ease-out'
                  } ${isActive ? 'hover:-translate-y-3' : ''}`}>
                    {/* Enhanced glow effect */}
                    <div className={`absolute -inset-2 rounded-2xl transition-all ${
                      isTransitioning ? 'duration-700 ease-in-out' : 'duration-1000 ease-out'
                    } ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-500/40 via-purple-500/40 to-indigo-500/40 blur-lg opacity-100' 
                        : 'bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 blur-md opacity-70'
                    }`}></div>
                    
                    {/* Card content */}
                    <div className={`relative bg-white/10 border backdrop-blur-lg rounded-2xl shadow-2xl transition-all ${
                      isTransitioning ? 'duration-700 ease-in-out' : 'duration-1000 ease-out'
                    } ${
                      isActive 
                        ? 'border-white/30 shadow-pink-500/30' 
                        : 'border-white/20 shadow-black/60'
                    }`}>
                      <div
                        className="h-[220px] bg-cover bg-center rounded-t-2xl relative overflow-hidden"
                        style={{ backgroundImage: `url(${service.image})` }}
                      >
                        <div className={`absolute inset-0 transition-all duration-600 rounded-t-2xl ${
                          isActive 
                            ? 'bg-black/10 hover:bg-black/30' 
                            : 'bg-black/20 hover:bg-black/40'
                        }`}></div>
                        
                        {/* Enhanced glow overlay */}
                        <div className={`absolute inset-0 rounded-t-2xl transition-all duration-800 ${
                          isActive 
                            ? 'bg-gradient-to-br from-pink-500/10 via-transparent to-indigo-500/10' 
                            : 'bg-gradient-to-br from-pink-500/5 via-transparent to-indigo-500/5'
                        }`}></div>
                        
                        <div className={`absolute bottom-0 w-full bg-gradient-to-b from-transparent via-black/60 to-black/90 p-4 text-white font-semibold text-center transition-all duration-600 ${
                          isActive ? 'text-lg' : 'text-base'
                        }`}>
                          {service.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 hover:scale-125 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-pink-500 to-indigo-500 border-pink-500'
                  : 'bg-transparent border-white/40 hover:border-white/70 hover:bg-white/10'
              }`}
              onClick={() => {
                smoothTransition(index);
                pauseAutoScroll();
                setTimeout(resumeAutoScroll, 5000);
              }}
              aria-label={`Go to ${services[index].title} service`}
            >
              {/* Dot glow effect */}
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-sm opacity-60 scale-150"></div>
              )}
            </button>
          ))}
        </div>
      </section>
    );
  }

  // Desktop version with original scrolling animation and enhanced glow
  return (
    <section className="bg-black text-white px-5 py-20 overflow-hidden font-primary">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-10 relative text-left inline-block">
        <span className="text-gray-700 mr-3">02</span> Our Amazing Services
        <span className="absolute left-0 -bottom-1 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></span>
      </h2>
      <div className="group relative w-full overflow-hidden">
        <div className="flex flex-nowrap gap-8 min-w-fit animate-scroll_left group-hover:animation-paused">
          {duplicated.map((service, index) => (
            <div
              key={index}
              className="flex-none w-[300px] relative cursor-pointer group/card"
              onClick={() => handleServiceClick(service)}
            >
              {/* Enhanced glow effect for desktop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl blur-sm opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 hover:shadow-2xl hover:shadow-pink-500/20">
                <div
                  className="h-[200px] bg-cover bg-center rounded-t-2xl relative overflow-hidden"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-500 rounded-t-2xl"></div>
                  
                  {/* Desktop glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-transparent to-indigo-500/0 group-hover/card:from-pink-500/10 group-hover/card:to-indigo-500/10 transition-all duration-500 rounded-t-2xl"></div>
                  
                  <div className="absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black/80 p-4 text-white text-lg font-semibold text-center transition-all duration-300">
                    {service.title}
                  </div>
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
      `}</style>
    </section>
  );
}