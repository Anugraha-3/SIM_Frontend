import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, Eye, Zap, Settings, Wifi, HardDrive, Monitor } from "lucide-react";

const hologramData = {
  id: "3d-hologram",
  title: "3D Hologram Display",
  icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
  description: "Innovative 3D holographic displays that transform traditional presentations into captivating immersive experiences.",
  overview: "Our 3D Hologram displays, ranging from 11cm to 100cm, offer an innovative way to engage students, faculty, and visitors, transforming traditional lectures and presentations into captivating immersive experiences. With our 3D Hologram Service, colleges can bring complex concepts to life in stunning three-dimensional detail, making learning more interactive, memorable, and enjoyable.",
  products: [
    {
      id: 1,
      name: "3D Hologram Fan - 50cm",
      price: "₹15,000",
      image: "/src/components/service/hologram3.jpg",
      diameter: "50 cm",
      variant: "Standard",
      specs: {
        fanDiameter: "50 cm",
        ipRating: "IP 54",
        brightness: "High Brightness",
        viewingAngle: "160 Degree",
        displayTech: "Dot Matrix",
        weight: "2.1 Kg",
        connectivity: "Ethernet, Wi-Fi"
      },
      description: "A cutting-edge device that creates the illusion of three-dimensional holographic images or videos floating in mid-air. Perfect for advertising, entertainment, and art installations."
    },
    {
      id: 2,
      name: "Holographic 3D Projector Fan - 43cm",
      price: "₹13,500",
      image: "/src/components/service/hologram1.jpg",
      diameter: "43 cm",
      variant: "Standard",
      specs: {
        fanDiameter: "43 cm",
        resolution: "1366 x 768 pixels",
        inputVoltage: "12V 3A",
        speed: "750 RPM",
        connectivity: "WiFi / App Control",
        powerConsumption: "35W",
        ledCount: "320 LEDs",
        lifeSpan: "50,000 hours",
        storage: "16GB SD Card",
        weight: "1.5 kg",
        supportedFormats: "MP4, AVI, RMVB, JPG"
      },
      description: "Advanced, larger-scale 3D holographic display solution designed for high-impact visual experiences in various indoor environments.",
      applications: [
        "High-end product displays",
        "Retail and mall advertising", 
        "Large-scale promotional events",
        "Trade show booths",
        "Brand activations",
        "Museums and art galleries",
        "Educational installations"
      ]
    },
    {
      id: 3,
      name: "43cm Hologram Fan - Acrylic Frame",
      price: "₹13,500 + Frame Cost",
      image: "/src/components/service/hologram2.jpg",
      diameter: "43 cm",
      variant: "Acrylic Frame",
      specs: {
        fanDiameter: "43 cm",
        resolution: "1366 x 768 pixels",
        inputVoltage: "12V 3A",
        speed: "750 RPM",
        connectivity: "WiFi / App Control",
        powerConsumption: "35W",
        ledCount: "320 LEDs",
        lifeSpan: "50,000 hours",
        storage: "16GB SD Card",
        weight: "1.5 kg",
        supportedFormats: "MP4, AVI, RMVB, JPG",
        frameType: "Sleek Acrylic Frame"
      },
      description: "Fabricated in a sleek, durable acrylic frame for enhanced protection. Ideal for professional or commercial environments with integrated cable management and power controls.",
      features: [
        "Sleek, durable acrylic frame",
        "Enhanced protection",
        "Clean, modern look",
        "Integrated cable management",
        "Lightweight and portable",
        "Professional appearance"
      ]
    },
    {
      id: 4,
      name: "43cm Hologram Fan - Circular Box",
      price: "₹13,500 + Enclosure Cost",
      image: "/src/components/service/hologram4.jpg",
      diameter: "43 cm",
      variant: "Circular Box",
      specs: {
        fanDiameter: "43 cm",
        resolution: "1366 x 768 pixels",
        inputVoltage: "12V 3A",
        speed: "750 RPM",
        connectivity: "WiFi / App Control",
        powerConsumption: "35W",
        ledCount: "320 LEDs",
        lifeSpan: "50,000 hours",
        storage: "16GB SD Card",
        weight: "1.5 kg",
        supportedFormats: "MP4, AVI, RMVB, JPG",
        enclosureType: "Circular Acrylic Enclosure"
      },
      description: "Integrated into a stylish, circular, acrylic enclosure. Provides 360-degree viewing angles for a more immersive experience with modern design that enhances visual focus.",
      features: [
        "360-degree viewing angles",
        "Stylish circular enclosure",
        "More immersive experience",
        "Modern design",
        "Enhanced visual focus",
        "Premium presentation"
      ]
    }
  ]
};

export default function HologramPage() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KPHN0eWxlPgpAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pcmc6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTsKPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkMSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzM2ZmYiLz4KPHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiNlZjQ0ZmYiLz4KPHN0b3Agb2Zmc2V0PSI3MCUiIHN0b3AtY29sb3I9IiNmZjQ0ZGQiLz4KPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjNDQ4OGZmIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxmaWx0ZXIgaWQ9ImJsdXIiPgorPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VHcmFwaGljIiBzdGREZXZpYXRpb249IjQwIi8+CjwvZmlsdGVyPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxOTIwIiBoZWlnaHQ9IjEwODAiIGZpbGw9InVybCgjZ3JhZDEpIi8+CjwhLS0gRmxvYXRpbmcgZ2VvbWV0cmljIHNoYXBlcyAtLT4KPGVsbGlwc2UgY3g9IjMwMCIgY3k9IjIwMCIgcng9IjgwIiByeT0iNDAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIiBmaWx0ZXI9InVybCgjYmx1cikiLz4KPGNpcmNsZSBjeD0iMTUwMCIgY3k9IjMwMCIgcj0iMTIwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDgiIGZpbHRlcj0idXJsKCNibHVyKSIvPgo8cG9seWdvbiBwb2ludHM9IjEyMDAsODAwIDEzMDAsNzAwIDEzNTAsODUwIDEyNTAsOTUwIiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDYiIGZpbHRlcj0idXJsKCNibHVyKSIvPgo8IS0tIEhvbG9ncmFtIGVmZmVjdCBjaXJjbGVzIC0tPgo8Y2lyY2xlIGN4PSI5NjAiIGN5PSI1NDAiIHI9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1vcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iOTYwIiBjeT0iNTQwIiByPSIxNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4yIi8+CjxjaXJjbGUgY3g9Ijk2MCIgY3k9IjU0MCIgcj0iMTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPgo8IS0tIENlbnRlciBob2xvZ3JhbSBzeW1ib2wgLS0+CjxjaXJjbGUgY3g9Ijk2MCIgY3k9IjU0MCIgcj0iNDAiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjx0ZXh0IHg9Ijk2MCIgeT0iNjIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmZmZmZmIiBmb250LWZhbWlseT0iT3JnLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjM2IiBmb250LXdlaWdodD0iNzAwIiBmaWxsLW9wYWNpdHk9IjAuOCI+M0QgSG9sb2dyYW0gRGlzcGxheTwvdGV4dD4KPC9zdmc+"
          >
            <source src="/src/components/service/hologram_video.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <button
          onClick={handleBackClick}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 z-10 hover:scale-105 text-sm sm:text-base"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Back to Services</span>
          <span className="sm:hidden">Back</span>
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 animate-fade-in-up">
              <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl animate-pulse">
                {hologramData.icon}
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {hologramData.title}
              </h1>
            </div>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl animate-fade-in-up delay-200">
              {hologramData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div 
        id="overview"
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 transition-all duration-1000 ${
          isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Presentations
          </h2>
          <p className="text-gray-300 text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto">
            {hologramData.overview}
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div 
        id="products"
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 transition-all duration-1000 ${
          isVisible.products ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Hologram Products
        </h2>

        {/* Product Tabs - Mobile Scrollable */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="flex bg-white/5 rounded-full p-1 border border-white/10 overflow-x-auto max-w-full">
            {hologramData.products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(index)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  selectedProduct === index
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {product.diameter}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Product Image */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-500"></div>
            <div className="relative bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-8 backdrop-blur-md">
              <img
                src={hologramData.products[selectedProduct].image}
                alt={hologramData.products[selectedProduct].name}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUYyOTM3Ii8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE1MCIgcj0iNDAiIHN0cm9rZT0iIzYzNzNEQiIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+CjxwYXRoIGQ9Ik0xODAgMTMwTDIyMCAxNTBMMTgwIDE3MFoiIGZpbGw9IiM2MzczREIiLz4KPHRleHQgeD0iMjAwIiB5PSIyMDAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Q0E0QUYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjUwMCI+SG9sb2dyYW0gRmFuPC90ZXh0Pgo8L3N2Zz4K';
                }}
              />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                {hologramData.products[selectedProduct].price}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div>
              <h3 className="text-xl sm:text-3xl font-bold mb-2">{hologramData.products[selectedProduct].name}</h3>
              <p className="text-gray-300 text-sm sm:text-lg">{hologramData.products[selectedProduct].description}</p>
            </div>

            {/* Specifications */}
            <div className="bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                Specifications
              </h4>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {Object.entries(hologramData.products[selectedProduct].specs).map(([key, value]) => (
                  <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="text-gray-400 capitalize text-sm sm:text-base">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-medium text-sm sm:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications (for 43cm model) */}
            {hologramData.products[selectedProduct].applications && (
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 sm:p-6 border border-white/10">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Applications</h4>
                <div className="grid grid-cols-1 gap-2">
                  {hologramData.products[selectedProduct].applications.map((app, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features (for framed models) */}
            {hologramData.products[selectedProduct].features && (
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 sm:p-6 border border-white/10">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {hologramData.products[selectedProduct].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div 
        id="features"
        className={`bg-gradient-to-r from-purple-900/20 to-pink-900/20 py-8 sm:py-16 transition-all duration-1000 ${
          isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "360° Viewing",
                description: "Stunning holographic displays visible from all angles with superior clarity and brightness."
              },
              {
                icon: <Wifi className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Smart Connectivity",
                description: "WiFi and app control for easy content management and remote operation."
              },
              {
                icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "High Performance",
                description: "750 RPM speed with 50,000+ hour lifespan for reliable, long-term operation."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        id="cta"
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-16 transition-all duration-1000 ${
          isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-white/10 p-6 sm:p-12">
          <h3 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Create Stunning Holographic Displays?
          </h3>
          <p className="text-gray-300 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Transform your presentations and captivate your audience with our cutting-edge 3D hologram technology. 
            Contact us for bulk orders and custom pricing solutions.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => setShowContactModal(true)}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              Contact for Bulk Orders
            </button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-gradient-to-br from-gray-900/95 via-purple-900/20 to-pink-900/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-purple-500/20">
            
            {/* Animated hologram-like background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-shimmer delay-1000"></div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-purple-400/30 rounded-full animate-float`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            {/* Close button */}
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover:rotate-90 hover:scale-110 z-10 backdrop-blur-sm"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-12">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Let's Connect
                  </h3>
                </div>
                <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  Ready to revolutionize your presentations with 3D hologram technology? 
                  <br className="hidden sm:block" />
                  <span className="text-purple-400 font-semibold">Choose your preferred way to reach us</span>
                </p>
              </div>
              
              {/* Contact Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/suninfomedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl sm:rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-3 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</h4>
                  <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">Connect professionally</p>
                  <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
                
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/917788003366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl sm:rounded-2xl hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-3 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-green-400 transition-colors duration-300">WhatsApp</h4>
                  <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">Quick chat & support</p>
                  <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:admin@sunnetwork.info"
                  className="group relative flex flex-col items-center p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl sm:rounded-2xl hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-3 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-purple-400 transition-colors duration-300">Email</h4>
                  <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">Detailed inquiries</p>
                  <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 h-0.5 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
                
                {/* Phone */}
                <a 
                  href="tel:917788003366"
                  className="group relative flex flex-col items-center p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl sm:rounded-2xl hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-3 backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-3 sm:mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-orange-500/30 group-hover:shadow-orange-500/50">
                    <svg className="w-6 h-6 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 group-hover:text-orange-400 transition-colors duration-300">Call Direct</h4>
                  <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">Immediate assistance</p>
                  <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
              </div>
              
              {/* Footer */}
              <div className="text-center pt-4 sm:pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-500 rounded-full animate-pulse delay-200"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-pulse delay-400"></div>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  <span className="text-purple-400 font-semibold">Bulk orders welcome</span> • Custom pricing • 
                  <span className="text-pink-400 font-semibold"> 24/7 support</span>
                </p>
                <p className="text-gray-500 text-xs mt-1 sm:mt-2">
                  Response time: WhatsApp & Call (Instant) • Email (Within 2 hours)
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}