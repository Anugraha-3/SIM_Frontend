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
    { image: img2, title: "Sun Info Media", description: "Flagship Events" },
    { image: img3, title: "Sun Info Media", description: "Overall trophy winners" },
    { image: img1, title: "Welcome to", description: "Try rotating the globe 🌍🖐" },
    { image: img4, title: "Sun Info Media", description: 'Flash Mob by Students' },
    { image: img5, title: "Sun Info Media", description: 'Inauguration Ceremony' },
    { image: img6, title: "Sun Info Media", description: 'Chief Guest Addressing' },
    { image: img7, title: "Sun Info Media", description: "Mr. Melinia 2025" },
    { image: img8, title: "Sun Info Media", description: "Technical Event" },
    { image: img9, title: "Sun Info Media", description: "Cultural Performance" },
    { image: img10, title: "Sun Info Media", description: "Faculty at Valediction" },
    { image: img11, title: "Sun Info Media", description: "Trophy Unveiling" },
    { image: img12, title: "Sun Info Media", description: "The Team Behind" },
    { image: img13, title: "Sun Info Media", description: "Basketball Tournament" },
  ];

  if (loading) return <LoadingScreen />;

  return (
    <div className={`gallery-container ${animate ? 'fade-in' : ''}`}>
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Home
      </button>
      <InfiniteMenu items={items} />
    </div>
  );
};

export default Gallery;
