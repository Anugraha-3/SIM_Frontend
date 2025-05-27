// tailwind.config.js
import plugin from 'tailwindcss/plugin'; // ✅ Use ES module import

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        accent: ['Domine', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, #000000 0%, #0a0a23 100%)',
      },
      animation: {
        pulseShadow: 'pulseShadow 2s ease-in-out infinite',
        neonFlow: 'neonFlow 4s linear infinite',
        dashDraw: 'dashDraw var(--sped, 4s) linear infinite',
        glowFill: 'glowFill 2.5s ease-in-out infinite alternate',
        scroll_left: 'scroll_left 30s linear infinite',
      },
      keyframes: {
        pulseShadow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px #00bfff) drop-shadow(0 0 20px #0077ff)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 15px #33ccff) drop-shadow(0 0 30px #00ffff)',
          },
        },
        neonFlow: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '400%' },
        },
        dashDraw: {
          to: { strokeDashoffset: '0' },
        },
        glowFill: {
          '0%': { fill: 'rgba(0, 191, 255, 0.1)' },
          '100%': { fill: 'rgba(0, 191, 255, 0.3)' },
        },
        scroll_left: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.animation-paused': {
          animationPlayState: 'paused',
        },
        '.animation-running': {
          animationPlayState: 'running',
        },
      });
    }),
  ],
};
