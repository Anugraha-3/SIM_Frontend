import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, TrendingUp, Megaphone, FileText, MessageSquare, ChevronDown, MessageCircle, Mail, Phone, X } from "lucide-react";
const servicesData = {
  "strategic-digital-marketing": {
    id: "strategic-digital-marketing",
    title: "Strategic Digital Marketing",
    image: "/src/components/service/digital_marketing.jpg",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Designed to elevate your brand's online presence through tailored, data-driven strategies.",
    features: [
      "Social Media Management",
      "Search Engine Optimization",
      "Email Marketing Campaigns",
      "Content Marketing Strategy",
      "Competitor Analysis",
      "Performance Analytics"
    ],
    details: "Our comprehensive approach integrates various digital channels, including social media, search engines, email marketing, and content marketing, to create a cohesive and impactful online strategy. We analyze market trends, customer behavior, and competitor activities to identify opportunities that align with your business goals. Our team of experts crafts compelling content and engaging campaigns that resonate with your target audience, driving traffic and conversions. From optimizing your website for search engines to executing targeted advertising campaigns, we focus on maximizing your return on investment. By leveraging analytics and performance metrics, we continually refine our strategies to ensure sustained growth and visibility for your brand in the digital landscape."
  },
  "product-promotion": {
    id: "product-promotion",
    title: "Product Promotion",
    image: "/src/components/service/product_promotion.jpg",
    icon: <Megaphone className="w-8 h-8" />,
    description: "Enhancing the visibility and appeal of your products through strategic marketing initiatives.",
    features: [
      "Influencer Collaborations",
      "Visually Stunning Content",
      "Targeted Advertising Campaigns",
      "Market Research & Analysis",
      "Social Media Campaigns",
      "In-Store Display Optimization"
    ],
    details: "Product Promotion services focus on enhancing the visibility and appeal of your products through strategic marketing initiatives designed to engage your target audience effectively. We leverage a multi-faceted approach that includes visually stunning content, influencer collaborations, and targeted advertising campaigns across various platforms. By utilizing high-quality imagery and compelling narratives, we create promotional materials that highlight your product's unique features and benefits, capturing the attention of potential customers. Our team conducts thorough market research to identify trends and consumer preferences, allowing us to tailor promotional strategies that resonate with your audience. Whether through social media campaigns, email marketing, or in-store displays, we ensure that your products are presented in the best light, maximizing their reach and impact. With a focus on driving sales and building brand loyalty, our product promotion services aim to transform casual interest into active engagement, helping you achieve your marketing goals and boost your overall business success."
  },
  "content-management": {
    id: "content-management",
    title: "Content Management",
    image: "/src/components/service/content.jpg",
    icon: <FileText className="w-8 h-8" />,
    description: "Streamline the organization, storage, and distribution of digital content for businesses.",
    features: [
      "Content Management Systems",
      "Version Control",
      "SEO Optimization",
      "Brand Voice Consistency",
      "Content Strategy Development",
      "Digital Asset Management"
    ],
    details: "Content Management services streamline the organization, storage, and distribution of digital content, ensuring easy access and effective utilization for businesses. We develop comprehensive content strategies that align with your goals, implementing robust content management systems (CMS) for seamless collaboration, version control, and content updates. This keeps your materials current and engaging while optimizing them for search engines to improve visibility. Our expertise ensures a consistent brand voice across all channels, enhancing marketing efforts and fostering stronger audience connections. Ultimately, our content management services empower businesses to harness their digital assets, improving communication efficiency and outreach effectiveness."
  },
  "bulk-support-service": {
    id: "bulk-support-service",
    title: "Bulk Support Service",
    image: "/src/components/service/bulk_service.jpg",
    icon: <MessageSquare className="w-8 h-8" />,
    description: "Efficient solutions for mass outreach through WhatsApp, SMS, and voice calls.",
    features: [
      "WhatsApp Bulk Messaging",
      "SMS Campaigns",
      "Voice Call Services",
      "Customizable Messaging",
      "Campaign Management",
      "Performance Analytics"
    ],
    details: "Bulk Communication Services provide businesses with efficient solutions for mass outreach through WhatsApp, SMS, and voice calls, enabling effective communication with large audiences. Our services are designed to streamline the dissemination of information, promotions, and updates, ensuring that your message reaches recipients quickly and reliably. With customizable messaging options, you can engage your audience with personalized content tailored to their preferences, enhancing response rates and customer engagement. Our user-friendly platform allows for easy management of campaigns, tracking responses, and analyzing performance metrics, helping you optimize your communication strategy. Whether you're promoting a product, announcing an event, or sharing important updates, our bulk communication services are your key to reaching and connecting with your audience effectively."
  }
};


const contactData = {
  linkedin: {
    icon: "linkedin",
    label: "LinkedIn",
    action: () => window.open("https://www.linkedin.com/company/suninfomedia/", "_blank"),
    color: "from-blue-600 to-blue-700"
  },
  whatsapp: {
    icon: "message-circle",
    label: "WhatsApp",
    action: () => window.open("https://wa.me/917788003366", "_blank"), // Replace with your WhatsApp number
    color: "from-green-500 to-green-600"
  },
  mail: {
    icon: "mail",
    label: "Email",
    action: () => window.location.href = "mailto:admin@sunnetwork.info", // Replace with your email
    color: "from-red-500 to-red-600"
  },
  phone: {
    icon: "phone",
    label: "Phone",
    action: () => window.location.href = "tel:+917788003366", // Replace with your phone number
    color: "from-purple-500 to-purple-600"
  }
};

export default function DigitalMarketingServicesPage() {
  const [currentServiceId, setCurrentServiceId] = useState('strategic-digital-marketing');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (showContactPopup && event.target.classList.contains('backdrop-blur-sm')) {
      setShowContactPopup(false);
    }
  };

  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [showContactPopup]);


useEffect(() => {
  const handleEscape = (event) => {
    if (event.key === 'Escape' && showContactPopup) {
      setShowContactPopup(false);
    }
  };

  document.addEventListener('keydown', handleEscape);
  return () => document.removeEventListener('keydown', handleEscape);
}, [showContactPopup]);


  const serviceData = servicesData[currentServiceId];
  const servicesArray = Object.values(servicesData);
  const currentIndex = servicesArray.findIndex(service => service.id === currentServiceId);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleServiceChange = (serviceId) => {
    if (serviceId === currentServiceId) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentServiceId(serviceId);
      setIsDropdownOpen(false);
      setIsAnimating(false);
    }, 150);
  };

  const nextService = () => {
    const nextIndex = (currentIndex + 1) % servicesArray.length;
    handleServiceChange(servicesArray[nextIndex].id);
  };

  const prevService = () => {
    const prevIndex = (currentIndex - 1 + servicesArray.length) % servicesArray.length;
    handleServiceChange(servicesArray[prevIndex].id);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Enhanced Service Selector */}
      <div className="bg-gray-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30 shadow-2xl">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Services</span>
            </button>

            {/* Service Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 backdrop-blur-md rounded-xl border border-white/20 hover:from-pink-500/30 hover:to-indigo-500/30 transition-all duration-300"
              >
                <div className="p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg">
                  {serviceData.icon}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{serviceData.title}</div>
                  <div className="text-xs text-gray-400">{currentIndex + 1} of {servicesArray.length}</div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 w-80 bg-gray-900/95 backdrop-blur-xl rounded-xl border border-white/20 shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-200">
                  {servicesArray.map((service, index) => (
                    <button
                      key={service.id}
                      onClick={() => handleServiceChange(service.id)}
                      className={`w-full p-4 text-left hover:bg-white/10 transition-all duration-200 border-b border-white/5 last:border-b-0 ${
                        currentServiceId === service.id ? 'bg-gradient-to-r from-pink-500/20 to-indigo-500/20' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${currentServiceId === service.id ? 'bg-gradient-to-r from-pink-500 to-indigo-500' : 'bg-white/10'}`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-white">{service.title}</div>
                          <div className="text-sm text-gray-400 line-clamp-1">{service.description}</div>
                        </div>
                        <div className="text-xs text-gray-500">{index + 1}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevService}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110"
                title="Previous Service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextService}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 rotate-180"
                title="Next Service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Header with Animations */}
      <div className={`relative h-[70vh] overflow-hidden transition-all duration-500 ${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out"
          style={{ backgroundImage: `url(${serviceData.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-indigo-500/10"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-6xl mx-auto">
            <div className={`transform transition-all duration-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="flex items-center gap-6 mb-6">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl shadow-2xl animate-pulse">
                  {serviceData.icon}
                </div>
                <div>
                  <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    {serviceData.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed">
                {serviceData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-bounce delay-75"></div>
      </div>

      {/* Enhanced Content with Stagger Animations */}
      <div className={`max-w-6xl mx-auto px-8 py-16 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Details */}
          <div className={`transform transition-all duration-700 delay-100 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              About This Service
            </h2>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-indigo-500 rounded-full"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 pl-8">
                {serviceData.details}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <button 
  onClick={() => setShowContactPopup(true)}
  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
>
  <span className="flex items-center gap-2">
    Get Started
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </span>
</button>
              
            </div>
          </div>

          {/* Enhanced Features */}
          <div className={`transform transition-all duration-700 delay-200 ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-white">Key Features</h2>
            <div className="grid grid-cols-1 gap-4">
              {serviceData.features.map((feature, index) => (
                <div
                  key={index}
                  className={`group p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-medium text-lg">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Additional Content */}
        <div className={`mt-20 p-8 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl border border-white/10 backdrop-blur-md transform transition-all duration-700 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Why Choose Our {serviceData.title} Service?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            We combine cutting-edge technology with creative expertise to deliver exceptional results. 
            Our team of professionals is dedicated to bringing your vision to life with precision, 
            innovation, and attention to detail that sets us apart in the industry. With our comprehensive 
            approach and data-driven strategies, we ensure that your digital marketing efforts not only 
            reach your target audience but also drive meaningful engagement and measurable results for your business.
          </p>
        </div>

        {/* Enhanced Service Navigation */}
        <div className={`mt-16 flex justify-between items-center p-6 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 transform transition-all duration-700 delay-400 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              Service {currentIndex + 1} of {servicesArray.length}
            </div>
            <div className="w-32 bg-white/10 rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / servicesArray.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex gap-3">
            {servicesArray.map((service, index) => (
              <button
                key={service.id}
                onClick={() => handleServiceChange(service.id)}
                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                  currentServiceId === service.id 
                    ? 'bg-gradient-to-r from-pink-500 to-indigo-500 shadow-lg shadow-pink-500/50' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                title={service.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Contact Popup */}
{/* Enhanced Minimalistic Contact Popup */}
{showContactPopup && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-400">
    <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-white/20 p-10 max-w-xl w-full shadow-2xl animate-in zoom-in-90 duration-400 overflow-hidden">
      
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-8 right-12 w-32 h-32 bg-gradient-to-r from-pink-500/5 to-indigo-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-8 left-12 w-24 h-24 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-2xl animate-pulse delay-75"></div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setShowContactPopup(false)}
        className="absolute top-5 right-5 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-180 hover:scale-110 z-10"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Header with enhanced animations */}
      <div className="text-center mb-10 relative">
        <div className="flex justify-center mb-5">
          <div className="relative">
            {/* Main icon with pulse ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl animate-ping opacity-20"></div>
            <div className="relative p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl animate-in zoom-in duration-500 delay-200">
              {serviceData.icon}
            </div>
            
            {/* Orbiting particles */}
            <div className="absolute -inset-6 animate-spin" style={{ animationDuration: '8s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-pink-500/60 rounded-full transform -translate-x-1/2 animate-pulse"></div>
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-indigo-500/60 rounded-full transform -translate-x-1/2 animate-pulse delay-100"></div>
            </div>
            <div className="absolute -inset-6 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-purple-500/60 rounded-full transform -translate-y-1/2 animate-pulse delay-200"></div>
              <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-cyan-500/60 rounded-full transform -translate-y-1/2 animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        <div className="animate-in slide-in-from-bottom-4 duration-500 delay-300">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Let's Get Started
          </h3>
          <p className="text-gray-400">Choose your preferred way to connect</p>
        </div>
        
        {/* Animated line */}
        <div className="flex justify-center mt-4">
          <div className="w-0 h-0.5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-in slide-in-from-left duration-800 delay-500" 
               style={{ animation: 'expandWidth 0.8s ease-out 0.5s forwards' }}>
          </div>
        </div>
      </div>

      {/* Enhanced Horizontal Contact Options */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {Object.entries(contactData).map(([key, contact], index) => {
          const IconComponent = {
            linkedin: MessageCircle,
            whatsapp: MessageCircle,
            mail: Mail,
            phone: Phone
          }[key];

          const colors = {
            linkedin: "hover:bg-blue-500/15 hover:border-blue-400/40 hover:shadow-blue-500/20",
            whatsapp: "hover:bg-green-500/15 hover:border-green-400/40 hover:shadow-green-500/20",
            mail: "hover:bg-red-500/15 hover:border-red-400/40 hover:shadow-red-500/20",
            phone: "hover:bg-purple-500/15 hover:border-purple-400/40 hover:shadow-purple-500/20"
          };

          const iconColors = {
            linkedin: "group-hover:text-blue-400",
            whatsapp: "group-hover:text-green-400",
            mail: "group-hover:text-red-400",
            phone: "group-hover:text-purple-400"
          };

          return (
            <div key={key} className="relative">
              <button
                onClick={contact.action}
                className={`group relative flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-400 hover:scale-110 hover:-translate-y-2 animate-in slide-in-from-bottom-6 duration-500 hover:shadow-xl ${colors[key]}`}
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-r from-white/5 to-white/10 blur-sm"></div>
                
                <div className="relative">
                  {/* Icon background with animation */}
                  <div className="absolute inset-0 bg-white/10 rounded-xl group-hover:scale-125 transition-transform duration-400 group-hover:rotate-12"></div>
                  <div className="relative p-3 rounded-xl">
                    <IconComponent className={`w-6 h-6 text-gray-300 transition-all duration-400 group-hover:scale-110 ${iconColors[key]}`} />
                  </div>
                </div>
                
                <span className={`text-sm font-medium text-gray-400 transition-all duration-400 group-hover:text-white`}>
                  {contact.label}
                </span>

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-active:opacity-100 bg-white/20 transition-opacity duration-150"></div>
              </button>

              {/* Connection dots */}
              {index < Object.keys(contactData).length - 1 && (
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${800 + index * 200}ms` }}></div>
                    <div className="w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: `${900 + index * 200}ms` }}></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Enhanced Footer */}
      <div className="text-center animate-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: '1000ms' }}>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-sm text-gray-400">
            Online now • Quick response guaranteed
          </p>
        </div>
        
        {/* Animated status indicators */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-pink-500/60 rounded-full animate-bounce"></div>
            <span className="text-xs text-gray-500">Fast</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-indigo-500/60 rounded-full animate-bounce delay-75"></div>
            <span className="text-xs text-gray-500">Reliable</span>
          </div>
          <div className="w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500/60 rounded-full animate-bounce delay-150"></div>
            <span className="text-xs text-gray-500">24/7</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}