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
  <div className={`gallery-container ${animate ? 'fade-in' : ''} relative z-10 p-6`}>
    <button
      className="back-button px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 active:scale-95 transition-transform duration-200"
      onClick={handleBackClick}
    >
      ← Back to Home
    </button>

    <InfiniteMenu items={items} />
  </div>
);

};

export default Gallery;
