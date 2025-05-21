import React from "react";

const services = [
  {
    title: "Simulation",
    image: "/simulation.jpg",
  },
  {
    title: "Photography",
    image: "/photography.jpg",
  },
  {
    title: "Event Management",
    image: "/project2.png",
  },
  {
    title: "Digital Marketing",
    image: "/digital.jpg",
  },
];

export default function Services() {
  const duplicated = [...services, ...services, ...services]; // duplicate for seamless scroll

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
              className="flex-none w-[280px] bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div
                className="h-[180px] bg-cover bg-center rounded-t-2xl relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
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
