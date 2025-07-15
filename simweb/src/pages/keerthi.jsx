import React, { useState, useEffect } from "react";
import { ChevronLeft, Building, Calendar, Award, TrendingUp, Users, Globe, Briefcase } from "lucide-react";
import keerthiImg from "../assets/keerthivarman.png";
const timeline = [
  { year: "2025", text: "Launched C99 Conceptual Trading Business", icon: <Briefcase className="w-4 h-4" /> },
  { year: "2024", text: "Entered Space Tech, Drone Tech, Flying Cars (R&D)", icon: <Award className="w-4 h-4" /> },
  { year: "2023", text: "Started SIM Tech Holding Company", icon: <Building className="w-4 h-4" /> },
  {
    year: "2022",
    text: "Ventured into Holograms, Holobox, Future Car, VR/AR/MR, AI-based Agri & Medical",
    icon: <TrendingUp className="w-4 h-4" />
  },
  { year: "2021", text: "Launched Astro photography company", icon: <Globe className="w-4 h-4" /> },
  { year: "2020", text: "Developed all-kind vehicular simulators", icon: <Briefcase className="w-4 h-4" /> },
  { year: "2018", text: "Founded election management company", icon: <Users className="w-4 h-4" /> },
  { year: "2016", text: "Started telecom services", icon: <TrendingUp className="w-4 h-4" /> },
  { year: "2014", text: "Launched SIM TV", icon: <Globe className="w-4 h-4" /> },
  { year: "2009", text: "Co-founded SIM", icon: <Building className="w-4 h-4" /> },
];

// Rocket SVG Component
// Rocket SVG Component - Realistic Design
const RocketComponent = ({ isActive, position, opacity = 1, isFlying = false }) => (
  <div 
    className={`absolute left-4 transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
    style={{ 
      transform: `translateY(${position}px) ${isFlying ? 'translateX(-10px) rotate(-5deg)' : ''}`,
      opacity: opacity,
      zIndex: 20
    }}
  >
    <div className="relative">
      {/* Realistic Rocket Design */}
      <svg width="50" height="80" viewBox="0 0 50 80" className="relative z-10">
        <defs>
          <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#F1F5F9', stopOpacity: 1 }} />
            <stop offset="30%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#E2E8F0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#CBD5E1', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="noseConeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF6B6B', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#EE5A52', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="finGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
          </linearGradient>
          
          <radialGradient id="windowGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" style={{ stopColor: '#87CEEB', stopOpacity: 1 }} />
            <stop offset="40%" style={{ stopColor: '#4FC3F7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0277BD', stopOpacity: 1 }} />
          </radialGradient>
          
          <linearGradient id="engineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#424242', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#212121', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1A1A1A', stopOpacity: 1 }} />
          </linearGradient>
          
          <radialGradient id="metalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#E8EAF6', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#C5CAE9', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#9FA8DA', stopOpacity: 1 }} />
          </radialGradient>
          
          <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        
        {/* Main rocket body - cylindrical with realistic proportions */}
        <ellipse cx="25" cy="15" rx="10" ry="3" fill="url(#shadowGrad)" />
        <rect x="15" y="15" width="20" height="45" fill="url(#rocketBodyGrad)" stroke="#B0BEC5" strokeWidth="0.8" rx="2"/>
        
        {/* Nose cone - sharp and aerodynamic */}
        <path d="M25 0 L15 15 L35 15 Z" fill="url(#noseConeGrad)" stroke="#D32F2F" strokeWidth="0.8"/>
        
        {/* Body panels and details */}
        <rect x="16" y="20" width="18" height="1" fill="#90A4AE" rx="0.5"/>
        <rect x="16" y="35" width="18" height="1" fill="#90A4AE" rx="0.5"/>
        <rect x="16" y="50" width="18" height="1" fill="#90A4AE" rx="0.5"/>
        
        {/* Command module window - realistic spacecraft window */}
        <circle cx="25" cy="25" r="6" fill="url(#windowGrad)" stroke="#1565C0" strokeWidth="1.2"/>
        <circle cx="25" cy="25" r="5" fill="#4FC3F7" opacity="0.7"/>
        <circle cx="27" cy="23" r="2" fill="#FFFFFF" opacity="0.9"/>
        <circle cx="28" cy="22" r="0.8" fill="#FFFFFF"/>
        <circle cx="25" cy="25" r="4.5" fill="none" stroke="#0D47A1" strokeWidth="0.5"/>
        
        {/* Realistic fins - swept back design */}
        <path d="M10 50 L15 40 L15 60 L10 65 Z" fill="url(#finGrad)" stroke="#1565C0" strokeWidth="0.8"/>
        <path d="M40 50 L35 40 L35 60 L40 65 Z" fill="url(#finGrad)" stroke="#1565C0" strokeWidth="0.8"/>
        
        {/* Engine section - more detailed */}
        <rect x="17" y="60" width="16" height="12" fill="url(#engineGrad)" stroke="#424242" strokeWidth="0.8" rx="1"/>
        <ellipse cx="25" cy="72" rx="7" ry="3" fill="#1A1A1A" stroke="#424242" strokeWidth="0.8"/>
        
        {/* Engine nozzles */}
        <circle cx="21" cy="67" r="1.5" fill="#616161"/>
        <circle cx="29" cy="67" r="1.5" fill="#616161"/>
        <circle cx="25" cy="65" r="1" fill="#757575"/>
        
        {/* Side thrusters - more realistic */}
        <rect x="11" y="35" width="3" height="8" fill="url(#metalGrad)" rx="1.5"/>
        <rect x="36" y="35" width="3" height="8" fill="url(#metalGrad)" rx="1.5"/>
        
        {/* Company logo - more prominent */}
        <circle cx="25" cy="45" r="3" fill="#673AB7" stroke="#512DA8" strokeWidth="0.8"/>
        <text x="25" y="47" textAnchor="middle" fontSize="4" fill="#FFFFFF" fontWeight="bold">S</text>
        
        {/* Additional realistic details */}
        <rect x="22" y="30" width="6" height="0.5" fill="#FF5722" rx="0.25"/>
        <rect x="20" y="52" width="10" height="0.5" fill="#FF5722" rx="0.25"/>
        
        {/* Antenna */}
        <line x1="25" y1="8" x2="25" y2="3" stroke="#FF5722" strokeWidth="0.8"/>
        <circle cx="25" cy="3" r="0.8" fill="#FF5722"/>
        
        {/* Rivets and panel lines */}
        <circle cx="18" cy="18" r="0.3" fill="#78909C"/>
        <circle cx="32" cy="18" r="0.3" fill="#78909C"/>
        <circle cx="18" cy="40" r="0.3" fill="#78909C"/>
        <circle cx="32" cy="40" r="0.3" fill="#78909C"/>
        <circle cx="18" cy="55" r="0.3" fill="#78909C"/>
        <circle cx="32" cy="55" r="0.3" fill="#78909C"/>
      </svg>
      
      {/* Enhanced rocket fire - more intense when flying */}
      <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
        {/* Main flame core */}
        <div className={`fire-core w-3 bg-gradient-to-b from-white via-yellow-200 to-orange-400 opacity-95 animate-pulse rounded-full ${isFlying ? 'h-28' : 'h-20'}`} style={{ clipPath: 'polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)' }}></div>
        
        {/* Inner flame */}
        <div className={`fire-inner w-4 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 opacity-90 animate-pulse absolute top-0 left-1/2 transform -translate-x-1/2 ${isFlying ? 'h-26' : 'h-18'}`} style={{ animationDelay: '0.1s', clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)' }}></div>
        
        {/* Outer flame */}
        <div className={`fire-outer w-5 bg-gradient-to-b from-orange-400 via-red-500 to-red-700 opacity-85 animate-pulse absolute top-0 left-1/2 transform -translate-x-1/2 ${isFlying ? 'h-24' : 'h-16'}`} style={{ animationDelay: '0.2s', clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)' }}></div>
        
        {/* Flame tips */}
        <div className={`fire-tip w-6 bg-gradient-to-b from-red-500 via-red-600 to-red-800 opacity-80 animate-pulse absolute top-0 left-1/2 transform -translate-x-1/2 ${isFlying ? 'h-22' : 'h-14'}`} style={{ animationDelay: '0.3s', clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}></div>
      </div>
      
      {/* Enhanced exhaust smoke when flying */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
        <div className={`smoke-1 w-10 h-10 bg-gray-200 rounded-full blur-md animate-pulse ${isFlying ? 'opacity-80' : 'opacity-60'}`}></div>
        <div className={`smoke-2 w-8 h-8 bg-gray-300 rounded-full blur-md animate-pulse absolute top-3 -left-3 ${isFlying ? 'opacity-70' : 'opacity-50'}`} style={{ animationDelay: '0.4s' }}></div>
        <div className={`smoke-3 w-6 h-6 bg-gray-400 rounded-full blur-md animate-pulse absolute top-6 left-3 ${isFlying ? 'opacity-60' : 'opacity-40'}`} style={{ animationDelay: '0.8s' }}></div>
        <div className={`smoke-4 w-4 h-4 bg-gray-500 rounded-full blur-md animate-pulse absolute top-9 -left-1 ${isFlying ? 'opacity-50' : 'opacity-30'}`} style={{ animationDelay: '1.2s' }}></div>
        
        {/* Additional smoke trails when flying */}
        {isFlying && (
          <>
            <div className="smoke-5 w-12 h-12 bg-gray-100 rounded-full blur-lg animate-pulse absolute top-12 -left-2 opacity-40" style={{ animationDelay: '0.6s' }}></div>
            <div className="smoke-6 w-10 h-10 bg-gray-200 rounded-full blur-lg animate-pulse absolute top-16 left-2 opacity-30" style={{ animationDelay: '1s' }}></div>
          </>
        )}
      </div>
    </div>
  </div>
);

// Launch pad component
const LaunchPad = () => (
  <div className="absolute left-0 bottom-0 z-10">
    <svg width="32" height="20" viewBox="0 0 32 20">
      {/* Launch pad base */}
      <rect x="0" y="16" width="32" height="4" fill="#4B5563" stroke="#6B7280" strokeWidth="0.5"/>
      
      {/* Support towers */}
      <rect x="4" y="8" width="2" height="8" fill="#6B7280"/>
      <rect x="26" y="8" width="2" height="8" fill="#6B7280"/>
      
      {/* Platform */}
      <rect x="2" y="14" width="28" height="2" fill="#9CA3AF"/>
      
      {/* Details */}
      <rect x="14" y="12" width="4" height="2" fill="#DC2626"/>
    </svg>
  </div>
);

export default function KeerthiProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [rocketAnimation, setRocketAnimation] = useState({
    isActive: false,
    currentYearIndex: timeline.length - 1,
    position: (timeline.length - 1) * 100,
    opacity: 1,
    isFlying: false
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Start rocket animation after loading
      setTimeout(() => {
        startRocketAnimation();
      }, 1000);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const startRocketAnimation = () => {
  // Start at 2009 (last item in timeline array)
  setRocketAnimation(prev => ({ 
    ...prev, 
    isActive: true,
    currentYearIndex: timeline.length - 1,
    position: (timeline.length - 1) * 100,
    opacity: 1,
    isFlying: false
  }));

  // Create pauses at each point
  timeline.forEach((_, index) => {
    // Skip the first one (2009) since we're already there
    if (index === 0) return;

    setTimeout(() => {
      const targetIndex = timeline.length - 1 - index;
      const position = targetIndex * 100;
      
      setRocketAnimation(prev => ({
        ...prev,
        currentYearIndex: targetIndex,
        position: position,
        isFlying: false
      }));
    }, index * 2000); // 2000ms pause at each point
  });

  // Final launch sequence after reaching the top (2025)
  setTimeout(() => {
    // Start flying animation
    setRocketAnimation(prev => ({
      ...prev,
      isFlying: true
    }));
    
    // Fly upwards smoothly
    setTimeout(() => {
      setRocketAnimation(prev => ({
        ...prev,
        position: -300 // Move much higher
      }));
    }, 200);
    
    // Start fading out
    setTimeout(() => {
      setRocketAnimation(prev => ({
        ...prev,
        opacity: 0
      }));
    }, 1000);
    
    // Complete fade and reset
    setTimeout(() => {
      setRocketAnimation(prev => ({
        ...prev,
        isActive: false,
        position: -500
      }));
    }, 2000);
  }, (timeline.length - 1) * 2000 + 1000); // Adjusted timing
};

  const handleBackClick = () => {
    console.log("Navigate back to home");
  };

  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <style jsx>{`
        @keyframes subtle-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes gentle-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(168, 85, 247, 0.2); }
          50% { box-shadow: 0 0 25px rgba(168, 85, 247, 0.3); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes smoke-drift {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-20px) translateX(10px) scale(1.5); opacity: 0; }
        }
        @keyframes fire-flicker {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(1.2) scaleX(0.8); }
        }
        
        .animate-subtle-float { animation: subtle-float 4s ease-in-out infinite; }
        .animate-gentle-pulse { animation: gentle-pulse 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; opacity: 0; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; opacity: 0; }
        
        .smoke-cloud-1 { animation: smoke-drift 2s ease-out infinite; }
        .smoke-cloud-2 { animation: smoke-drift 2.5s ease-out infinite; }
        .smoke-cloud-3 { animation: smoke-drift 3s ease-out infinite; }
        
        .fire-trail-1 { animation: fire-flicker 0.3s ease-in-out infinite; }
        .fire-trail-2 { animation: fire-flicker 0.4s ease-in-out infinite; }
      `}</style>

      {/* Professional Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Subtle Professional Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-20 w-32 h-1 bg-gradient-to-r from-red-500 to-purple-500 animate-subtle-float"></div>
            <div className="absolute top-40 right-32 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 animate-subtle-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/3 w-16 h-1 bg-gradient-to-r from-blue-500 to-red-500 animate-subtle-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Professional geometric shapes */}
            <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-white/10 rotate-45 animate-subtle-float"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-purple-500/20 rotate-12 animate-subtle-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        <button
                  onClick={handleBackClick}
                  className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 z-10 hover:scale-105"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Home
                </button>
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-6 mb-6">
              <div className="p-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-xl animate-gentle-pulse">
                <Building className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                  Keerthi Varman
                </h1>
                <p className="text-xl text-gray-300 font-medium">
                  Founder & CEO, Sun Info Media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative w-full max-w-sm mx-auto rounded-xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                <img 
                  src={keerthiImg} 
                  alt="Keerthi Varman - Founder & CEO" 
                  className="w-full h-80 object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-80 bg-gray-800 flex items-center justify-center" style={{ display: 'none' }}>
                  <span className="text-gray-400">Profile Image</span>
                </div>
              </div>
            </div>
            
            {/* Professional Stats */}
            <div className="space-y-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/8 transition-all duration-300 animate-fade-in-up">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">16+</div>
                    <div className="text-gray-400 font-medium">Years Leading Innovation</div>
                  </div>
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
              </div>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/8 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">10+</div>
                    <div className="text-gray-400 font-medium">Industry Ventures</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Executive Summary */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Executive Profile
              </h2>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/8 transition-all duration-300 animate-gentle-pulse">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  A visionary entrepreneur and technology leader, Keerthi Varman has consistently pioneered breakthrough innovations across multiple industries. His strategic leadership has transformed emerging technologies into market-leading solutions, establishing SIM Group as a diversified technology conglomerate.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  With expertise spanning telecommunications, space technology, artificial intelligence, and emerging digital markets, Mr. Varman continues to drive the future of technology through calculated innovation and strategic business expansion.
                </p>
              </div>
            </div>

            {/* Professional Timeline */}
            <div className="relative">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </div>
                Professional Milestones
              </h3>
              
              <div className="relative">
                {/* Professional timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 opacity-50"></div>
                
                {/* Launch Pad */}
                <div className="absolute left-0 bottom-0">
                  <LaunchPad />
                </div>
                
                {/* Rocket */}
                <RocketComponent 
                  isActive={rocketAnimation.isActive} 
                  position={rocketAnimation.position}
                  opacity={rocketAnimation.opacity}
                  isFlying={rocketAnimation.isFlying}
                />
                
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative animate-slide-in-right ${
                        rocketAnimation.currentYearIndex === index ? 'bg-purple-500/10 scale-105' : ''
                      } transition-all duration-500`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      {/* Professional timeline dot */}
                      <div className={`absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-black z-10 transition-all duration-500 ${
                        rocketAnimation.currentYearIndex === index 
                          ? 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg shadow-orange-500/50' 
                          : 'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500'
                      }`}></div>
                      
                      {/* Professional content */}
                      <div className="ml-16 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/8 transition-all duration-300 hover:border-purple-500/30 group">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                              <span className="text-sm font-bold text-purple-400">{item.year}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 group-hover:text-white transition-colors font-medium leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                          <div className="flex-shrink-0 text-purple-400 opacity-60 group-hover:opacity-100 transition-opacity">
                            {item.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 group animate-gentle-pulse">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="w-4 h-4" />
            </div>
            Leadership Philosophy
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
            "Innovation is not just about technology—it's about creating sustainable value that transforms industries and improves lives. Every venture we pursue is guided by a commitment to excellence, strategic thinking, and the relentless pursuit of breakthrough solutions that define the future of business."
          </p>
          <div className="mt-6 flex items-center gap-2 text-purple-400 font-medium">
            <span>— Keerthi Varman, Founder & CEO</span>
          </div>
        </div>
      </div>
    </div>
  );
}