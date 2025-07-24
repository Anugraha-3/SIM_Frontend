import React from "react";
import { ChevronLeft, ArrowRight, Video, Play, Film, Monitor } from "lucide-react";

const serviceData = {
  id: "video-production",
  title: "Video Production",
  image: "/src/components/service/video_production.jpg",
  mobileImage: "/src/components/service/video1.jpg", // Add mobile-specific image
  icon: <Video className="w-8 h-8" />,
  description: "High-quality, engaging video production services that effectively convey your brand message and captivate your audience.",
  features: [
    "Promotional Campaigns", 
    "Corporate Events", 
    "Product Launches", 
    "Social Media Content",
    "Educational Videos",
    "Brand Storytelling"
  ],
  details: "Our experienced team handles every aspect of the production process, from concept development and scripting to filming and post-production. Utilizing state-of-the-art equipment and advanced editing techniques, we produce visually stunning videos tailored to your specific needs. Understanding the power of storytelling, we focus on crafting compelling narratives that resonate with viewers and drive engagement."
};

const broadcastingData = {
  title: "Broadcasting Service",
  image: "/src/components/service/broadcasting.jpg",
  icon: <Monitor className="w-6 h-6" />,
  description: "Comprehensive live streaming solution for events, presentations, and educational content across various platforms.",
  features: [
    "Live Event Streaming",
    "Corporate Presentations", 
    "Educational Content",
    "Multi-Camera Setups",
    "Interactive Elements",
    "Social Media Integration"
  ]
};

export default function VideoProductionPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite 1s; }
        .animate-loading-bar { animation: loading-bar 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; opacity: 0; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        
        /* Responsive background image */
        .hero-bg-desktop {
          background-image: url('${serviceData.image}');
        }
        .hero-bg-mobile {
          background-image: url('${serviceData.mobileImage}');
        }
        
        @media (max-width: 768px) {
          .hero-bg-desktop {
            background-image: url('${serviceData.mobileImage}');
          }
        }
      `}</style>
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center hero-bg-desktop">
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Enhanced Animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-16 h-16 bg-red-500/20 rounded-full animate-pulse md:block hidden"></div>
            <div className="absolute top-40 right-32 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce md:block hidden"></div>
            <div className="absolute bottom-32 left-1/3 w-8 h-8 bg-purple-500/20 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-20 w-6 h-6 bg-yellow-400/30 rounded-square rotate-45 animate-spin md:block hidden"></div>
            <div className="absolute bottom-20 right-1/4 w-10 h-10 bg-green-500/25 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-32 left-1/2 w-4 h-4 bg-pink-500/40 rounded-full animate-bounce delay-500 md:block hidden"></div>
            
            {/* Mobile-specific animated elements */}
            <div className="absolute top-16 left-8 w-8 h-8 bg-red-500/20 rounded-full animate-pulse md:hidden"></div>
            <div className="absolute top-32 right-8 w-6 h-6 bg-blue-500/20 rounded-full animate-bounce md:hidden"></div>
            <div className="absolute bottom-16 right-12 w-4 h-4 bg-purple-500/30 rounded-full animate-ping md:hidden"></div>
          </div>
          
          {/* Floating video elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-16 right-16 w-20 h-12 bg-white/10 rounded border-2 border-white/20 animate-float md:block hidden">
              <div className="absolute top-1 left-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-40 left-16 w-16 h-10 bg-white/10 rounded border-2 border-white/20 animate-float-delayed md:block hidden">
              <div className="absolute inset-2 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded"></div>
            </div>
            
            {/* Mobile floating elements */}
            <div className="absolute top-20 right-4 w-12 h-8 bg-white/10 rounded border border-white/20 animate-float md:hidden">
              <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute bottom-32 left-4 w-10 h-6 bg-white/10 rounded border border-white/20 animate-float-delayed md:hidden">
              <div className="absolute inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded"></div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleBackClick}
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors z-10 md:px-4 md:py-2 px-3 py-1.5"
        >
          <ChevronLeft className="w-5 h-5 md:w-5 md:h-5 w-4 h-4" />
          <span className="md:inline hidden">Back to Services</span>
          <span className="md:hidden inline">Back</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-8 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4 md:flex-row flex-col md:text-left text-center">
              <div className="p-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-xl animate-pulse">
                {serviceData.icon}
              </div>
              <h1 className="text-4xl md:text-6xl text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {serviceData.title}
              </h1>
            </div>
            <p className="text-xl md:text-xl text-lg text-gray-300 max-w-2xl md:text-left text-center md:mx-0 mx-auto">
              {serviceData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 md:px-8 px-4 py-16 md:py-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-12 gap-8">
          {/* Details */}
          <div>
            <h2 className="text-3xl md:text-3xl text-2xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              About Our Video Production
            </h2>
            <p className="text-gray-300 text-lg md:text-lg text-base leading-relaxed mb-8">
              {serviceData.details}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl md:text-3xl text-2xl font-bold mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 md:p-4 p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:bg-white/10 transition-all hover:border-purple-500/30 group hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3 md:gap-3 gap-2">
                    <Film className="w-5 h-5 md:w-5 md:h-5 w-4 h-4 text-purple-500 group-hover:text-red-500 transition-all group-hover:rotate-12 group-hover:scale-110" />
                    <span className="font-medium group-hover:text-white transition-colors text-sm md:text-base">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Broadcasting Service Section */}
        <div className="mt-16 md:mt-16 mt-8 relative overflow-hidden">
          {/* Background Image for Broadcasting */}
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: `url(${broadcastingData.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80 rounded-2xl"></div>
          </div>
          
          {/* Animated broadcasting elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-4 right-8 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-8 right-20 md:right-20 right-12 text-xs text-red-500 animate-pulse">● LIVE</div>
            <div className="absolute bottom-8 left-8 md:w-24 w-16 h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full animate-loading-bar"></div>
            </div>
            <div className="absolute top-1/2 right-12 w-8 h-6 border-2 border-white/30 rounded animate-pulse md:block hidden">
              <div className="absolute inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded"></div>
            </div>
          </div>
          
          <div className="relative p-8 md:p-8 p-4 z-10">
            <div className="flex items-center gap-4 mb-6 md:flex-row flex-col md:text-left text-center">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg animate-pulse">
                {broadcastingData.icon}
              </div>
              <h3 className="text-2xl md:text-2xl text-xl font-bold">{broadcastingData.title}</h3>
              <div className="md:ml-auto ml-0 flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full border border-red-500/30">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-red-400">Live Service</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg md:text-lg text-base mb-6 md:text-left text-center">
              {broadcastingData.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-4 gap-3">
              {broadcastingData.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-3 md:p-3 p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:border-blue-500/30 backdrop-blur-sm group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 md:gap-2 gap-1">
                    <ArrowRight className="w-4 h-4 md:w-4 md:h-4 w-3 h-3 text-blue-500 group-hover:text-purple-500 transition-colors group-hover:translate-x-1" />
                    <span className="text-sm md:text-sm text-xs font-medium group-hover:text-white transition-colors">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 md:mt-16 mt-8 p-8 md:p-8 p-4 bg-gradient-to-r from-purple-500/10 to-red-500/10 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all group animate-glow">
          <h3 className="text-2xl md:text-2xl text-xl font-bold mb-4 flex items-center gap-3 md:gap-3 gap-2 md:flex-row flex-col md:text-left text-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </div>
            <span>Why Choose Our Video Production Services?</span>
          </h3>
          <p className="text-gray-300 text-lg md:text-lg text-base group-hover:text-white transition-colors md:text-left text-center">
            We combine cutting-edge technology with creative expertise to deliver exceptional results. 
            Our collaborative approach ensures that your vision is brought to life with attention to detail in every frame. 
            With a commitment to creativity and professionalism, our video production services not only enhance your brand's 
            visibility but also create memorable experiences that foster connections with your audience, ultimately driving 
            conversions and brand loyalty.
          </p>
        </div>
      </div>
    </div>
  );
}