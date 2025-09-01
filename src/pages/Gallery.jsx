import InfiniteMenu from './InfiniteMenu';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import img1 from '/sim_logo.png';
import img2 from '/images/img2.png';
import img3 from '/images/img3.png';
import img4 from '/images/img4.png';
import img5 from '/images/img5.png';
import img6 from '/images/img6.png';
import img7 from '/images/img7.png';
import img8 from '/images/img8.png';
import img9 from '/images/img9.png';
import img10 from '/images/img10.png';
import img11 from '/images/img11.png';
import img12 from '/images/img12.png';
import img13 from '/images/img13.png';

import LoadingScreen from '../components/loader'; // adjust path if different

const Gallery = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
      setAnimate(true);
    }, 1200); // Adjust based on loading screen animation duration
    return () => clearTimeout(timeout);
  }, []);

  const handleBackClick = () => {
    setLoading(true); // Show loading screen
    setAnimate(false);
    setTimeout(() => {
      navigate('/');
    }, 1200); // Match this with loading animation time
  };

  const items = [
    { image: img2, title: "Sun Info Media", description: "Ad Shooting" },
    { image: img3, title: "Sun Info Media", description: "Political Events" },
    { image: img1, title: "Welcome to", description: "Try rotating the globe 🌍🖐" },
    { image: img4, title: "Sun Info Media", description: 'Political Events' },
    { image: img5, title: "Sun Info Media", description: 'VR/AR Shopping' },
    { image: img6, title: "Sun Info Media", description: 'VR/AR Shopping' },
    { image: img7, title: "Sun Info Media", description: "Ship Simulators" },
    { image: img8, title: "Sun Info Media", description: "Ship Simulators" },
    { image: img9, title: "Sun Info Media", description: "Train Simulators" },
    { image: img10, title: "Sun Info Media", description: "Train Simulators" },
    { image: img11, title: "Sun Info Media", description: "Car Simulators" },
    { image: img12, title: "Sun Info Media", description: "Car Simulators" },
    { image: img13, title: "Sun Info Media", description: "Truck Simulators" },
  ];

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
      >
        <span>←</span>
        <span>Back to Home</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center">
        <InfiniteMenu items={items} animate={animate} />
      </div>

      {/* Custom CSS for zoomed images */}
      <style jsx>{`
        /* Target the image containers within the InfiniteMenu */
        :global(.infinite-menu-item img),
        :global(.menu-item img),
        :global([class*="item"] img),
        :global([class*="slide"] img) {
          transform: scale(1.3) !important;
          object-fit: cover !important;
          width: 100% !important;
          height: 100% !important;
          transition: transform 0.3s ease !important;
        }

        /* Alternative targeting if the above doesn't work */
        :global(.gallery img) {
          transform: scale(1.3) !important;
          object-fit: cover !important;
        }

        /* Hover effect for images */
        :global(.infinite-menu-item:hover img),
        :global(.menu-item:hover img),
        :global([class*="item"]:hover img),
        :global([class*="slide"]:hover img) {
          transform: scale(1.4) !important;
        }

        /* Ensure circular clipping is maintained */
        :global(.infinite-menu-item),
        :global(.menu-item),
        :global([class*="item"]),
        :global([class*="slide"]) {
          overflow: hidden !important;
          border-radius: 50% !important;
        }

        /* Additional fallback styles */
        :global(.gallery-container img) {
          transform: scale(1.3);
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </div>
  );
};

export default Gallery;