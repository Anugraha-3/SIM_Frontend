import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, Monitor, Car, Truck, Train, Ship, Waves, Rocket, Plane, Zap, Target, Navigation } from "lucide-react";

const simulatorsData = [
  {
    id: "car-simulator",
    title: "Car Simulator",
    image: "/src/components/service/car_simulator.jpg",
    icon: <Car className="w-8 h-8" />,
    description: "Sophisticated system replicating real-world driving conditions with immersive authentic experience.",
    features: ["Day/Night Modes", "All Weather Conditions", "BENZ/BMW/LAMBORGHINI Compatible", "Compact Setup"],
    details: "The simulator is a sophisticated system meticulously designed to replicate real-world driving conditions, offering users an immersive and authentic driving experience. Equipped with high-quality components such as a monitor from renowned brands and a fully functional CPU running on Windows OS, it provides a seamless and responsive interface."
  },
  {
    id: "truck-simulator",
    title: "Truck Simulator",
    image: "/src/components/service/truck_simulator.jpg",
    icon: <Truck className="w-8 h-8" />,
    description: "Immersive truck driving experience with container delivery across multiple countries.",
    features: ["Multi-Country Routes", "Container Delivery", "BENZ/BMW/MAN/VOLVO Support", "Multiple Play Modes"],
    details: "The Truck Simulator offers users an immersive and lifelike truck driving experience. With versatile Day and Night Modes, and All Climatic Modes, accessible in Euro and major countries, users can explore various environments. Users can enjoy delivering containers from source to destination across multiple countries."
  },
  {
    id: "train-simulator",
    title: "Train Simulator",
    image: "/src/components/service/train_simulator.jpg",
    icon: <Train className="w-8 h-8" />,
    description: "Meticulously crafted railway experience for enthusiasts with authentic locomotive operation.",
    features: ["Steam & Modern Engines", "Passenger Coaches", "European Cities", "Weather Simulation"],
    details: "The Train Simulator is meticulously crafted for railway enthusiasts in India and beyond. At the heart of the experience lies the Train simulator console, equipped with essential controls like lever pulls, horn buttons, and brake levers, delivering precise locomotive operation."
  },
  {
    id: "ship-simulator",
    title: "Ship Simulator",
    image: "/src/components/service/ship_simulator.jpg",
    icon: <Ship className="w-8 h-8" />,
    description: "Thrilling maritime adventures with precision navigation and realistic weather conditions.",
    features: ["Maritime Navigation", "Cargo Ships & Boats", "Global Voyages", "Weather Systems"],
    details: "The Ship Simulator plunges users into thrilling maritime adventures across India and beyond. At its core, the Ship simulator console features essential controls like throttlers and braking systems, delivering precision and realism in maritime navigation."
  },
  {
    id: "ocean-simulator",
    title: "Ocean Simulator",
    image: "/src/components/service/ocean_simulation.jpeg",
    icon: <Waves className="w-8 h-8" />,
    description: "Portal to marine exploration with immersive underwater environment experiences.",
    features: ["Underwater Exploration", "Marine Life", "Deep Sea Navigation", "Global Oceans"],
    details: "The ocean simulator is your portal to marine exploration, meticulously designed to offer immersive experiences transcending geographical boundaries. Take command of your virtual vessel with confidence using our Ocean simulator console, equipped with essential navigation controls."
  },
  {
    id: "submarine-simulator",
    title: "Submarine Simulator",
    image: "/src/components/service/submarine_simulator.jpg",
    icon: <Navigation className="w-8 h-8" />,
    description: "Cutting-edge deep-sea exploration with authentic submarine operation experience.",
    features: ["Deep-Sea Exploration", "Realistic Controls", "Customizable Design", "Ocean Depths"],
    details: "Sun Info Media proudly presents the Submarine Simulator, a cutting-edge immersive experience designed to replicate the deep-sea exploration environment. Inspired by real-world submarines like OceanGate, our simulator features highly detailed and customizable interiors and exteriors."
  },
  {
    id: "spacex-simulator",
    title: "Space X Engine Simulator",
    image: "/src/components/service/spacex_engine_simulator.jpg",
    icon: <Rocket className="w-8 h-8" />,
    description: "Gateway to extraordinary space exploration with VR immersion and Earth viewing.",
    features: ["VR Oculus Integration", "3D Earth Exploration", "Astronaut Experience", "Space Navigation"],
    details: "The Space X Engine simulator is your gateway to an extraordinary journey into the depths of space. Step into the role of an intrepid astronaut with realistic controls and responsive handling as you navigate the vast expanse of space with VR Oculus devices for complete immersion."
  },
  {
    id: "flight-simulator",
    title: "Flight Simulator",
    image: "/src/components/service/jet_simulator.jpg",
    icon: <Plane className="w-8 h-8" />,
    description: "Complete aviation experience with real-time weather data and diverse aircraft selection.",
    features: ["Multiple Aircraft Types", "Real-time Weather", "Global Navigation", "Cessna to Boeing"],
    details: "The flight simulator is crafted to captivate aviation enthusiasts worldwide. With real-time weather and climate data sourced from satellites, navigate through every country on Earth. Available aircraft include Cessna 172, Rafale with Oculus technology, Airbus 320/380, and Boeing 737/777/787 models."
  },
  {
    id: "jet-simulator",
    title: "Jet Simulator",
    image: "/src/components/service/jet_simulator.jpg",
    icon: <Zap className="w-8 h-8" />,
    description: "State-of-the-art fighter jet cockpit with advanced HUD and combat systems.",
    features: ["Fighter Jet Cockpit", "HUD Display", "Combat Systems", "VR Integration"],
    details: "The Jet Simulator is meticulously designed to replicate the cockpit of a state-of-the-art fighter jet. Features advanced Heads-Up Display (HUD), multiple digital screens for radar, navigation, and weapon systems, with integrated VR headset option for dogfights and aerial refueling."
  },
  {
    id: "mars-rover-simulator",
    title: "Mars Rover 3D Simulation",
    image: "/src/components/service/mars_rover_simulator.jpg",
    icon: <Target className="w-8 h-8" />,
    description: "Expertly designed Mars exploration with realistic rover operations and Martian surface interaction.",
    features: ["Mars Surface Exploration", "Robotic Arm Control", "Scientific Analysis", "Realistic Martian Environment"],
    details: "The Mars Rover 3D Simulator is expertly designed to replicate the rugged and functional aesthetic of a real Mars rover. Features multiple interactive screens displaying real-time data from the rover's sensors, including panoramic views and geological analysis of the Martian surface."
  }
];

export default function LinearSimulatorsPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleBackClick = () => {
    window.history.back();
  };

  const handleImageError = (imageId) => {
    setImageErrors(prev => new Set([...prev, imageId]));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('.simulator-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-primary">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative h-[60vh] bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-indigo-900/50 overflow-hidden">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-40 right-32 w-24 h-24 border-2 border-indigo-500/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-purple-500/20 rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          
          {/* Moving Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-pink-500/40 rounded-full blur-sm animate-float"></div>
          <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-indigo-500/40 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/5 w-6 h-6 bg-purple-500/40 rounded-full blur-sm animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-indigo-500/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Matrix-style flowing lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-matrix-flow"
              style={{
                left: `${10 + i * 12}%`,
                height: '100%',
                animationDelay: `${i * 0.5}s`,
                animationDuration: '8s'
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        
        <button
          onClick={handleBackClick}
          className="absolute top-8 left-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 z-10 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-pink-200 to-indigo-200 bg-clip-text text-transparent mb-6">
              Simulation Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-8">
              Experience cutting-edge simulation technology across multiple domains - from terrestrial vehicles to space exploration
            </p>
          </div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/20 rounded-full animate-float-particles"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Glowing edges */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Linear Simulators Display */}
      <div className="relative">
        {simulatorsData.map((simulator, index) => (
          <div
            key={simulator.id}
            id={simulator.id}
            className={`simulator-section min-h-screen flex items-center py-20 transition-all duration-1000 ${
              visibleSections.has(simulator.id) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-7xl mx-auto px-8 w-full">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl animate-pulse">
                      {simulator.icon}
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
                        {simulator.title}
                      </h2>
                      <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {simulator.description}
                  </p>
                  
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {simulator.details}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {simulator.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="group p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-6">
                    <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 group">
                      <span className="group-hover:animate-pulse">Experience Now</span>
                    </button>
                    <button className="px-8 py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105">
                      Technical Details
                    </button>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden group">
                    {!imageErrors.has(simulator.id) ? (
                      <img
                        src={simulator.image}
                        alt={simulator.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(simulator.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="mb-4 p-4 bg-white/10 rounded-full w-fit mx-auto">
                            {simulator.icon}
                          </div>
                          <p className="text-gray-400">Image Loading...</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Corner Number */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center font-bold text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500/30 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-500/30 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Step into our world of advanced simulation technology and discover experiences that push the boundaries of reality. 
            From the depths of the ocean to the vastness of space, your next adventure awaits.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105">
              Book Your Session
            </button>
            <button className="px-10 py-5 border border-white/20 rounded-xl font-bold text-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 transition-all duration-300"
          style={{ 
            width: `${(visibleSections.size / simulatorsData.length) * 100}%` 
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-particles {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          25% { transform: translateY(-10px) translateX(5px); opacity: 1; }
          50% { transform: translateY(-5px) translateX(-5px); opacity: 0.7; }
          75% { transform: translateY(-15px) translateX(3px); opacity: 1; }
        }
        
        @keyframes matrix-flow {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-particles {
          animation: float-particles 8s ease-in-out infinite;
        }
        
        .animate-matrix-flow {
          animation: matrix-flow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}