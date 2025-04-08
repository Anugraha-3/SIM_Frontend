import React from "react";
import "../styles/Services.css";

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

// Duplicate services for smooth infinite-like scroll
const loopedServices = [...services, ...services];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-heading">O U R &emsp; S E R V I C E S</h2>
      <div className="scroll-container">
        <div className="services-grid">
          {loopedServices.map((service, index) => (
            <div className="service-card" key={index}>
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
