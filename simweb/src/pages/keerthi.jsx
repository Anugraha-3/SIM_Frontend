import React, { useState, useEffect } from "react";
import keerthiImg from "../assets/keerthivarman.png";

// Timeline in descending order (2025 to 2009)
const timeline = [
  { year: "2025", text: "Launched C99 Conceptual Trading Business" },
  { year: "2024", text: "Entered Space Tech, Drone Tech, Flying Cars (R&D)" },
  { year: "2023", text: "Started SIM Tech Holding Company" },
  {
    year: "2022",
    text: "Ventured into Holograms, Holobox, Future Car, VR/AR/MR, AI-based Agri & Medical",
  },
  { year: "2021", text: "Launched Astro photography company" },
  { year: "2020", text: "Developed all-kind vehicular simulators" },
  { year: "2018", text: "Founded election management company" },
  { year: "2016", text: "Started telecom services" },
  { year: "2014", text: "Launched SIM TV" },
  { year: "2009", text: "Co-founded SIM" },
];

// Add these new component definitions BEFORE the LaunchPad component in your file

const RealisticSaturn = ({ size = 120, opacity = 0.4, position }) => {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        ...position,
        transform: `scale(${size / 120})`,
        opacity: opacity
      }}
    >
      <div className="relative">
        {/* Saturn Planet Body */}
        <div 
          className="rounded-full relative overflow-hidden"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            background: `
              radial-gradient(circle at 30% 30%, 
                #fbbf24 0%, 
                #f59e0b 20%, 
                #d97706 40%, 
                #b45309 60%, 
                #92400e 80%, 
                #451a03 100%
              )
            `,
            boxShadow: `
              inset 0 0 ${size * 0.3}px rgba(0,0,0,0.4),
              0 0 ${size * 0.5}px rgba(251,191,36,0.3)
            `
          }}
        >
          {/* Saturn's atmospheric bands */}
          <div className="absolute inset-0">
            {[0.2, 0.35, 0.5, 0.65, 0.8].map((position, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 opacity-30"
                style={{
                  top: `${position * 100}%`,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(180,83,9,0.8), transparent)',
                  transform: `skew(${-10 + i * 5}deg)`
                }}
              />
            ))}
          </div>
          
          {/* Highlight for 3D effect */}
          <div 
            className="absolute rounded-full"
            style={{
              top: `${size * 0.15}px`,
              left: `${size * 0.2}px`,
              width: `${size * 0.4}px`,
              height: `${size * 0.3}px`,
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)',
              filter: 'blur(2px)'
            }}
          />
        </div>
        
        {/* Saturn's Rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer ring */}
          <div 
            className="absolute border-4 rounded-full opacity-80"
            style={{
              width: `${size * 2.2}px`,
              height: `${size * 0.4}px`,
              borderColor: 'transparent',
              borderTopColor: '#a3a3a3',
              borderBottomColor: '#525252',
              transform: 'rotateX(75deg)',
              boxShadow: `
                0 0 0 2px rgba(163,163,163,0.6),
                0 0 0 6px rgba(82,82,82,0.4),
                0 0 0 10px rgba(163,163,163,0.3)
              `
            }}
          />
          
          {/* Inner ring */}
          <div 
            className="absolute border-2 rounded-full opacity-60"
            style={{
              width: `${size * 1.8}px`,
              height: `${size * 0.3}px`,
              borderColor: 'transparent',
              borderTopColor: '#d4d4d4',
              borderBottomColor: '#737373',
              transform: 'rotateX(75deg)'
            }}
          />
          
          {/* Ring particles effect */}
          <div 
            className="absolute rounded-full opacity-40"
            style={{
              width: `${size * 2}px`,
              height: `${size * 0.35}px`,
              background: `
                conic-gradient(
                  from 0deg,
                  transparent 0deg,
                  rgba(163,163,163,0.3) 45deg,
                  transparent 90deg,
                  rgba(115,115,115,0.2) 135deg,
                  transparent 180deg,
                  rgba(163,163,163,0.3) 225deg,
                  transparent 270deg,
                  rgba(115,115,115,0.2) 315deg,
                  transparent 360deg
                )
              `,
              transform: 'rotateX(75deg)',
              filter: 'blur(1px)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

const SpacePlanet = ({ size = 80, colors, position, opacity = 0.5, type = 'gas' }) => {
  const getGradient = () => {
    switch (type) {
      case 'gas':
        return `radial-gradient(circle at 25% 25%, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
      case 'rocky':
        return `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
      case 'ice':
        return `radial-gradient(circle at 20% 20%, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
      default:
        return `radial-gradient(circle at 25% 25%, ${colors[0]}, ${colors[1]}, ${colors[2]})`;
    }
  };

  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        ...position,
        opacity: opacity,
        filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))'
      }}
    >
      <div 
        className="rounded-full relative overflow-hidden"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: getGradient(),
          boxShadow: `
            inset 0 0 ${size * 0.4}px rgba(0,0,0,0.5),
            0 0 ${size * 0.6}px ${colors[0]}40
          `
        }}
      >
        {/* Atmospheric effects for gas giants */}
        {type === 'gas' && (
          <div className="absolute inset-0">
            {[0.3, 0.5, 0.7].map((pos, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 opacity-20"
                style={{
                  top: `${pos * 100}%`,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${colors[1]}, transparent)`,
                  transform: `skew(${-5 + i * 3}deg)`
                }}
              />
            ))}
          </div>
        )}
        
        {/* Surface features for rocky planets */}
        {type === 'rocky' && (
          <div className="absolute inset-0">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full opacity-30"
                style={{
                  width: `${size * (0.1 + Math.random() * 0.2)}px`,
                  height: `${size * (0.1 + Math.random() * 0.2)}px`,
                  left: `${Math.random() * 80}%`,
                  top: `${Math.random() * 80}%`,
                  background: colors[2],
                  filter: 'blur(1px)'
                }}
              />
            ))}
          </div>
        )}
        
        {/* Highlight */}
        <div 
          className="absolute rounded-full opacity-60"
          style={{
            top: `${size * 0.15}px`,
            left: `${size * 0.2}px`,
            width: `${size * 0.3}px`,
            height: `${size * 0.25}px`,
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />
        
        {/* Shadow */}
        <div 
          className="absolute rounded-full opacity-40"
          style={{
            bottom: `${size * 0.1}px`,
            right: `${size * 0.15}px`,
            width: `${size * 0.4}px`,
            height: `${size * 0.35}px`,
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, transparent 70%)',
            filter: 'blur(2px)'
          }}
        />
      </div>
    </div>
  );
};

// REPLACE your existing RealisticComet component with this:
const RealisticComet = ({ position, size = 60, speed = 'normal' }) => {
  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow': return '15s';
      case 'fast': return '6s';
      default: return '10s';
    }
  };

  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        ...position,
        animation: `cometTrail ${getAnimationDuration()} linear infinite`,
        filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.6))'
      }}
    >
      {/* Main Comet Head with realistic glow */}
      <div 
        className="relative"
        style={{
          width: `${size * 0.4}px`,
          height: `${size * 0.4}px`
        }}
      >
        {/* Outer glow halo */}
        <div 
          className="absolute rounded-full"
          style={{
            width: `${size * 0.6}px`,
            height: `${size * 0.6}px`,
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,197,253,0.2) 40%, transparent 80%)',
            top: `-${size * 0.1}px`,
            left: `-${size * 0.1}px`,
            filter: 'blur(4px)',
            animation: 'pulseGlow 2s ease-in-out infinite'
          }}
        />
        
        {/* Core with ice-like appearance */}
        <div 
          className="absolute rounded-full"
          style={{
            width: `${size * 0.25}px`,
            height: `${size * 0.25}px`,
            background: `
              radial-gradient(circle at 30% 30%, 
                #ffffff 0%, 
                #e0f2fe 20%, 
                #81d4fa 40%, 
                #29b6f6 60%, 
                #0277bd 80%, 
                #01579b 100%
              )
            `,
            top: `${size * 0.075}px`,
            left: `${size * 0.075}px`,
            boxShadow: `
              inset 0 0 ${size * 0.1}px rgba(255,255,255,0.8),
              0 0 ${size * 0.4}px rgba(59,130,246,0.8),
              0 0 ${size * 0.8}px rgba(29,78,216,0.4)
            `,
            animation: 'starTwinkle 1.5s ease-in-out infinite'
          }}
        />
        
        {/* Surface ice crystals effect */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-60"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${size * (0.1 + Math.random() * 0.2)}px`,
              top: `${size * (0.1 + Math.random() * 0.2)}px`,
              animation: `starTwinkle ${1 + Math.random()}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      {/* Main Ion Tail - Blue/White */}
      <div 
        className="absolute"
        style={{
          left: `-${size * 1.5}px`,
          top: `-${size * 0.05}px`,
          width: `${size * 2}px`,
          height: `${size * 0.5}px`,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(59,130,246,0.9) 25%,
              rgba(147,197,253,0.8) 45%,
              rgba(219,234,254,0.6) 65%,
              rgba(239,246,255,0.4) 85%,
              transparent 100%
            )
          `,
          filter: 'blur(1px)',
          clipPath: 'polygon(0% 50%, 100% 0%, 95% 50%, 100% 100%)',
          animation: 'tailFlicker 0.8s ease-in-out infinite alternate'
        }}
      />
      
      {/* Secondary Dust Tail - Golden */}
      <div 
        className="absolute"
        style={{
          left: `-${size * 2}px`,
          top: `${size * 0.1}px`,
          width: `${size * 2.5}px`,
          height: `${size * 0.3}px`,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(251,191,36,0.6) 30%,
              rgba(245,158,11,0.5) 50%,
              rgba(217,119,6,0.4) 70%,
              rgba(180,83,9,0.2) 90%,
              transparent 100%
            )
          `,
          filter: 'blur(1.5px)',
          clipPath: 'polygon(0% 50%, 100% 15%, 95% 50%, 100% 85%)',
          animation: 'tailFlicker 1.2s ease-in-out infinite alternate',
          animationDelay: '0.3s'
        }}
      />
      
      {/* Sparkling particles in tail */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 1.5}px`,
            height: `${1 + Math.random() * 1.5}px`,
            left: `-${size * (0.3 + i * 0.12)}px`,
            top: `${size * (0.15 + (i % 4) * 0.08)}px`,
            background: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#fbbf24' : '#ffffff',
            animation: `starTwinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.15}s`,
            boxShadow: `0 0 4px ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#f59e0b' : '#ffffff'}`
          }}
        />
      ))}
      
      {/* Coma (gas envelope) */}
      <div 
        className="absolute rounded-full"
        style={{
          width: `${size * 0.8}px`,
          height: `${size * 0.8}px`,
          background: 'radial-gradient(circle, rgba(147,197,253,0.3) 0%, rgba(59,130,246,0.1) 50%, transparent 100%)',
          top: `-${size * 0.2}px`,
          left: `-${size * 0.2}px`,
          filter: 'blur(3px)',
          animation: 'pulseGlow 3s ease-in-out infinite'
        }}
      />
    </div>
  );
};

// REPLACE your existing SpaceMeteor component with this:
const SpaceMeteor = ({ position, size = 40, speed = 'fast', direction = 'diagonal' }) => {
  const getTrajectory = () => {
    switch (direction) {
      case 'horizontal': return 'meteorHorizontal';
      case 'vertical': return 'meteorVertical';
      default: return 'meteorDiagonal';
    }
  };

  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow': return '4s';
      case 'normal': return '2.5s';
      default: return '1.8s';
    }
  };

  return (
    <div 
      className="absolute pointer-events-none"
      style={{
        ...position,
        animation: `${getTrajectory()} ${getAnimationDuration()} linear infinite`,
        filter: 'drop-shadow(0 0 6px rgba(245,158,11,0.8))'
      }}
    >
      {/* Meteor head with realistic burning rock appearance */}
      <div 
        className="relative"
        style={{
          width: `${size * 0.3}px`,
          height: `${size * 0.3}px`
        }}
      >
        {/* Outer plasma envelope */}
        <div 
          className="absolute rounded-full"
          style={{
            width: `${size * 0.4}px`,
            height: `${size * 0.4}px`,
            background: `
              radial-gradient(circle at 40% 40%, 
                rgba(255,255,255,0.9) 0%,
                rgba(251,191,36,0.8) 20%,
                rgba(245,158,11,0.6) 40%,
                rgba(220,38,38,0.4) 70%,
                transparent 100%
              )
            `,
            top: `-${size * 0.05}px`,
            left: `-${size * 0.05}px`,
            filter: 'blur(1px)',
            animation: 'meteorPulse 0.15s ease-in-out infinite alternate'
          }}
        />
        
        {/* Core rocky meteor */}
        <div 
          className="absolute rounded-full"
          style={{
            width: `${size * 0.25}px`,
            height: `${size * 0.25}px`,
            background: `
              radial-gradient(circle at 30% 30%, 
                #fbbf24 0%, 
                #f59e0b 25%, 
                #dc2626 50%, 
                #991b1b 75%, 
                #1f2937 100%
              )
            `,
            top: `${size * 0.025}px`,
            left: `${size * 0.025}px`,
            boxShadow: `
              inset 0 0 ${size * 0.08}px rgba(0,0,0,0.6),
              0 0 ${size * 0.4}px rgba(251,191,36,0.8),
              0 0 ${size * 0.8}px rgba(220,38,38,0.6)
            `
          }}
        />
        
        {/* Molten spots on surface */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${size * (0.05 + Math.random() * 0.15)}px`,
              top: `${size * (0.05 + Math.random() * 0.15)}px`,
              background: '#fbbf24',
              animation: `starTwinkle ${0.5 + Math.random() * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: '0 0 3px #f59e0b'
            }}
          />
        ))}
      </div>
      
      {/* Main Fire Trail */}
      <div 
        className="absolute"
        style={{
          left: `-${size * 1.2}px`,
          top: `-${size * 0.08}px`,
          width: `${size * 1.5}px`,
          height: `${size * 0.4}px`,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(220,38,38,0.95) 15%,
              rgba(245,158,11,0.9) 35%,
              rgba(251,191,36,0.8) 55%,
              rgba(255,255,255,0.6) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(0.8px)',
          clipPath: 'polygon(0% 50%, 100% 5%, 95% 50%, 100% 95%)',
          animation: 'fireTrailFlicker 0.12s ease-in-out infinite alternate'
        }}
      />
      
      {/* Secondary flame layer */}
      <div 
        className="absolute"
        style={{
          left: `-${size * 0.9}px`,
          top: `-${size * 0.05}px`,
          width: `${size * 1.2}px`,
          height: `${size * 0.3}px`,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(239,68,68,0.8) 20%,
              rgba(251,146,60,0.7) 45%,
              rgba(252,211,77,0.5) 70%,
              transparent 100%
            )
          `,
          filter: 'blur(1.2px)',
          clipPath: 'polygon(0% 50%, 100% 20%, 90% 50%, 100% 80%)',
          animation: 'fireTrailFlicker 0.18s ease-in-out infinite alternate',
          animationDelay: '0.06s'
        }}
      />
      
      {/* Hot sparks and debris */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `-${size * (0.15 + i * 0.08)}px`,
            top: `${size * (0.08 + (i % 3) * 0.08)}px`,
            background: i % 3 === 0 ? '#dc2626' : i % 3 === 1 ? '#f59e0b' : '#fbbf24',
            animation: `sparkTrail ${0.3 + Math.random() * 0.4}s ease-out infinite`,
            animationDelay: `${i * 0.05}s`,
            boxShadow: `0 0 3px ${i % 3 === 0 ? '#dc2626' : i % 3 === 1 ? '#f59e0b' : '#fbbf24'}`
          }}
        />
      ))}
      
      {/* Plasma trail glow */}
      <div 
        className="absolute"
        style={{
          left: `-${size * 1.4}px`,
          top: `-${size * 0.12}px`,
          width: `${size * 1.8}px`,
          height: `${size * 0.5}px`,
          background: `
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(220,38,38,0.3) 25%,
              rgba(245,158,11,0.2) 50%,
              rgba(251,191,36,0.1) 75%,
              transparent 100%
            )
          `,
          filter: 'blur(3px)',
          clipPath: 'polygon(0% 50%, 100% 0%, 90% 50%, 100% 100%)',
          animation: 'pulseGlow 0.4s ease-in-out infinite alternate'
        }}
      />
    </div>
  );
};

const LaunchPad = () => {
  return (
    <div 
      className="absolute z-10" 
      style={{ 
        bottom: '20px', // Fixed at bottom with some space
        left: '10px',
        transform: 'none',
        transition: 'none',
        willChange: 'auto'
      }}
    >
      <svg width="60" height="30" viewBox="0 0 60 30" className="drop-shadow-xl">
        {/* Main Launch Platform */}
        <rect x="5" y="20" width="50" height="10" fill="url(#padGradient)" rx="2" />
        <rect x="0" y="25" width="60" height="5" fill="#1f2937" rx="1" />
        
        {/* Central Rocket Support */}
        <rect x="25" y="15" width="10" height="5" fill="#4b5563" />
        <rect x="27" y="10" width="6" height="5" fill="#6b7280" />
        
        {/* Support Pillars */}
        <rect x="15" y="12" width="2" height="18" fill="#374151" />
        <rect x="43" y="12" width="2" height="18" fill="#374151" />
        
        {/* Platform Details */}
        <circle cx="12" cy="25" r="1.5" fill="#6b7280" />
        <circle cx="48" cy="25" r="1.5" fill="#6b7280" />
        <rect x="20" y="22" width="20" height="2" fill="#9ca3af" />
        
        <defs>
          <linearGradient id="padGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" />
            <stop offset="100%" stopColor="#374151" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const RealisticSmoke = ({ intensity = 1, isLaunching = false }) => {
  const smokeParticles = 15;
  
  return (
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none">
      {[...Array(smokeParticles)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
            backgroundColor: `rgba(203, 213, 225, ${0.2 + Math.random() * 0.3})`,
            left: `${(i - smokeParticles/2) * 6 + Math.random() * 15}px`,
            animation: `smokeRise ${1.5 + Math.random() * 2}s ease-out infinite ${Math.random() * 1.5}s`,
            filter: 'blur(1.5px)',
            transform: `scale(${intensity * (0.8 + Math.random() * 0.4)})`,
          }}
        />
      ))}
      
      {isLaunching && [...Array(12)].map((_, i) => (
        <div
          key={`launch-smoke-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${6 + Math.random() * 12}px`,
            height: `${6 + Math.random() * 12}px`,
            backgroundColor: `rgba(156, 163, 175, ${0.3 + Math.random() * 0.2})`,
            left: `${(i - 6) * 8 + Math.random() * 20}px`,
            animation: `launchSmoke ${1 + Math.random() * 1.5}s ease-out infinite ${Math.random() * 0.8}s`,
            filter: 'blur(2px)',
          }}
        />
      ))}
    </div>
  );
};

const EnhancedRocket = ({ isAnimating, showFlames, position, isLaunching, showSmoke }) => {
  const getRocketStyle = () => {
    const TIMELINE_SPACING = 80;
    
    if (position === 'launch') {
      return {
        bottom: '50px', // Positioned just above the launch pad (40px pad + 30px gap)
        left: '10px',
        transform: 'scale(1.2)',
        transition: 'none',
        opacity: 1,
        position: 'absolute',
      };
    }
    
    if (position === 'exit') {
      return {
        bottom: '50px',
        left: '10px',
        transform: 'translateY(-200vh) scale(0.6) rotate(15deg)',
        transition: 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: 0,
      };
    }
    
    if (typeof position === 'number') {
      // Calculate position from bottom (since timeline grows upward)
      const bottomOffset = (timeline.length - 1 - position) * TIMELINE_SPACING + 50;
      return {
        bottom: `${bottomOffset}px`,
        left: '10px',
        transform: 'scale(1.2)',
        transition: 'bottom 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        opacity: 1,
      };
    }
    
    return {
      bottom: '50px',
      left: '10px',
      transform: 'scale(1.2)',
      transition: 'none',
      opacity: 1,
    };
  };

  return (
    <div className="absolute left-0 z-30" style={getRocketStyle()}>
      <div className="relative">
        {/* Enhanced Rocket Body */}
        <div 
          className="relative z-10"
          style={{
            animation: isAnimating && !isLaunching ? 'rocketHover 2s ease-in-out infinite' : 
                      isLaunching ? 'rocketLaunch 0.8s ease-out infinite' : 'none',
            filter: 'drop-shadow(0 8px 16px rgba(147, 51, 234, 0.6))'
          }}
        >
          <svg width="60" height="100" viewBox="0 0 60 100" className="drop-shadow-2xl">
            {/* Rocket Shadow for depth */}
            <path
              d="M31 9 L43 29 L43 73 L37 81 L25 81 L19 73 L19 29 Z"
              fill="url(#shadowGradient)"
              opacity="0.4"
              transform="translate(1,1)"
            />
            
            {/* Main Rocket Body - Cylindrical with realistic proportions */}
            <path
              d="M30 8 L41 26 L41 70 L35 78 L25 78 L19 70 L19 26 Z"
              fill="url(#bodyMetalGradient)"
              stroke="url(#bodyStroke)"
              strokeWidth="0.8"
            />
            
            {/* Body Panels - Realistic segmentation */}
            <rect x="19" y="28" width="22" height="1" fill="url(#panelLine)" />
            <rect x="19" y="35" width="22" height="1" fill="url(#panelLine)" />
            <rect x="19" y="42" width="22" height="1" fill="url(#panelLine)" />
            <rect x="19" y="49" width="22" height="1" fill="url(#panelLine)" />
            <rect x="19" y="56" width="22" height="1" fill="url(#panelLine)" />
            <rect x="19" y="63" width="22" height="1" fill="url(#panelLine)" />
            
            {/* Vertical Panel Lines */}
            <rect x="25" y="26" width="1" height="44" fill="url(#panelLine)" opacity="0.6" />
            <rect x="34" y="26" width="1" height="44" fill="url(#panelLine)" opacity="0.6" />
            
            {/* Left side highlight - sun reflection */}
            <path
              d="M19 26 L19 70 L25 78 L25 26 Z"
              fill="url(#leftHighlight)"
              opacity="0.8"
            />
            
            {/* Right side shadow */}
            <path
              d="M35 26 L35 78 L41 70 L41 26 Z"
              fill="url(#rightShadow)"
              opacity="0.6"
            />
            
            {/* Realistic Nose Cone - Sharp and aerodynamic */}
            <path
              d="M30 5 L19 26 L41 26 Z"
              fill="url(#noseMetalGradient)"
              stroke="url(#noseStroke)"
              strokeWidth="0.6"
            />
            
            {/* Nose cone panels */}
            <path d="M30 5 L24 15 L36 15 Z" fill="url(#nosePanelGradient)" opacity="0.7" />
            <path d="M30 5 L27 20 L33 20 Z" fill="url(#noseCenterPanel)" opacity="0.5" />
            
            {/* Nose Highlight - sharp metallic reflection */}
            <path
              d="M30 5 L24 18 L19 26 L26 22 Z"
              fill="url(#noseSharpHighlight)"
              opacity="0.9"
            />
            
            {/* Command Module Window - More realistic with depth */}
            <ellipse cx="30" cy="36" rx="8" ry="7" fill="url(#windowFrame)" />
            <ellipse cx="30" cy="36" rx="6.5" ry="5.5" fill="url(#windowOuter)" />
            <ellipse cx="30" cy="36" rx="5" ry="4" fill="url(#windowInner)" />
            <ellipse cx="30" cy="36" rx="3.5" ry="2.5" fill="url(#windowCore)" />
            
            {/* Window reflections and details */}
            <ellipse cx="27" cy="33" rx="2" ry="1.5" fill="url(#windowReflection)" opacity="0.8" />
            <ellipse cx="32" cy="38" rx="1" ry="0.8" fill="rgba(255,255,255,0.6)" />
            
            {/* Window frame bolts */}
            <circle cx="24" cy="30" r="0.8" fill="url(#boltGradient)" />
            <circle cx="36" cy="30" r="0.8" fill="url(#boltGradient)" />
            <circle cx="24" cy="42" r="0.8" fill="url(#boltGradient)" />
            <circle cx="36" cy="42" r="0.8" fill="url(#boltGradient)" />
            
            {/* Side Observation Windows - Smaller and more realistic */}
            <ellipse cx="23" cy="48" rx="2.5" ry="2" fill="url(#sideWindowFrame)" />
            <ellipse cx="23" cy="48" rx="1.8" ry="1.3" fill="url(#sideWindowGlass)" />
            <ellipse cx="37" cy="48" rx="2.5" ry="2" fill="url(#sideWindowFrame)" />
            <ellipse cx="37" cy="48" rx="1.8" ry="1.3" fill="url(#sideWindowGlass)" />
            
            {/* Side window reflections */}
            <ellipse cx="22" cy="47" rx="0.8" ry="0.5" fill="rgba(255,255,255,0.7)" />
            <ellipse cx="38" cy="47" rx="0.8" ry="0.5" fill="rgba(255,255,255,0.7)" />
            
            {/* Realistic Body Panels with rivets and details */}
            <g opacity="0.8">
              <rect x="20" y="52" width="20" height="3" fill="url(#panelDepth)" rx="1.5" />
              <rect x="20" y="57" width="20" height="3" fill="url(#panelDepth)" rx="1.5" />
              <rect x="20" y="62" width="20" height="3" fill="url(#panelDepth)" rx="1.5" />
            </g>
            
            {/* Panel rivets */}
            {[52, 57, 62].map(y => (
              [22, 26, 30, 34, 38].map(x => (
                <circle key={`${x}-${y}`} cx={x} cy={y+1.5} r="0.4" fill="url(#rivetGradient)" />
              ))
            ))}
            
            {/* Realistic Fins - Aerodynamic swept design */}
            <path 
              d="M19 62 L8 80 L12 82 L19 75 L19 68 Z" 
              fill="url(#finMetalGradient)" 
              stroke="url(#finStroke)" 
              strokeWidth="0.5" 
            />
            <path 
              d="M41 62 L52 80 L48 82 L41 75 L41 68 Z" 
              fill="url(#finMetalGradient)" 
              stroke="url(#finStroke)" 
              strokeWidth="0.5" 
            />
            
            {/* Fin details and highlights */}
            <path d="M19 62 L14 70 L19 68 Z" fill="url(#finHighlight)" opacity="0.7" />
            <path d="M41 62 L46 70 L41 68 Z" fill="url(#finHighlight)" opacity="0.7" />
            
            {/* Fin panel lines */}
            <path d="M19 65 L15 72" stroke="url(#finPanelLine)" strokeWidth="0.3" />
            <path d="M41 65 L45 72" stroke="url(#finPanelLine)" strokeWidth="0.3" />
            
            {/* Advanced Engine Section */}
            <path 
              d="M22 78 L22 86 L20 90 L40 90 L38 86 L38 78 Z" 
              fill="url(#engineHousingGradient)" 
              stroke="url(#engineStroke)"
              strokeWidth="0.6"
            />
            
            {/* Engine housing top */}
            <ellipse cx="30" cy="78" rx="8" ry="2.5" fill="url(#engineTopGradient)" />
            
            {/* Main Engine Bells - Three engines like real rockets */}
            <circle cx="25" cy="87" r="3.5" fill="url(#engineBellGradient)" stroke="url(#engineBellStroke)" strokeWidth="0.8" />
            <circle cx="35" cy="87" r="3.5" fill="url(#engineBellGradient)" stroke="url(#engineBellStroke)" strokeWidth="0.8" />
            <circle cx="30" cy="83" r="3" fill="url(#engineBellGradient)" stroke="url(#engineBellStroke)" strokeWidth="0.8" />
            
            {/* Engine bell interiors */}
            <circle cx="25" cy="87" r="2.2" fill="url(#engineInterior)" />
            <circle cx="35" cy="87" r="2.2" fill="url(#engineInterior)" />
            <circle cx="30" cy="83" r="1.8" fill="url(#engineInterior)" />
            
            {/* Engine nozzle details */}
            <circle cx="25" cy="87" r="1.2" fill="url(#nozzleCore)" />
            <circle cx="35" cy="87" r="1.2" fill="url(#nozzleCore)" />
            <circle cx="30" cy="83" r="1" fill="url(#nozzleCore)" />
            
            {/* Communication Array */}
            <rect x="29.5" y="20" width="1" height="12" fill="url(#antennaGradient)" />
            <circle cx="30" cy="18" r="2" fill="url(#dishGradient)" />
            <circle cx="30" cy="18" r="1.2" fill="url(#dishCenter)" />
            
            {/* Additional realistic details */}
            <rect x="28" y="25" width="4" height="1" fill="url(#detailLine)" />
            <rect x="21" y="45" width="2" height="6" fill="url(#hatchGradient)" rx="1" />
            <rect x="37" y="45" width="2" height="6" fill="url(#hatchGradient)" rx="1" />
            
            <defs>
              {/* Realistic Metal Gradients */}
              <linearGradient id="bodyMetalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="20%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="80%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
              
              <linearGradient id="leftHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              
              <linearGradient id="rightShadow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.4)" />
              </linearGradient>
              
              <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
              
              <linearGradient id="bodyStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
              
              <linearGradient id="noseMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f9fafb" />
                <stop offset="30%" stopColor="#f3f4f6" />
                <stop offset="70%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
              
              <linearGradient id="noseSharpHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,1)" />
                <stop offset="70%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </linearGradient>
              
              <linearGradient id="nosePanelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(229,231,235,0.8)" />
                <stop offset="100%" stopColor="rgba(209,213,219,0.6)" />
              </linearGradient>
              
              <linearGradient id="noseCenterPanel" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                <stop offset="100%" stopColor="rgba(243,244,246,0.5)" />
              </linearGradient>
              
              <linearGradient id="noseStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
              
              {/* Advanced Window Gradients */}
              <radialGradient id="windowFrame" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="100%" stopColor="#1f2937" />
              </radialGradient>
              
              <radialGradient id="windowOuter" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="70%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#1e293b" />
              </radialGradient>
              
              <radialGradient id="windowInner" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </radialGradient>
              
              <radialGradient id="windowCore" cx="30%" cy="30%" r="50%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="70%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </radialGradient>
              
              <radialGradient id="windowReflection" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </radialGradient>
              
              {/* Side Windows */}
              <radialGradient id="sideWindowFrame" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </radialGradient>
              
              <radialGradient id="sideWindowGlass" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#1e40af" />
              </radialGradient>
              
              {/* Engine Gradients */}
              <linearGradient id="engineHousingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="50%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              
              <radialGradient id="engineTopGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </radialGradient>
              
              <radialGradient id="engineBellGradient" cx="30%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="70%" stopColor="#374151" />
                <stop offset="100%" stopColor="#1f2937" />
              </radialGradient>
              
              <radialGradient id="engineInterior" cx="50%" cy="50%" r="70%">
                <stop offset="0%" stopColor="#111827" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              
              <radialGradient id="nozzleCore" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="100%" stopColor="#111827" />
              </radialGradient>
              
              {/* Fin Gradients */}
              <linearGradient id="finMetalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
              
              <linearGradient id="finHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              
              {/* Detail Gradients */}
              <linearGradient id="panelDepth" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="50%" stopColor="rgba(0,0,0,0.05)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              
              <radialGradient id="rivetGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#4b5563" />
              </radialGradient>
              
              <radialGradient id="boltGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#6b7280" />
              </radialGradient>
              
              {/* Utility Gradients */}
              <linearGradient id="panelLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
                <stop offset="50%" stopColor="rgba(0,0,0,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
              </linearGradient>
              
              <linearGradient id="finStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
              
              <linearGradient id="finPanelLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
              </linearGradient>
              
              <linearGradient id="engineStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
              
              <linearGradient id="engineBellStroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#1f2937" />
              </linearGradient>
              
              <linearGradient id="antennaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="100%" stopColor="#6b7280" />
              </linearGradient>
              
              <radialGradient id="dishGradient" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#9ca3af" />
              </radialGradient>
              
              <radialGradient id="dishCenter" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#6b7280" />
                <stop offset="100%" stopColor="#374151" />
              </radialGradient>
              
              <linearGradient id="detailLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(0,0,0,0.3)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              </linearGradient>
              
              <linearGradient id="hatchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Enhanced Realistic Flames */}
        {showFlames && (
  <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
    <div style={{ 
      animation: isLaunching ? 'launchFlames 0.15s ease-in-out infinite' : 'hoverFlames 0.6s ease-in-out infinite',
    }}>
      {/* Main Engine Flame */}
      <svg width="32" height="48" viewBox="0 0 32 48" className="drop-shadow-2xl">
        <path
          d="M16 0 Q20 8 18 16 Q22 24 16 32 Q10 24 14 16 Q12 8 16 0 Z"
          fill="url(#mainFlameGradient)"
          opacity="0.95"
        />
        <path
          d="M16 2 Q18 6 17 12 Q19 18 16 24 Q13 18 15 12 Q14 6 16 2 Z"
          fill="url(#innerFlameGradient)"
        />
        <ellipse cx="16" cy="6" rx="2" ry="4" fill="url(#coreFlameGradient)" />
        
        <defs>
          <radialGradient id="mainFlameGradient" cx="50%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="40%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="80%" stopColor="#ea580c" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.4" />
          </radialGradient>
          <radialGradient id="innerFlameGradient" cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="1" />
            <stop offset="60%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="coreFlameGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    
    {/* Side Engine Flames */}
    <div className="absolute top-6 -left-4" 
         style={{ animation: 'sideFlames 0.25s ease-in-out infinite' }}>
      <svg width="12" height="24" viewBox="0 0 12 24">
        <path d="M6 0 Q8 4 7 8 Q9 12 6 16 Q3 12 5 8 Q4 4 6 0 Z" 
              fill="url(#sideFlameGradient)" opacity="0.8" />
      </svg>
    </div>
    <div className="absolute top-6 -right-4" 
         style={{ animation: 'sideFlames 0.25s ease-in-out infinite 0.12s' }}>
      <svg width="12" height="24" viewBox="0 0 12 24">
        <path d="M6 0 Q8 4 7 8 Q9 12 6 16 Q3 12 5 8 Q4 4 6 0 Z" 
              fill="url(#sideFlameGradient)" opacity="0.8" />
        <defs>
          <radialGradient id="sideFlameGradient" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="70%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    </div>
    
    {/* Flame Particles */}
    {isLaunching && [...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
          backgroundColor: i % 2 === 0 ? '#f97316' : '#fbbf24',
          left: `${(i - 4) * 6 + Math.random() * 12}px`,
          top: `${20 + Math.random() * 10}px`,
          animation: `flameParticles ${0.4 + Math.random() * 0.6}s ease-out infinite ${i * 0.08}s`,
          filter: 'blur(0.5px)',
        }}
      />
    ))}
  </div>
)}
        {/* Realistic Smoke Effect */}
        {showSmoke && <RealisticSmoke intensity={isLaunching ? 1.5 : 1} isLaunching={isLaunching} />}
      </div>
    </div>
  );
};




export default function KeerthiProfile() {
  const [currentStep, setCurrentStep] = useState(null);
  const [rocketPosition, setRocketPosition] = useState('launch');
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visibleLineHeight, setVisibleLineHeight] = useState(0);
  const [scrollContainer, setScrollContainer] = useState(null);
const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
  // Initial scroll to bottom
  if (scrollContainer) {
    scrollContainer.scrollTo({
      top: scrollContainer.scrollHeight,
      behavior: 'smooth'
    });
    
    // Start animation after scroll completes
    setTimeout(() => {
      setAnimationStarted(true);
      startRocketAnimation();
    }, 800);
  }
}, [scrollContainer]);

  // Replace the existing startRocketAnimation function with this optimized version:

// Replace the existing startRocketAnimation function with this optimized version:

const startRocketAnimation = async () => {
  setIsLaunching(true);
  await new Promise(resolve => setTimeout(resolve, 100));
  setIsLaunching(false);

  for (let i = timeline.length - 1; i >= 0; i--) {
    setRocketPosition(i);
    
    // Calculate scroll position based on timeline item
    const scrollPos = (timeline.length - 1 - i) * 120; // Adjust multiplier as needed
    
    if (scrollContainer) {
      setIsScrolling(true);
      scrollContainer.scrollTo({
        top: scrollPos,
        behavior: 'smooth'
      });
      await new Promise(resolve => {
        setTimeout(() => {
          setIsScrolling(false);
          resolve();
        }, 500);
      });
    }
    
    setCurrentStep(i);
    const currentPosition = (timeline.length - 1 - i) * 80;
    const bottomPosition = (timeline.length - 1) * 80;
    const lineHeight = currentPosition + 40;
    setVisibleLineHeight(lineHeight);
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  await new Promise(resolve => setTimeout(resolve, 300));
  setShowTimeline(true);
  setAnimationComplete(true);
  setVisibleLineHeight((timeline.length - 1) * 80 + 275);
  
  await new Promise(resolve => setTimeout(resolve, 500));
  setRocketPosition('exit');
};
  return (
    <>
      <style jsx>{`

      /* ADD these animations to your existing <style jsx> block */
.image-container {
  position: relative;
  z-index: 30;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  contain: layout paint;
}

.timeline-container {
  position: relative;
  z-index: 20;
  contain: content;
}

.space-background {
  z-index: 10;
  contain: strict;
  overflow: hidden;
}
@keyframes cometTrail {
  0% { 
    transform: translate(-100vw, 100vh) rotate(-45deg); 
    opacity: 0; 
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translate(100vw, -100vh) rotate(-45deg); 
    opacity: 0; 
  }
}

@keyframes meteorDiagonal {
  0% { 
    transform: translate(100vw, -50px) rotate(45deg); 
    opacity: 0; 
  }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { 
    transform: translate(-100px, 100vh) rotate(45deg); 
    opacity: 0; 
  }
}

@keyframes meteorHorizontal {
  0% { 
    transform: translateX(100vw); 
    opacity: 0; 
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateX(-100px); 
    opacity: 0; 
  }
}

@keyframes meteorVertical {
  0% { 
    transform: translateY(-100px); 
    opacity: 0; 
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(100vh); 
    opacity: 0; 
  }
}

@keyframes sparkleTrail {
  0% { 
    transform: scale(1) translateY(0); 
    opacity: 1; 
  }
  50% { 
    transform: scale(0.5) translateY(5px); 
    opacity: 0.7; 
  }
  100% { 
    transform: scale(0.2) translateY(10px); 
    opacity: 0; 
  }
}

@keyframes planetFloat {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  33% { 
    transform: translateY(-10px) rotate(120deg); 
  }
  66% { 
    transform: translateY(5px) rotate(240deg); 
  }
}

@keyframes saturnRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
      .scroll-container {
    scroll-behavior: smooth;
    overflow-anchor: none;
  }
  
  /* Prevent jank during animations */
  * {
    scroll-behavior: smooth;
  }
        @keyframes rocketHover {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(1deg); }
          75% { transform: translateY(8px) rotate(-1deg); }
        }
        
        @keyframes rocketLaunch {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-12px) rotate(3deg) scale(1.1); }
          50% { transform: translateY(6px) rotate(-3deg) scale(0.95); }
          75% { transform: translateY(-6px) rotate(1deg) scale(1.05); }
        }
        
        @keyframes hoverFlames {
  0%, 100% { transform: scaleY(1) scaleX(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scaleY(1.2) scaleX(0.9) rotate(1deg); opacity: 0.9; }
  50% { transform: scaleY(0.9) scaleX(1.1) rotate(-1deg); opacity: 1; }
  75% { transform: scaleY(1.1) scaleX(0.95) rotate(0.5deg); opacity: 0.85; }
}

@keyframes launchFlames {
  0%, 100% { transform: scaleY(1.8) scaleX(1) rotate(0deg); opacity: 1; }
  20% { transform: scaleY(2.4) scaleX(0.8) rotate(2deg); opacity: 0.9; }
  40% { transform: scaleY(2.0) scaleX(1.2) rotate(-1deg); opacity: 1; }
  60% { transform: scaleY(2.6) scaleX(0.9) rotate(1deg); opacity: 0.95; }
  80% { transform: scaleY(2.2) scaleX(1.1) rotate(-2deg); opacity: 0.9; }
}

@keyframes sideFlames {
  0%, 100% { transform: scale(0.6) rotate(0deg); opacity: 0.6; }
  33% { transform: scale(1.2) rotate(3deg); opacity: 0.9; }
  66% { transform: scale(0.8) rotate(-2deg); opacity: 0.7; }
}

// ADD this new animation:
@keyframes flameParticles {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  50% { transform: translateY(15px) scale(0.7); opacity: 0.7; }
  100% { transform: translateY(30px) scale(0.3); opacity: 0; }
}
        
        @keyframes sideFlames {
          0%, 100% { transform: scale(0.5); opacity: 0.6; }
          50% { transform: scale(1.6); opacity: 1; }
        }
        
        @keyframes exhaustParticles {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          50% { transform: translateY(20px) scale(0.6); opacity: 0.6; }
          100% { transform: translateY(40px) scale(0.2); opacity: 0; }
        }
        
        @keyframes smokeRise {
  0% { transform: translateY(0) scale(0.3) rotate(0deg); opacity: 0.6; }
  50% { transform: translateY(-25px) scale(1) rotate(90deg); opacity: 0.3; }
  100% { transform: translateY(-50px) scale(1.8) rotate(180deg); opacity: 0; }
}

@keyframes launchSmoke {
  0% { transform: translateY(0) scale(0.5) rotate(0deg); opacity: 0.5; }
  50% { transform: translateY(-35px) scale(1.4) rotate(120deg); opacity: 0.2; }
  100% { transform: translateY(-70px) scale(2.2) rotate(240deg); opacity: 0; }
}
        
        @keyframes achievementGlow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(147, 51, 234, 0.1); }
        }
        
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(50px) scale(0.9); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        .timeline-item-enter {
          animation: slideInFromRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .timeline-dot-active {
          animation: achievementGlow 2s ease-out;
          background: radial-gradient(circle, #a855f7, #7c3aed);
        }
        
        .star-particle {
          animation: starTwinkle 4s ease-in-out infinite;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(165,102,255,0.8), 0 0 40px rgba(165,102,255,0.4);
        }
        
        .pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>

<div 
  className="min-h-screen bg-black text-white px-4 py-10 font-sans relative overflow-hidden"
  ref={el => setScrollContainer(el)}
  style={{ isolation: 'isolate' }}
>        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Image Section - Always visible */}
          <div className="static md:sticky md:top-10 md:self-start flex flex-col items-start space-y-6 z-30">
  <button
    className="text-gray-300 hover:text-purple-400 transition-all duration-300 text-base cursor-pointer flex items-center gap-2 group mb-4"
    onClick={() => window.history.back()}
  >
    <span className="group-hover:-translate-x-1 transition-transform duration-300 text-lg">←</span>
    <span className="text-lg">Back to Home</span>
  </button>

            
<div className="relative w-full max-w-xs h-[331px] rounded-xl shadow-2xl overflow-hidden border border-purple-500/30 grou z-40">    <img 
      src={keerthiImg} 
      alt="Keerthi Varman" 
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
      <div className="glow-text text-white font-bold text-xl">Keerthi Varman</div>
      <div className="text-sm text-purple-200 mt-1 font-normal">Tech Visionary</div>
    </div>
  </div>
</div>
          {/* Right Column: Bio + Timeline */}
          <div className="md:col-span-2 relative z-20">
            <div>
              <h1 className="text-4xl font-bold text-purple-400 mb-2 glow-text">
                Keerthi Varman
              </h1>
              <h2 className="text-lg text-gray-300 mb-6">
                Founder & Visionary, SIM Group
              </h2>
              <p className="text-base text-gray-200 leading-relaxed mb-8">
                A trailblazer of the tech frontier, Keerthi Varman has carved a legacy that spans industries and imaginations. From co-founding SIM in 2009 to entering space tech and conceptual trading in 2025, his journey is marked not just by innovation—but by vision.
              </p>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Progressive Timeline Line - starts from 2009 dot */}
{/* Progressive Timeline Line - grows upward from 2009 dot */}
{visibleLineHeight > 0 && (
  <div 
    className="absolute left-9 w-1 bg-gradient-to-t from-purple-600 via-purple-500 to-purple-400 opacity-40 rounded-full transition-all duration-1000 ease-out" 
    style={{ 
      height: `${visibleLineHeight}px`,
      bottom: '50px', // Fixed at bottom
    }} 
  />
)}

{/* Progressive Timeline Glow Effect */}
{visibleLineHeight > 0 && (
  <div 
    className="absolute left-8 w-3 bg-gradient-to-t from-purple-600/20 via-purple-500/20 to-purple-400/20 blur-sm rounded-full transition-all duration-1000 ease-out" 
    style={{ 
      height: `${visibleLineHeight}px`,
      bottom: `${30}px`,
      transformOrigin: 'bottom'
    }} 
  />
)}

              {/* Launch Pad - Fixed at 2009 position */}
              {animationStarted && <LaunchPad />}

              {/* Enhanced Rocket */}
              {animationStarted && (
                <EnhancedRocket 
                  isAnimating={true} 
                  showFlames={true} 
                  position={rocketPosition}
                  isLaunching={isLaunching}
                  showSmoke={true}
                  style={{ zIndex: 15 }}
                />
              )}

              {/* Timeline Items - Show all after completion or current during animation */}
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-20 min-h-[60px] flex items-center"
                  >
                    {/* Timeline dot */}
                    {(showTimeline || (currentStep !== null && currentStep <= index)) && (
                      <div
                        className={`w-6 h-6 rounded-full absolute left-6 z-20 transition-all duration-1000 border-2 ${
                          (showTimeline || currentStep <= index) ? 
                            'timeline-dot-active scale-100 opacity-100 border-purple-300 pulse-glow' : 
                            'scale-75 opacity-40 bg-purple-800 border-purple-600'
                        }`}
                        style={{
                          boxShadow: (showTimeline || currentStep <= index) ? 
                            '0 0 0 12px rgba(147, 51, 234, 0.15), 0 0 30px rgba(147, 51, 234, 0.4)' : 
                            'none'
                        }}
                      />
                    )}

                    {/* Content */}
                    {(showTimeline || (currentStep !== null && currentStep <= index)) && (
                      <div className="timeline-item-enter bg-gradient-to-r from-purple-900/50 via-purple-800/30 to-transparent p-4 rounded-xl border border-purple-500/40 backdrop-blur-sm shadow-2xl">  
                        <h3 className="text-xl font-bold text-purple-300 mb-2 glow-text">
                          {item.year}
                        </h3>
                        <p className="text-gray-200 leading-relaxed text-base">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Background Effects */}
        

{/* Enhanced Background Effects */}
<div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
  {/* Beautiful Saturn - Large and prominent */}
  <RealisticSaturn 
    size={180} 
    opacity={0.6} 
    position={{ 
      top: '15%', 
      right: '10%',
      animation: 'saturnRotate 60s linear infinite'
    }} 
  />
  
  {/* Medium Gas Giant - Jupiter-like */}
  <SpacePlanet 
    size={120} 
    colors={['#f59e0b', '#dc2626', '#7c2d12']} 
    position={{ 
      top: '60%', 
      left: '5%',
      animation: 'planetFloat 8s ease-in-out infinite'
    }}
    opacity={0.5}
    type="gas"
  />
  
  {/* Ice Planet - Neptune-like */}
  <SpacePlanet 
    size={90} 
    colors={['#3b82f6', '#1e40af', '#1e3a8a']} 
    position={{ 
      top: '25%', 
      left: '15%',
      animation: 'planetFloat 12s ease-in-out infinite 2s'
    }}
    opacity={0.4}
    type="ice"
  />
  
  {/* Rocky Planet - Mars-like */}
  <SpacePlanet 
    size={70} 
    colors={['#dc2626', '#991b1b', '#7f1d1d']} 
    position={{ 
      bottom: '20%', 
      right: '25%',
      animation: 'planetFloat 10s ease-in-out infinite 4s'
    }}
    opacity={0.45}
    type="rocky"
  />
  
  {/* Small Gas Planet */}
  <SpacePlanet 
    size={60} 
    colors={['#10b981', '#059669', '#047857']} 
    position={{ 
      top: '45%', 
      right: '35%',
      animation: 'planetFloat 15s ease-in-out infinite 6s'
    }}
    opacity={0.3}
    type="gas"
  />
  
  {/* Realistic Comet */}
  <RealisticComet 
    position={{ 
      top: '10%', 
      left: '-5%' 
    }}
    size={80}
    speed="normal"
  />
  
  {/* Fast Meteor */}
  <SpaceMeteor 
    position={{ 
      top: '70%', 
      right: '-5%' 
    }}
    size={50}
    speed="fast"
    direction="diagonal"
  />
  
  {/* Slow Meteor - Horizontal */}
  <SpaceMeteor 
    position={{ 
      top: '40%', 
      left: '-10%' 
    }}
    size={35}
    speed="slow"
    direction="horizontal"
  />
  
  {/* Twinkling Stars - Enhanced */}
  {[...Array(80)].map((_, i) => (
    <div
      key={i}
      className="absolute bg-white rounded-full star-particle"
      style={{
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        opacity: 0.3 + Math.random() * 0.7,
        boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(255,255,255,0.8)`
      }}
    />
  ))}
  
  {/* Floating Orbs - Enhanced with colors */}
  {[...Array(15)].map((_, i) => {
    const colors = ['#a855f7', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
    const color = colors[i % colors.length];
    return (
      <div
        key={`orb-${i}`}
        className="absolute rounded-full blur-sm"
        style={{
          width: `${4 + Math.random() * 8}px`,
          height: `${4 + Math.random() * 8}px`,
          backgroundColor: `${color}30`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `starTwinkle ${4 + Math.random() * 6}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
          boxShadow: `0 0 ${8 + Math.random() * 12}px ${color}60`
        }}
      />
    );
  })}
  
  {/* Nebula-like background clouds */}
  {[...Array(6)].map((_, i) => (
    <div
      key={`nebula-${i}`}
      className="absolute rounded-full opacity-10 blur-3xl"
      style={{
        width: `${200 + Math.random() * 300}px`,
        height: `${200 + Math.random() * 300}px`,
        background: `radial-gradient(circle, 
          ${['#a855f7', '#3b82f6', '#10b981'][i % 3]} 0%, 
          transparent 70%
        )`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `starTwinkle ${20 + Math.random() * 10}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 10}s`
      }}
    />
  ))}
</div>
      </div>
    </>
  );
}