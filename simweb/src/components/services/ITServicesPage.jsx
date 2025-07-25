import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, Globe, Map, Monitor, Zap, Layers, Star, Award, Clock, Shield, Users, Lightbulb, CheckCircle, MessageCircle, Linkedin, Mail, Phone, X, Menu } from "lucide-react";

const servicesData = {
  "website-development": {
    id: "website-development",
    title: "Website Development",
    image: "/src/components/service/website_development.jpg",
    icon: <Globe className="w-8 h-8" />,
    description: "Complete solution for creating visually stunning and highly functional websites tailored to your business needs.",
    features: ["Custom Web Design", "E-commerce Solutions", "Content Management Systems", "Mobile Optimization", "SEO Integration", "Ongoing Support"],
    details: "From initial concept to final launch, we leverage the latest technologies and design trends to build user-friendly and responsive websites that engage visitors and drive conversions. Our experienced team specializes in custom web design, e-commerce solutions, content management systems, and mobile optimization, ensuring your website performs seamlessly across all devices. We prioritize intuitive navigation, aesthetic appeal, and search engine optimization (SEO) to enhance your online presence and improve visibility. Additionally, we provide ongoing support and maintenance to keep your website updated and secure, allowing you to focus on growing your business while we handle the technical details."
  },
  "immersive-mapping": {
    id: "immersive-mapping",
    title: "Immersive Google Mapping",
    image: "/src/components/service/google_mapping.jpg",
    icon: <Map className="w-8 h-8" />,
    description: "360-degree mapping with immersive 3D environments offering comprehensive visual experiences like never before.",
    features: ["360-Degree Panoramic Views", "3D Environment Integration", "Virtual Tours", "Indoor Space Mapping", "Dynamic Perspectives", "Immersive Navigation"],
    details: "Our 360-degree mapping allows users to immerse themselves in a fully panoramic view of their surroundings, offering a comprehensive visual experience like never before. With Google Immersive Mapping, we take it a step further by integrating 3D elements into the mix, providing depth and realism to your virtual tours. Through our Google Immersive Mapping service, users can navigate through immersive 3D environments, exploring landscapes, landmarks, and even indoor spaces with unprecedented detail. Our 360-degree videos further enhance the experience, offering dynamic perspectives and a sense of presence that transports users to their desired locations."
  },
  "transparent-screen": {
    id: "transparent-screen",
    title: "Transparent Screen Technology",
    image: "/src/components/service/car_simulator.jpg",
    icon: <Monitor className="w-8 h-8" />,
    description: "Revolutionary transparent LED displays that engage audiences with stunning visuals while maintaining visibility.",
    features: ["Transparent LED Display", "Flexible Display Options", "Indoor/Outdoor Solutions", "Curved Splicing", "COB Car Window Screens", "Custom Configurations"],
    details: "The transparent screen technology from Sun Info Media offers a revolutionary way to engage audiences with stunning visuals while maintaining visibility through the display. Featuring a transparent LED display, this innovative solution captivates without obstructing the view behind it, making it ideal for retail environments and exhibitions. The flexible LED display provides versatility, allowing it to be shaped for various installations. For indoor use, the indoor LED display screen is available in curved splicing and floor options, creating immersive environments for events and presentations. Meanwhile, the outdoor LED display screen is engineered for durability and visibility, also offered in curved splicing and floor configurations, perfect for outdoor advertising and public displays. Additionally, the COB car window LED screen, crafted from various sizes and materials, integrates seamlessly with car windows, providing dynamic advertising opportunities while ensuring safety and visibility for drivers and passengers."
  }
};

export default function ITServicesPage() {
  const [currentService, setCurrentService] = useState("website-development");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const service = servicesData[currentService];

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse tracking for parallax effects (disabled on mobile for performance)
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, [currentService]);

  useEffect(() => {
    // Close mobile menu when service changes
    setShowMobileMenu(false);
  }, [currentService]);

  const ContactModal = () => {
    if (!showContactModal) return null;

    const contactOptions = [
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "WhatsApp",
        color: "hover:bg-green-500/20 hover:text-green-400",
        action: () => window.open("https://wa.me/917788003366", "_blank")
      },
      {
        icon: <Linkedin className="w-6 h-6" />,
        title: "LinkedIn", 
        color: "hover:bg-blue-500/20 hover:text-blue-400",
        action: () => window.open("https://www.linkedin.com/company/suninfomedia/", "_blank")
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Email",
        color: "hover:bg-red-500/20 hover:text-red-400", 
        action: () => window.open("mailto:admin@sunnetwork.info", "_blank")
      },
      {
        icon: <Phone className="w-6 h-6" />,
        title: "Call Us",
        color: "hover:bg-purple-500/20 hover:text-purple-400",
        action: () => window.open("tel:+917788003366", "_blank")
      }
    ];

    return (
      <>
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowContactModal(false)}
          />
          
          <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 pb-8 md:pb-12 shadow-2xl backdrop-blur-md transform transition-all duration-300 scale-100 opacity-100 w-full max-w-md">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute -top-2 -right-2 p-2 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex p-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Get In Touch
              </h3>
              <p className="text-gray-400 text-sm">
                Choose your preferred contact method
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:flex md:gap-4 md:justify-center">
              {contactOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={option.action}
                  title={option.title}
                  className={`p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-200 hover:scale-105 ${option.color} flex flex-col items-center gap-2 md:flex-row md:gap-0`}
                >
                  {option.icon}
                  <span className="text-xs md:hidden">{option.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      {/* Enhanced Animated Background - Optimized for mobile */}
      <div className="fixed inset-0 opacity-20 md:opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/30 to-indigo-900/30 animate-gradient-shift"></div>
        
        {/* Floating Orbs with Parallax - Reduced on mobile */}
        <div 
          className="absolute w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-pink-500/10 md:from-pink-500/20 to-indigo-500/10 md:to-indigo-500/20 rounded-full blur-3xl animate-float-slow"
          style={{
            left: `${20 + (mousePosition.x * 0.01)}px`,
            top: `${20 + (mousePosition.y * 0.005)}px`,
          }}
        ></div>
        <div 
          className="absolute w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-indigo-500/10 md:from-indigo-500/20 to-pink-500/10 md:to-pink-500/20 rounded-full blur-3xl animate-float-reverse"
          style={{
            right: `${20 - (mousePosition.x * 0.005)}px`,
            bottom: `${20 - (mousePosition.y * 0.01)}px`,
          }}
        ></div>
        <div className="absolute w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-purple-500/10 md:from-purple-500/15 to-cyan-500/10 md:to-cyan-500/15 rounded-full blur-2xl animate-pulse-slow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Animated Grid Pattern - Hidden on small mobile */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div className="grid-pattern animate-grid-flow"></div>
        </div>
      </div>

      {/* Enhanced Fixed Header - Mobile Responsive */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/20 animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-3 py-2 md:px-4 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1 group-hover:scale-110" />
              <span className="font-medium text-sm md:text-base hidden sm:inline">Back to Services</span>
              <span className="font-medium text-sm md:text-base sm:hidden">Back</span>
            </button>

            {/* Desktop Service Navigation */}
            <div className="hidden lg:flex flex-1 max-w-3xl mx-8">
              <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                {Object.values(servicesData).map((serviceItem) => (
                  <button
                    key={serviceItem.id}
                    onClick={() => setCurrentService(serviceItem.id)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all duration-500 hover:scale-105 animate-fade-in-up ${
                      currentService === serviceItem.id
                        ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white border-transparent shadow-lg shadow-pink-500/25 scale-105"
                        : "bg-white/5 border-white/20 hover:bg-white/10 hover:border-pink-300/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <div className="w-5 h-5 transition-transform hover:rotate-12">
                        {React.cloneElement(serviceItem.icon, { className: "w-5 h-5" })}
                      </div>
                      <span className="font-medium text-sm">{serviceItem.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Service Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Rating Section */}
            <div className="text-right animate-fade-in-left hidden md:block">
              <div className="text-sm text-gray-400">Premium Service</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current animate-twinkle" 
                    style={{ animationDelay: `${i * 200}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Service Navigation */}
          {showMobileMenu && (
            <div className="lg:hidden mt-4 space-y-2 animate-fade-in-up">
              {Object.values(servicesData).map((serviceItem) => (
                <button
                  key={serviceItem.id}
                  onClick={() => setCurrentService(serviceItem.id)}
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    currentService === serviceItem.id
                      ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white border-transparent"
                      : "bg-white/5 border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6">
                      {React.cloneElement(serviceItem.icon, { className: "w-6 h-6" })}
                    </div>
                    <span className="font-medium text-left">{serviceItem.title}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Hero Section - Mobile Responsive */}
      <div className={`relative h-[50vh] md:h-[70vh] overflow-hidden transition-all duration-1000 mt-16 md:mt-20 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 transform scale-95'}`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-110 hover:scale-105"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 animate-pulse-subtle"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-indigo-500/30 animate-gradient-shift"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="max-w-4xl mx-auto">
            <div className={`flex items-center gap-3 md:gap-6 mb-4 md:mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'}`}>
              <div className="p-2 md:p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl md:rounded-2xl shadow-xl animate-bounce-gentle hover:scale-110 transition-transform duration-300">
                {React.cloneElement(service.icon, { className: "w-6 h-6 md:w-8 md:h-8" })}
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-pink-100 to-indigo-100 bg-clip-text text-transparent animate-text-glow">
                  {service.title}
                </h1>
              </div>
            </div>
            <p className={`text-base md:text-xl text-gray-300 max-w-3xl leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'}`}>
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Main Content Section - Mobile Responsive */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-20">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'}`}>
          {/* Enhanced Service Details */}
          <div className="space-y-6 md:space-y-10">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent flex items-center gap-2 md:gap-3 animate-text-glow">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-pink-500 animate-spin-slow" />
                About This Service
              </h2>
              <div className="relative p-4 md:p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                <p className="relative text-gray-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-8">
                  {service.details}
                </p>
              </div>
            </div>

            {/* Enhanced Stats - Mobile Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {[
                { icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />, value: "24/7", label: "Support" },
                { icon: <Award className="w-5 h-5 md:w-6 md:h-6" />, value: "100%", label: "Quality" },
                { icon: <Star className="w-5 h-5 md:w-6 md:h-6" />, value: "500+", label: "Projects" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="group p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-indigo-500/10 hover:border-pink-300/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-1.5 md:p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg mb-2 group-hover:rotate-12 transition-transform duration-300 group-hover:scale-110">
                      {stat.icon}
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1 animate-number-count">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Key Features - Mobile Optimized */}
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 flex items-center gap-2 md:gap-3 animate-text-glow">
              <Layers className="w-6 h-6 md:w-8 md:h-8 text-indigo-500 animate-float" />
              Key Features
            </h2>
            <div className="space-y-3 md:space-y-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-indigo-500/10 hover:border-pink-300/30 transition-all duration-500 cursor-pointer relative overflow-hidden hover:scale-105 hover:-translate-y-1 animate-fade-in-right ${
                    hoveredFeature === index ? 'shadow-xl shadow-pink-500/30 scale-105 -translate-y-1' : ''
                  }`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 shadow-lg group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-base md:text-lg">{feature}</span>
                      {hoveredFeature === index && (
                        <div className="mt-2 text-sm text-gray-400 animate-fade-in hidden md:block">
                          Premium {feature.toLowerCase()} with cutting-edge technology and expert implementation
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Why Choose Us Section - Mobile Grid */}
        <div className={`mt-12 md:mt-20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'}`}>
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h3 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent animate-text-glow">
              Why Choose Our {service.title} Service?
            </h3>
            <p className="text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
              We combine cutting-edge technology with creative expertise to deliver exceptional results that transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Innovation",
                description: "Cutting-edge solutions using the latest technology trends and methodologies"
              },
              {
                icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control ensures flawless delivery every time"
              },
              {
                icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Expert Support",
                description: "Dedicated team of professionals providing 24/7 technical assistance"
              },
              {
                icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Reliability",
                description: "Proven track record with 500+ successful projects and satisfied clients"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-4 md:p-6 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-indigo-500/10 hover:border-pink-300/30 transition-all duration-500 hover:scale-110 hover:-translate-y-4 animate-fade-in-up hover:shadow-xl hover:shadow-pink-500/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
                <div className="p-3 md:p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl mb-4 inline-block group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Contact CTA - Mobile Responsive */}
        <div className="mt-12 md:mt-20 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="inline-block p-6 md:p-12 bg-gradient-to-br from-pink-500/20 to-indigo-500/20 rounded-3xl border border-white/10 backdrop-blur-md hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-500 hover:scale-105 group relative overflow-hidden mx-4">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
            <div className="relative">
              <div className="mb-4 md:mb-6">
                <div className="inline-flex p-3 md:p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-pulse-glow group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-text-glow">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-lg mx-auto px-4">
                Experience the future with our cutting-edge {service.title.toLowerCase()} solutions. 
                Let's bring your vision to life.
              </p>
              <button 
                onClick={() => setShowContactModal(true)}
                className="group px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-110 relative overflow-hidden animate-pulse-glow"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
                <div className="relative flex items-center gap-2 md:gap-3">
                  <span className="text-base md:text-lg">Contact Us Today</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 group-hover:scale-110 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(20px) scale(0.95); }
        }
        
        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(236, 72, 153, 0.3); }
          50% { text-shadow: 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(99, 102, 241, 0.3); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 0 40px rgba(236, 72, 153, 0.6), 0 0 60px rgba(99, 102, 241, 0.3); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulseSubtle {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.8; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gridFlow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        
        @keyframes numberCount {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out;
        }
        
        .animate-slide-down {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 8s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounceGentle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        
        .animate-text-glow {
          animation: textGlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 1.5s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 4s ease-in-out infinite;
        }
        
        .animate-grid-flow {
          animation: gridFlow 20s linear infinite;
        }
        
        .animate-number-count {
          animation: numberCount 0.5s ease-out;
        }

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-float-slow,
          .animate-float-reverse {
            animation-duration: 8s;
          }
          
          .animate-pulse-slow {
            animation-duration: 6s;
          }
          
          .hover\\:scale-110:hover {
            transform: scale(1.05);
          }
          
          .hover\\:-translate-y-4:hover {
            transform: translateY(-8px);
          }
          
          .hover\\:-translate-y-2:hover {
            transform: translateY(-4px);
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-float-slow,
          .animate-float-reverse,
          .animate-bounce-gentle,
          .animate-spin-slow,
          .animate-pulse-glow,
          .animate-pulse-slow,
          .animate-pulse-subtle,
          .animate-twinkle,
          .animate-shimmer,
          .animate-gradient-shift,
          .animate-grid-flow {
            animation: none;
          }
          
          .transition-transform {
            transition: none;
          }
        }

        /* Better touch targets for mobile */
        @media (max-width: 768px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Prevent horizontal scroll on mobile */
        @media (max-width: 768px) {
          * {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}