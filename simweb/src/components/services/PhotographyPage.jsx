import React from "react";
import { ChevronLeft, ArrowRight, Camera } from "lucide-react";

const serviceData = {
  id: "photography",
  title: "Photography",
  image: "/photography.jpg",
  icon: <Camera className="w-8 h-8" />,
  description: "Professional photography services for events, products, and corporate needs.",
  features: ["Event Photography", "Product Shoots", "Corporate Portraits", "Commercial Photography"],
  details: "Capture your most important moments with our professional photography services. Our experienced photographers specialize in creating stunning visuals that tell your story, whether it's a corporate event, product launch, or brand campaign."
};

export default function PhotographyPage() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-white font-primary">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviceData.image})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <button
          onClick={handleBackClick}
          className="absolute top-8 left-8 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-colors z-10"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Services
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl">
                {serviceData.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">{serviceData.title}</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl">
              {serviceData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
              About This Service
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {serviceData.details}
            </p>
            
            <div className="flex items-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-500" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-pink-500/10 to-indigo-500/10 rounded-2xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Why Choose Our {serviceData.title} Service?</h3>
          <p className="text-gray-300 text-lg">
            We combine cutting-edge technology with creative expertise to deliver exceptional results. 
            Our team of professionals is dedicated to bringing your vision to life with precision, 
            innovation, and attention to detail that sets us apart in the industry.
          </p>
        </div>
      </div>
    </div>
  );
}