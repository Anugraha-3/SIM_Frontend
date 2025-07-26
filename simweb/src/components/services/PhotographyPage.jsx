import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, Camera, MapPin, Settings, Eye } from "lucide-react";

const serviceData = {
  id: "photography",
  title: "Photography",
  image: "/photography.jpg",
  icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Professional photography services capturing moments, products, and celestial wonders with expertise and creativity.",
  features: [
    "Event Photography", 
    "Astro Photography", 
    "Professional Photography", 
    "Product Photography",
    "Drone Sales & Training"
  ],
  details: "Transform your vision into stunning visuals with our comprehensive photography services. From capturing life's precious moments to showcasing products and exploring the cosmos, our experienced photographers combine cutting-edge technology with artistic expertise to deliver exceptional results.",
  eventPhotography: "Our event photography services capture the essence of special moments, whether it's the joyous celebration of \"Future Together\" at weddings, the enchanting \"Bridal Bliss,\" or the heartfelt \"After-Wedding\" and \"Reception Highlights.\" We also specialize in \"Little One's Welcome\" ceremonies, \"Growth Celebrations,\" and a variety of milestone events. Our expertise extends to product photography, showcasing your offerings with stunning visuals that highlight their features and appeal. Additionally, we cover maternity shoots, preserving the beauty of motherhood, as well as school and college events, capturing the spirit of youth and academic achievements. With a keen eye for detail and a commitment to storytelling, our event photography transforms fleeting moments into timeless memories.",
  astroPhotography: "Astro photography is a captivating art that involves capturing the beauty of the night sky and celestial bodies. Our astro photography services are designed to showcase the wonders of the universe, from stunning star trails and vibrant nebulae to breathtaking views of planets and the Milky Way. Using advanced equipment and techniques, we bring the cosmos to life, allowing you to experience the awe-inspiring beauty of the universe like never before. Whether you're interested in capturing the perfect shot of a meteor shower, the intricate details of a distant galaxy, or the serene beauty of a starry night, our expert photographers have the skills and knowledge to create stunning images that evoke a sense of wonder and exploration. Perfect for exhibitions, educational purposes, or personal collections, our astro photography not only enhances your visual experience but also sparks curiosity about the vastness of space.",
  professionalPhotography: "Professional Photography at Sun Info Media specializes in capturing stunning visuals that elevate your brand and enhance your marketing efforts. Our team employs advanced techniques and state-of-the-art equipment to produce high-quality images that showcase your products in the best light. Whether for e-commerce, advertising campaigns, or promotional materials, we focus on creating compelling visuals that attract and engage your target audience. Understanding the importance of storytelling in marketing, our photography captures the essence of your brand while highlighting the unique features and benefits of your products. From meticulous product shots to dynamic lifestyle imagery, we tailor our approach to meet your specific needs, ensuring that every photo resonates with your audience and conveys your brand message effectively. With a keen eye for detail and a passion for creativity, we deliver professional photography that not only enhances your marketing materials but also drives conversions and boosts brand recognition.",
  droneSalesTraining: "We specialize in the sale of high-quality drones, offering a diverse range of models including the DJI FPV Explorer, DJI Mini, DJI Air, DJI Mavic, DJI Inspire, and DJI Phantom, each equipped with advanced features for exceptional performance in both recreational and professional use. In addition to our sales, we provide comprehensive training programs designed to help users master their drones, covering essential skills such as flight operations, aerial photography, and videography techniques. Whether you are a beginner or an experienced pilot looking to enhance your skills, our drone sales and training programs offer the perfect blend of quality products and expert guidance, allowing you to explore the skies with confidence!"
};

const droneModels = [
  { name: "DJI FPV Explorer", category: "FPV Racing" },
  { name: "DJI Mini", category: "Compact" },
  { name: "DJI Air", category: "Portable" },
  { name: "DJI Mavic", category: "Professional" },
  { name: "DJI Inspire", category: "Cinematic" },
  { name: "DJI Phantom", category: "Classic" }
];

export default function PhotographyPage() {
  const [showDroneDetails, setShowDroneDetails] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    // Trigger initial load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleLearnMoreClick = () => {
    const eventSection = document.getElementById('event-section');
    if (eventSection) {
      eventSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "917788003366";
    const message = "Hey!, I'm interested in the photography services";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white font-primary overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 ease-out hover:scale-105"
          style={{ backgroundImage: `url(${serviceData.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000"></div>
        </div>
        
        <button
          onClick={handleBackClick}
          className={`absolute top-3 left-3 sm:top-4 sm:left-4 md:top-8 md:left-8 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 z-10 transform text-xs sm:text-sm md:text-base ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="hidden xs:inline sm:hidden md:inline">Back to Services</span>
          <span className="xs:hidden sm:inline md:hidden">Back</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className={`flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 transform transition-all duration-800 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="p-1.5 sm:p-2 md:p-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300 flex-shrink-0">
                {serviceData.icon}
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {serviceData.title}
              </h1>
            </div>
            <p className={`text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl leading-relaxed transform transition-all duration-800 delay-500 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {serviceData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Details */}
          <div 
            id="details-section"
            data-animate
            className={`transform transition-all duration-800 ${
              visibleSections['details-section'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent animate-gradient">
              About This Service
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 hover:text-white transition-colors duration-300">
              {serviceData.details}
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                Get Started
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="w-full px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 text-center text-sm sm:text-base"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Features */}
          <div 
            id="features-section"
            data-animate
            className={`transform transition-all duration-800 delay-200 ${
              visibleSections['features-section'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">Key Features</h2>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3 md:gap-4">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-2.5 sm:p-3 md:p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-500 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
                    <span className="font-medium text-xs sm:text-sm md:text-base">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photography Services Details */}
        <div className="mt-8 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8 md:space-y-12">
          {/* Event Photography */}
          <div 
            id="event-section"
            data-animate
            className={`p-3 sm:p-4 md:p-8 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-500 transform ${
              visibleSections['event-section'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="transform transition-all duration-700 delay-200 hover:translate-x-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
                  Event Photography
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
                  {serviceData.eventPhotography}
                </p>
              </div>
              <div className="relative group order-first lg:order-last">
                <img 
                  src="/src/components/service/event.jpg" 
                  alt="Event Photography" 
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-pink-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg sm:rounded-xl group-hover:from-pink-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/10 rounded-lg sm:rounded-xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Astro Photography */}
          <div 
            id="astro-section"
            data-animate
            className={`p-3 sm:p-4 md:p-8 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500 transform ${
              visibleSections['astro-section'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="relative group">
                <img 
                  src="/src/components/service/astro.jpg" 
                  alt="Astro Photography" 
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-indigo-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg sm:rounded-xl group-hover:from-indigo-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 rounded-lg sm:rounded-xl transition-all duration-500"></div>
              </div>
              <div className="transform transition-all duration-700 delay-200 hover:-translate-x-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Astro Photography
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
                  {serviceData.astroPhotography}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Photography */}
          <div 
            id="professional-section"
            data-animate
            className={`p-3 sm:p-4 md:p-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 transform ${
              visibleSections['professional-section'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="transform transition-all duration-700 delay-200 hover:translate-x-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Professional Photography
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
                  {serviceData.professionalPhotography}
                </p>
              </div>
              <div className="relative group order-first lg:order-last">
                <img 
                  src="/src/components/service/professional.jpg" 
                  alt="Professional Photography" 
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-purple-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg sm:rounded-xl group-hover:from-purple-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-lg sm:rounded-xl transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Drone Sales & Training */}
          <div 
            id="drone-section"
            data-animate
            className={`p-3 sm:p-4 md:p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 transform ${
              visibleSections['drone-section'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
              <div className="relative group">
                <img 
                  src="/drone.jpg" 
                  alt="Drone Sales & Training" 
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover rounded-lg sm:rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-cyan-500/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg sm:rounded-xl group-hover:from-cyan-500/20 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-lg sm:rounded-xl transition-all duration-500"></div>
              </div>
              <div className="transform transition-all duration-700 delay-200 hover:-translate-x-2">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Drone Sales & Training Programs
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed mb-3 sm:mb-4 md:mb-6 hover:text-white transition-colors duration-300">
                  {serviceData.droneSalesTraining}
                </p>
                <button 
                  onClick={() => setShowDroneDetails(!showDroneDetails)}
                  className="flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 group text-xs sm:text-sm md:text-base w-full"
                >
                  <Eye className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-300 ${showDroneDetails ? 'rotate-180' : 'group-hover:scale-110'}`} />
                  {showDroneDetails ? 'Hide' : 'View'} Drone Details
                </button>
              </div>
            </div>
          </div>

          {/* Drone Details Modal/Section */}
          <div className={`transition-all duration-700 ease-in-out transform origin-top overflow-hidden ${
            showDroneDetails 
              ? 'opacity-100 scale-y-100 max-h-none translate-y-0' 
              : 'opacity-0 scale-y-0 max-h-0 -translate-y-10'
          }`}>
            <div className="p-3 sm:p-4 md:p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl sm:rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Available Drone Models
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                {droneModels.map((drone, index) => (
                  <div 
                    key={index} 
                    className={`p-2.5 sm:p-3 md:p-4 bg-white/5 border border-cyan-500/20 rounded-lg backdrop-blur-md hover:bg-white/10 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <h5 className="font-semibold text-cyan-400 text-xs sm:text-sm md:text-base truncate pr-2">{drone.name}</h5>
                      <MapPin className="w-3 h-3 md:w-4 md:h-4 text-blue-400 animate-bounce flex-shrink-0" />
                    </div>
                    <p className="text-xs md:text-sm text-gray-400">{drone.category}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg sm:rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <Settings className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400 animate-spin-slow flex-shrink-0" />
                    <h5 className="text-base sm:text-lg md:text-xl font-bold text-cyan-400">Training Programs</h5>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Flight Operations & Safety</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Aerial Photography Techniques</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Professional Videography</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Advanced Drone Controls</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Regulatory Compliance</li>
                  </ul>
                </div>

                <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-transparent rounded-lg sm:rounded-xl border border-blue-500/20 hover:border-blue-500/40 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400 hover:animate-pulse flex-shrink-0" />
                    <h5 className="text-base sm:text-lg md:text-xl font-bold text-blue-400">Applications</h5>
                  </div>
                  <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base">
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Recreational Flying</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Professional Photography</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Real Estate Marketing</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Event Coverage</li>
                    <li className="hover:text-white hover:translate-x-2 transition-all duration-300">• Inspection Services</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 md:mt-8 pb-2">
                <button 
                  className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 text-xs sm:text-sm md:text-base"
                  onClick={() => window.location.href = "https://www.indiamart.com/sun-info-mediacoimbatore/drone-camera.html"}
                >
                  Explore Drones
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer for mobile responsiveness */}
        <div className={`transition-all duration-700 ${
          showDroneDetails ? 'h-8 sm:h-12 md:h-16' : 'h-0'
        }`}></div>

        {/* Why Choose Us Section */}
        <div 
          id="why-choose-section"
          data-animate
          className={`mt-8 sm:mt-12 md:mt-16 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-500 transform ${
            visibleSections['why-choose-section'] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
          }`}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Why Choose Our {serviceData.title} Service?
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
              We combine cutting-edge technology with creative expertise to deliver exceptional results. 
              Our team of professionals is dedicated to bringing your vision to life with precision, 
              innovation, and attention to detail that sets us apart in the industry.
            </p>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
              From ground-based photography to aerial perspectives with our drone services, we cover every angle of your story. 
              Whether it's capturing life's precious moments, showcasing products, or exploring the cosmos, 
              we deliver results that exceed expectations.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Expert Team</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Professional photographers with years of experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Latest Equipment</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">State-of-the-art cameras and drone technology</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Quick Delivery</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Fast turnaround times without compromising quality</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white text-sm sm:text-base mb-1">Competitive Pricing</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Premium services at affordable rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-900/50 to-black/50 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
              Contact us today to discuss your photography needs and let us bring your vision to life with our professional services.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us Now
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0,-8px,0);
          }
          70% {
            transform: translate3d(0,-4px,0);
          }
          90% {
            transform: translate3d(0,-2px,0);
          }
        }

        /* Custom responsive utilities */
        @media (min-width: 475px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
        }

        /* Mobile-specific improvements */
        @media (max-width: 640px) {
          .transition-all {
            transition-duration: 400ms;
          }
          
          /* Ensure proper spacing on mobile */
          .space-y-6 > :not([hidden]) ~ :not([hidden]) {
            margin-top: 1.5rem;
          }
          
          /* Improved touch targets */
          button {
            min-height: 44px;
          }
        }

        /* Prevent horizontal scroll on mobile */
        body {
          overflow-x: hidden;
        }
        
        /* Smooth transitions for expandable content */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
}