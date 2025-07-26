import React, { useState, useEffect } from "react";
import { ChevronLeft, ArrowRight, Monitor, Car, Truck, Train, Ship, Waves, Rocket, Plane, Zap, Target, Navigation, X, IndianRupee, Package, Settings, Eye, Zap as Lightning } from "lucide-react";

const simulatorsData = [
  {
    id: "car-simulator",
    title: "Car Simulator",
    image: "/src/components/service/car_simulator.jpg",
    icon: <Car className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Sophisticated system replicating real-world driving conditions with immersive authentic experience.",
    features: ["Day/Night Modes", "All Weather Conditions", "BENZ/BMW/LAMBORGHINI Compatible", "Compact Setup"],
    details: "The simulator is a sophisticated system meticulously designed to replicate real-world driving conditions, offering users an immersive and authentic driving experience. Equipped with high-quality components such as a monitor from renowned brands and a fully functional CPU running on Windows OS, it provides a seamless and responsive interface.",
    technicalDetails: {
      price: "₹ 2,45,000/Piece",
      minOrder: "2 Piece",
      brochure: "Product Brochure Available",
      specifications: {
        "Usage/Application": "Advanced Driver Training",
        "Type": "Simulator",
        "Product Range": "High Fidelity Simulators",
        "Display System": "Single Screen",
        "Motion System": "3 DOF",
        "Color": "White",
        "Voltage": "240 V"
      },
      description: "Immerse yourself in the pinnacle of driving simulation with SUN INFO MEDIA's Car Simulator. Perfect for training, education, and entertainment, our simulator offers a lifelike driving experience that envelops users in virtual landscapes and scenarios. Our comprehensive Computer System materials encompass everything you need for an immersive and dynamic experience. This includes top-quality Cabinets for housing and organizing components, along with high-resolution Displays for crystal-clear visuals. With Simulators software and a sturdy Skeleton structure, coupled with customized Chairs for ergonomic support, you'll have the perfect setup for extended sessions. The Car console boasts essential elements like a steering wheel, car gear, brake, and acceleration system, providing a realistic driving feel. Elevating the experience further is the inclusion of VR Oculus Device, complete with a Display Monitor and a full CPU setup. The Simulations Software offers Day and Night Modes, along with All Climatic Modes, ensuring versatility and realism. Compatible with major car manufacturers like BENZ, BMW, and LAMBORGHINI, and spanning a spacious Carpet area, our system is meticulously designed to deliver unparalleled immersion and performance for all your driving needs."
    }
  },
  {
  id: "truck-simulator",
  title: "Truck Simulator",
  image: "/src/components/service/truck_simulator.jpg",
  icon: <Truck className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Immersive truck driving experience with container delivery across multiple countries.",
  features: ["Multi-Country Routes", "Container Delivery", "BENZ/BMW/MAN/VOLVO Support", "Multiple Play Modes"],
  details: "The Truck Simulator offers users an immersive and lifelike truck driving experience. With versatile Day and Night Modes, and All Climatic Modes, accessible in Euro and major countries, users can explore various environments. Users can enjoy delivering containers from source to destination across multiple countries.",
  technicalDetails: {
    price: "₹ 2,50,000/Piece",
    minOrder: "2 Piece",
    brochure: "Product Brochure Available",
    specifications: {
      "Usage/Application": "Advanced Driver Training",
      "Type": "Simulator",
      "Product Range": "High Fidelity Simulators",
      "Display System": "Three Screens",
      "Motion System": "3 DOF",
      "Installation Service": "Available",
      "Color": "Black",
      "Voltage": "240 V"
    },
    description: "Immerse yourself in the captivating world of trucking adventures with SUN INFO MEDIA's Truck Simulator. Our comprehensive Computer System materials are meticulously crafted to provide you with an immersive experience like no other. Picture yourself surrounded by top-quality Cabinets, meticulously designed to organize every component efficiently. Your eyes will be treated to stunning visuals on high-resolution Monitor Displays, ensuring every detail of your journey is crystal clear.\n\nBut the heart of the experience lies in our Simulators software, meticulously engineered to bring lifelike simulations to life. Feel the adrenaline rush as you navigate through challenging landscapes and bustling cities, all from the comfort of your own home. And with our sturdy Skelton structure and customized Chairs, you'll enjoy ergonomic support throughout your entire gaming session, ensuring maximum comfort and immersion.\n\nStep into the driver's seat of our Truck console, equipped with all the essentials for a realistic driving experience. From the responsive steering wheel to the precise gear shifter, every detail is designed to make you feel like you're behind the wheel of a real truck. And with a complete CPU setup and Display Monitor, you'll have everything you need to dive into the action.\n\nBut the adventure doesn't stop there. Our Simulations Software offers Day and Night Modes, allowing you to experience the thrill of trucking at any time of day. Plus, with All Climatic Modes accessible in Euro and major countries, you can tackle everything from sunny skies to snowy roads with ease.\n\nAnd with compatibility with renowned truck brands like BENZ, BMW, MAN, and VOLVO, the possibilities are endless. Whether you're a seasoned trucking veteran or a newcomer to the world of truck simulators, our Truck Simulator promises an unparalleled experience that will keep you coming back for more. Step into the driver's seat and let SUN INFO MEDIA's Truck Simulator take you on the adventure of a lifetime."
  }
},
  {
  id: "train-simulator",
  title: "Indian Train Simulator",
  image: "/src/components/service/train_simulator.jpg",
  icon: <Train className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Meticulously crafted railway experience for enthusiasts with authentic locomotive operation.",
  features: [
    "Steam & Modern Engines", 
    "Passenger Coaches", 
    "Major Indian Cities", 
    "Weather Simulation",
    "Day/Night Modes",
    "All Climatic Conditions"
  ],
  details: "The Train Simulator is meticulously crafted for railway enthusiasts in India and beyond. At the heart of the experience lies the Train simulator console, equipped with essential controls like lever pulls, horn buttons, and brake levers, delivering precise locomotive operation.",
  technicalDetails: {
    price: "₹ 1,95,000/Pack",
    minOrder: "1 Pack",
    brochure: "Product Brochure Available",
    specifications: {
      "Type": "Simulator",
      "Usage/Application": "For Train Training",
      "Color": "Multicolor",
      "Voltage": "240 V",
      "Frequency": "50 Hz",
      "Display System": "Panoramic Display",
      "Motion System": "3 DOF",
      "Compatibility": "Steam & Modern Locomotives"
    },
    description: "Experience the captivating world of railways with SUN INFO MEDIA's Train Simulator, meticulously designed for enthusiasts in India and beyond. Our comprehensive Computer System materials provide the foundation for this immersive experience, featuring Cabinets for seamless organization, high-quality Monitor Displays for crisp visuals, and advanced Simulators software for realistic simulations. Enhanced by a robust Skelton structure and customized Chairs, our simulator ensures ergonomic comfort during extended gameplay.\n\nTake control of the tracks with our Train simulator console, equipped with essential controls such as lever pulls, horn buttons, and brake levers, delivering precise and authentic locomotive operation. Complete with a Display Monitor and full CPU setup, our simulator offers Day and Night Modes, along with All Climatic Modes, making it perfect for navigating major cities in Euro under any weather condition.\n\nWhether you're driving a vintage steam engine or a modern locomotive with passenger coaches, our Train Simulator caters to all rail enthusiasts, offering an authentic and immersive experience. So, step aboard, sound the horn, and let SUN INFO MEDIA's Train Simulator transport you to the thrilling world of railway adventures from the comfort of your own home."
  }
},
  {
  id: "ship-simulator",
  title: "Ship Training Simulator",
  image: "/src/components/service/ship_simulator.jpg",
  icon: <Ship className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Thrilling maritime adventures with precision navigation and realistic weather conditions.",
  features: [
    "Maritime Navigation",
    "Cargo Ships & Boats",
    "Global Voyages",
    "Weather Systems",
    "Day/Night Modes",
    "All Climatic Conditions"
  ],
  details: "The Ship Simulator plunges users into thrilling maritime adventures across India and beyond. At its core, the Ship simulator console features essential controls like throttlers and braking systems, delivering precision and realism in maritime navigation.",
  technicalDetails: {
    price: "₹ 7,00,000/Piece",
    minOrder: "2 Piece",
    brochure: "Product Brochure Available",
    specifications: {
      "Usage/Application": "For Ship Training",
      "Type": "Simulator",
      "Color": "White",
      "Voltage": "480 V",
      "Frequency": "60 Hz",
      "Power Source": "Electric",
      "Display System": "360° Panoramic",
      "Motion System": "6 DOF"
    },
    description: "Dive into the captivating world of maritime adventures with SUN INFO MEDIA's Ship Simulator, meticulously designed for immersive experiences in India and beyond. Our comprehensive array of Computer System materials forms the backbone of this thrilling simulation, featuring Cabinets for seamless organization, state-of-the-art Monitor Displays for vivid visuals, and cutting-edge Simulators software for realistic maritime simulations. Complemented by a robust Skelton structure and bespoke Chairs, our simulator ensures ergonomic comfort during extended gameplay sessions.\n\nTake the helm with confidence using our Ship simulator console, complete with essential controls such as throttlers, braking systems, and turning sliders levers, delivering unparalleled precision and realism. With a dedicated Display Monitor and full CPU setup, our simulator offers Day and Night Modes, along with All Climatic Modes, making it accessible for voyages to major countries and across varying weather conditions.\n\nWhether you're navigating nimble small boats or commanding colossal cargo ships, our Ship Simulator caters to all maritime enthusiasts, offering an authentic and exhilarating experience. So, chart your course, set sail, and let SUN INFO MEDIA's Ship Simulator transport you to the boundless expanse of the open seas, right from the comfort of your own home."
  }
},
  {
  id: "ocean-simulator",
  title: "Ocean Simulators Services",
  image: "/src/components/service/ocean_simulation.jpeg",
  icon: <Waves className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Portal to marine exploration with immersive underwater environment experiences.",
  features: [
    "Dynamic Water Simulation",
    "Virtual Reality Integration",
    "Customizable Vessel Controls",
    "Marine Operations Training",
    "Oceanographic Equipment Testing",
    "Professional & Educational Use"
  ],
  details: "The ocean simulator is your portal to marine exploration, meticulously designed to offer immersive experiences transcending geographical boundaries. Take command of your virtual vessel with confidence using our Ocean simulator console, equipped with essential navigation controls.",
  technicalDetails: {
    price: "₹ 3,50,000/Piece",
    minOrder: "1 Piece",
    brochure: "Product Brochure Available",
    specifications: {
      "Scope": "Dynamic Simulation",
      "Type": "Ocean",
      "Installation Service Needed": "Yes",
      "Service Location": "India",
      "Service Mode": "Onsite/Offsite",
      "Service Duration": "7 Days",
      "Payment Mode": "Online/Offline",
      "Display System": "Immersive VR",
      "Motion System": "3 DOF"
    },
    description: "Our Ocean Simulator Services provide highly realistic and immersive training environments for marine operations, tailored for professional and educational needs. These simulators are designed to replicate real-world ocean conditions, offering advanced features such as virtual reality integration, dynamic water simulation, and customizable vessel controls. Ideal for maritime training, research, and entertainment, our solutions ensure precision, safety, and efficiency.\n\nWhether you're training ship captains, exploring marine environments, or testing oceanographic equipment, our ocean simulators deliver unparalleled performance and reliability. With state-of-the-art technology and expert support, we bring the vastness of the ocean to your fingertips."
  }
},
  {
  id: "submarine-simulator",
  title: "Under Ocean Simulator",
  image: "/src/components/service/submarine_simulator.jpg",
  icon: <Navigation className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Cutting-edge deep-sea exploration with authentic submarine operation experience.",
  features: [
    "Deep-Sea Exploration",
    "Marine Ecosystem Simulation",
    "Cylindrical Design",
    "5-Person Capacity",
    "Vibrant Coral Reefs",
    "Majestic Sea Creatures"
  ],
  details: "Sun Info Media proudly presents the Under Ocean Simulator, a cutting-edge immersive experience designed to replicate the deep-sea exploration environment. Inspired by real-world submarines, our simulator features highly detailed and customizable interiors and exteriors.",
  technicalDetails: {
    price: "₹ 7,00,000/Piece",
    minOrder: "2 Piece",
    brochure: "Product Brochure Available",
    specifications: {
      "Type": "Simulators",
      "Usage/Application": "For Under Ocean Tour",
      "Color": "White",
      "Material": "Mild Steel",
      "Capacity": "5 Person",
      "Shape": "Cylindrical",
      "Display System": "Multi-Screen Array",
      "Motion System": "6 DOF",
      "Voltage": "240 V"
    },
    description: "Embark on an unparalleled underwater adventure with SUN INFO MEDIA's Under Ocean Simulator, an innovative platform designed to bring the mesmerizing beauty of the ocean depths to life. Utilizing cutting-edge technology and advanced simulation software, our simulator offers an immersive and realistic experience, allowing users to explore the wonders of the underwater world with unprecedented detail and accuracy.\n\nFrom vibrant coral reefs bustling with marine life to breathtaking underwater landscapes, our simulator faithfully recreates the rich diversity of marine ecosystems. Navigate through intricate underwater environments, encounter majestic sea creatures, and witness awe-inspiring natural phenomena, all from the comfort and safety of a controlled environment.\n\nWhether you're a marine biologist conducting research, a diving enthusiast seeking adventure, or an educator looking to inspire curiosity about the ocean, our Under Ocean Simulator provides a captivating and educational experience for users of all ages and backgrounds. Immerse yourself in the wonders of the deep sea and embark on a journey of discovery with SUN INFO MEDIA's Under Ocean Simulator."
  }
},
  {
  id: "spacex-simulator",
  title: "Space X Engine Simulator",
  image: "/src/components/service/spacex_engine_simulator.jpg",
  icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" />,
  description: "Gateway to extraordinary space exploration with VR immersion and Earth viewing.",
  features: ["VR Oculus Integration", "3D Earth Exploration", "Astronaut Experience", "Space Navigation"],
  details: "The Space X Engine simulator is your gateway to an extraordinary journey into the depths of space. Step into the role of an intrepid astronaut with realistic controls and responsive handling as you navigate the vast expanse of space with VR Oculus devices for complete immersion.",
  technicalDetails: {
    price: "₹ 2,10,000/Piece",
    minOrder: "1 Piece",
    brochure: "Product Brochure Available",
    specifications: {
      "Usage/Application": "Space Training",
      "Type": "Simulation",
      "Material": "Mild Steel",
      "Color": "White",
      "Voltage": "240 V"
    },
    description: "Embark on an extraordinary journey beyond the realms of Earth with SUN INFO MEDIA's Space X Engine Simulator, where the wonders of space exploration await. Our comprehensive Computer System materials provide the foundation for this out-of-this-world experience, featuring Cabinets for seamless organization and high-quality Monitor Displays for vivid visuals. Enhanced by a sturdy Skelton structure and customized Chairs, our simulator ensures ergonomic comfort during extended sessions.\n\nStep into the shoes of an intrepid astronaut with our Space X Engine simulator equipment, offering realistic controls and responsive handling as you navigate through the vast expanse of space. Complete with VR Oculus devices for an immersive experience, our simulator allows you to explore all the buildings and places on Earth in a 3D immersive mode, right from the comfort of your surroundings.\n\nWhether you're piloting spacecraft at light speed, traversing distant planets and galaxies, or marveling at the beauty of star clusters, our Space X Engine Simulator offers an unparalleled experience that captures the essence of space exploration. So, prepare for launch, strap in tight, and let SUN INFO MEDIA's Space X Engine Simulator ignite your imagination and transport you to worlds beyond your wildest dreams."
  }
},
  {
    id: "flight-simulator",
    title: "Flight Simulator",
    image: "/src/components/service/jet_simulator.jpg",
    icon: <Plane className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Complete aviation experience with real-time weather data and diverse aircraft selection.",
    features: ["Multiple Aircraft Types", "Real-time Weather", "Global Navigation", "Cessna to Boeing"],
    details: "The flight simulator is crafted to captivate aviation enthusiasts worldwide. With real-time weather and climate data sourced from satellites, navigate through every country on Earth. Available aircraft include Cessna 172, Rafale with Oculus technology, Airbus 320/380, and Boeing 737/777/787 models.",
    technicalDetails: {
  price: "₹ 7,00,000 - ₹ 10,00,000/Piece",
  minOrder: "1 Piece",
  brochure: "Product Brochure Available",
  specifications: {
    "Dimensions": "157cm (W) × 183cm (L) × 127cm (H)",
    "Power": "Standard 110V/220V (13A plugs)",
    "Internet": "150Mbps recommended",
    "Display": "Triple 32-inch curved monitors",
    "Audio": "4.1 surround sound with tactile feedback",
    "Software": "Microsoft Flight Simulator included",
    "Connectivity": "Online multiplayer, remote PC support"
  },
  description: "Comprehensive flight training system with cabinets, high-quality monitors, robust skeleton structure, and ergonomic chairs. Includes flight console with yoke, pedals, throttle quadrant, saitek controls, and rudder. Features day/night modes, all climatic conditions, real-time satellite weather data, and global navigation. Supports multiple aircraft types from Cessna 172 to Boeing 747. Complete with chassis, PC, monitor stand, UPS, and wooden shipping crate for professional flight training and certification."
}
  },
  {
    id: "jet-simulator",
    title: "Jet Simulator",
    image: "/src/components/service/jet_simulator.jpg",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    description: "State-of-the-art fighter jet cockpit with advanced HUD and combat systems.",
    features: ["Fighter Jet Cockpit", "HUD Display", "Combat Systems", "VR Integration"],
    details: "The Jet Simulator is meticulously designed to replicate the cockpit of a state-of-the-art fighter jet. Features advanced Heads-Up Display (HUD), multiple digital screens for radar, navigation, and weapon systems, with integrated VR headset option for dogfights and aerial refueling.",
    technicalDetails: {
      price: "₹ 7,25,000/Piece",
      minOrder: "1 Piece",
      brochure: "Product Brochure Available",
      specifications: {
        "Usage/Application": "Military Fighter Training",
        "Type": "Combat Flight Simulator",
        "Product Range": "Military Aviation Systems",
        "Display System": "Multi-HUD Array",
        "Motion System": "High-G 6 DOF",
        "Color": "Military Grey",
        "Voltage": "240 V"
      },
      description: "Military-grade fighter jet simulation with authentic combat systems, advanced HUD displays, and realistic aerial combat training capabilities."
    }
  },
  {
    id: "mars-rover-simulator",
    title: "Mars Rover 3D Simulation",
    image: "/src/components/service/mars_rover_simulator.jpg",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    description: "Expertly designed Mars exploration with realistic rover operations and Martian surface interaction.",
    features: ["Mars Surface Exploration", "Robotic Arm Control", "Scientific Analysis", "Realistic Martian Environment"],
    details: "The Mars Rover 3D Simulator is expertly designed to replicate the rugged and functional aesthetic of a real Mars rover. Features multiple interactive screens displaying real-time data from the rover's sensors, including panoramic views and geological analysis of the Martian surface.",
    technicalDetails: {
      price: "₹ 5,95,000/Piece",
      minOrder: "1 Piece",
      brochure: "Product Brochure Available",
      specifications: {
        "Usage/Application": "Space Exploration Training",
        "Type": "Planetary Rover Simulator",
        "Product Range": "Space Exploration Systems",
        "Display System": "360° Mars Environment",
        "Motion System": "Rover Dynamics",
        "Color": "Mars Red",
        "Voltage": "240 V"
      },
      description: "Authentic Mars exploration simulator with realistic Martian surface environments, robotic arm controls, and comprehensive scientific analysis capabilities."
    }
  }
];

export default function LinearSimulatorsPage() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [imageErrors, setImageErrors] = useState(new Set());
  const [selectedSimulator, setSelectedSimulator] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackClick = () => {
    window.history.back();
  };

  const handleImageError = (imageId) => {
    setImageErrors(prev => new Set([...prev, imageId]));
  };

  const openTechnicalDetails = (simulator) => {
    setSelectedSimulator(simulator);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSimulator(null);
  };
  
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "917788003366";
    const message = selectedSimulator 
      ? `Hi, I'm interested in the ${selectedSimulator.title}. Can you provide more information?`
      : "Hi, I'm interested in your simulation services. Can you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-black text-white font-primary">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-pink-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <div className="relative h-[50vh] md:h-[60vh] bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-indigo-900/50 overflow-hidden">
        {/* Animated Geometric Shapes - Mobile Optimized */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating Geometric Shapes */}
          <div className="absolute top-10 md:top-20 left-10 md:left-20 w-16 h-16 md:w-32 md:h-32 border-2 border-pink-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-20 md:top-40 right-16 md:right-32 w-12 h-12 md:w-24 md:h-24 border-2 border-indigo-500/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-16 md:bottom-32 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-purple-500/20 rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 md:w-20 md:h-20 border-2 border-cyan-500/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          
          {/* Moving Lines - Hidden on mobile for performance */}
          <div className="hidden md:block absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-pulse"></div>
          <div className="hidden md:block absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/2 w-4 h-4 md:w-8 md:h-8 bg-pink-500/40 rounded-full blur-sm animate-float"></div>
          <div className="absolute bottom-1/3 right-1/5 w-6 h-6 md:w-12 md:h-12 bg-indigo-500/40 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/5 w-3 h-3 md:w-6 md:h-6 bg-purple-500/40 rounded-full blur-sm animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Dynamic Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-transparent to-indigo-500/10 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-cyan-500/10 animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Matrix-style flowing lines - Reduced on mobile */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="hidden md:block absolute w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent animate-matrix-flow"
              style={{
                left: `${10 + i * 20}%`,
                height: '100%',
                animationDelay: `${i * 1}s`,
                animationDuration: '8s'
              }}
            ></div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
        
        <button
          onClick={handleBackClick}
          className="absolute top-4 md:top-8 left-4 md:left-8 flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 z-10 group text-sm md:text-base"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Services</span>
          <span className="sm:hidden">Back</span>
        </button>

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-white via-pink-200 to-indigo-200 bg-clip-text text-transparent mb-3 md:mb-6">
              Simulation Center
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto px-4 md:px-8">
              Experience cutting-edge simulation technology across multiple domains - from terrestrial vehicles to space exploration
            </p>
          </div>
        </div>

        {/* Enhanced floating particles - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
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
            className={`simulator-section min-h-screen flex items-center py-10 md:py-20 transition-all duration-1000 ${
              visibleSections.has(simulator.id) 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-16'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'
              }`}>
                {/* Content */}
                <div className={`space-y-6 md:space-y-8 ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}>
                  <div className="flex items-center gap-3 md:gap-6 mb-6 md:mb-8">
                    <div className="p-3 md:p-4 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-2xl animate-pulse">
                      {simulator.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
                        {simulator.title}
                      </h2>
                      <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mt-1 md:mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                    {simulator.description}
                  </p>
                  
                  <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                    {simulator.details}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                    {simulator.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="group p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="p-1.5 md:p-2 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                          </div>
                          <span className="font-medium text-sm md:text-base">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
                    <button 
                      onClick={() => openTechnicalDetails(simulator)}
                      className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                    >
                      Technical Details
                    </button>
                  </div>
                </div>

                {/* Image/Visual */}
                <div className={`relative ${index % 2 === 0 ? '' : 'lg:col-start-1'} order-first lg:order-none`}>
                  <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden group">
                    {!imageErrors.has(simulator.id) ? (
                      <img
                        src={simulator.image}
                        alt={simulator.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={() => handleImageError(simulator.id)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                        <div className="text-center p-4 md:p-8">
                          <div className="mb-3 md:mb-4 p-3 md:p-4 bg-white/10 rounded-full w-fit mx-auto">
                            {simulator.icon}
                          </div>
                          <p className="text-gray-400 text-sm md:text-base">Image Loading...</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
                    
                    {/* Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Corner Number */}
                    <div className="absolute top-3 md:top-6 right-3 md:right-6 w-8 h-8 md:w-12 md:h-12 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center font-bold text-sm md:text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-4 h-4 md:w-8 md:h-8 bg-pink-500/30 rounded-full blur-sm"></div>
                  <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-12 md:h-12 bg-indigo-500/30 rounded-full blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Details Modal */}
      {isModalOpen && selectedSimulator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 md:top-6 right-3 md:right-6 p-2 md:p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10 group"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Header Image */}
            <div className="relative h-32 md:h-64 rounded-t-2xl md:rounded-t-3xl overflow-hidden">
              {!imageErrors.has(selectedSimulator.id) ? (
                <img
                  src={selectedSimulator.image}
                  alt={selectedSimulator.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(selectedSimulator.id)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-2 md:mb-4 p-2 md:p-4 bg-white/10 rounded-full w-fit mx-auto">
                      {selectedSimulator.icon}
                    </div>
                    <p className="text-gray-400 text-sm md:text-base">Image Loading...</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 flex items-center gap-2 md:gap-4">
                <div className="p-2 md:p-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl">
                  {selectedSimulator.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-3xl font-bold text-white">{selectedSimulator.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">Technical Specifications</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-8 space-y-6 md:space-y-8">
              {/* Price and Order Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-gradient-to-r from-pink-500/10 to-indigo-500/10 p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
                    <span className="text-gray-400 text-sm md:text-base">Price</span>
                  </div>
                  <p className="text-lg md:text-2xl font-bold text-white">{selectedSimulator.technicalDetails.price}</p>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">Get Latest Price</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Package className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                    <span className="text-gray-400 text-sm md:text-base">Min Order</span>
                  </div>
                  <p className="text-lg md:text-2xl font-bold text-white">{selectedSimulator.technicalDetails.minOrder}</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 md:p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 md:gap-3 mb-2">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
                    <span className="text-gray-400 text-sm md:text-base">Brochure</span>
                  </div>
                  <p className="text-base md:text-lg font-semibold text-white">Available</p>
                  <button className="text-xs md:text-sm text-pink-400 hover:text-pink-300 mt-1">Download PDF</button>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
                  <h4 className="text-xl md:text-2xl font-bold text-white">Technical Specifications</h4>
                </div>
                
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {Object.entries(selectedSimulator.technicalDetails.specifications).map(([key, value], index) => (
                    <div
                      key={key}
                      className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 md:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="text-gray-400 font-medium text-sm md:text-base mb-1 sm:mb-0">{key}</span>
                      <span className="text-white font-semibold text-sm md:text-base">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <Lightning className="w-5 h-5 md:w-6 md:h-6 text-pink-500" />
                  <h4 className="text-xl md:text-2xl font-bold text-white">Product Description</h4>
                </div>
                
                <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                    {selectedSimulator.technicalDetails.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center pt-4 md:pt-6 border-t border-white/10">
                <button 
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto min-w-[200px] px-6 md:px-8 py-3 md:py-4 border border-white/20 rounded-xl font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                >
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA Section */}
      <div className="py-10 md:py-20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Ready to Experience the Future?
          </h3>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Step into our world of advanced simulation technology and discover experiences that push the boundaries of reality. 
            From the depths of the ocean to the vastness of space, your next adventure awaits.
          </p>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-0.5 md:h-1 bg-black/50 z-50">
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

        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-bounce {
            animation-duration: 3s;
          }
          
          .animate-pulse {
            animation-duration: 3s;
          }
          
          .animate-spin {
            animation-duration: 30s;
          }
        }
      `}</style>
    </div>
  );
}