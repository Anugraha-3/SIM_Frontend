import React from "react";
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
    id: "event-management",
    title: "Event Management", 
    image: "/project2.png",
    icon: <Calendar className="w-8 h-8" />,
    description: "Complete event planning and management services for memorable experiences.",
    route: "/services/EventManagementPage"
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
  },
  {
    id: "dome-theater",
    title: "Dome Theater", 
    image: "/dome.jpg",
    icon: <Building className="w-8 h-8" />,
    description: "Immersive dome theater experiences with 360-degree projection.",
    route: "/services/DomeTheaterPage"
  }
];

export default function Services() {
  const duplicated = [...services, ...services, ...services];

  const handleServiceClick = (service) => {
    // Navigate to the service page
    window.location.href = service.route;
    // Or if using React Router: navigate(service.route);
  };

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
    </section>
  );
}