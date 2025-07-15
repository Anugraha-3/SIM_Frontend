import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: ''
  });

  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.idea.trim()) newErrors.idea = 'Please share your idea';
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!validateForm()) {
      return;
    }
    
    setStatus('loading');

    // Send email to owner
    emailjs.send(
      'service_s1bn7iv',
      'template_5uajpqc',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        idea: formData.idea
      },
      'i8S1e0ZYSXyd1cM4C'
    )
    .then(() => {
      // Send confirmation email to user
      return emailjs.send(
        'service_s1bn7iv',
        'template_dpcn0cx',
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.idea
        },
        'i8S1e0ZYSXyd1cM4C'
      );
    })
    .then(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes starsMove {
          from { transform: translateX(0) translateY(0); }
          to { transform: translateX(-100px) translateY(-100px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-2deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.3); }
          50% { box-shadow: 0 0 40px rgba(168, 85, 247, 0.6); }
        }
        @keyframes success {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        @keyframes error {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        @keyframes typing {
          0%, 50% { border-color: rgba(168, 85, 247, 0.5); }
          100% { border-color: transparent; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-starsMove { animation: starsMove 300s linear infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-spin { animation: spin 1s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-success { animation: success 0.6s ease-out; }
        .animate-error { animation: error 0.5s ease-in-out; }
        .animate-typing { animation: typing 2s infinite; }
        .animate-slideInLeft { animation: slideInLeft 0.5s ease-out; }
        .animate-bounce { animation: bounce 1s; }
        
        .glassmorphism {
          background: rgba(0, 0, 0, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }
        
        .input-glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .input-glassmorphism:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        
        .input-glassmorphism:focus {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.1), 0 8px 32px rgba(168, 85, 247, 0.2);
          transform: translateY(-2px);
        }
        
        .input-error {
          border-color: rgba(239, 68, 68, 0.6);
          box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #ef4444, #a855f7, #3b82f6, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientMove 3s ease infinite;
        }
        
        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .gradient-button {
          background: linear-gradient(135deg, #ef4444, #a855f7, #3b82f6);
          background-size: 200% 200%;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: gradientMove 3s ease infinite;
        }
        
        .gradient-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .gradient-button:hover::before {
          left: 100%;
        }
        
        .gradient-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(168, 85, 247, 0.4);
        }
        
        .gradient-button:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 20px rgba(168, 85, 247, 0.3);
        }
        
        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.25rem;
          animation: slideInLeft 0.3s ease-out;
        }
        
        .field-group {
          position: relative;
          margin-bottom: 1rem;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(168, 85, 247, 0.6);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .loading-dots {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        
        .loading-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: currentColor;
          animation: loadingDot 1.4s ease-in-out infinite;
        }
        
        .loading-dot:nth-child(1) { animation-delay: 0s; }
        .loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .loading-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes loadingDot {
          0%, 80%, 100% { transform: scale(0.8); opacity: 0.5; }
          40% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
      
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn overflow-hidden font-sans">
        {/* Enhanced Stars Background */}
        <div className="absolute w-[300%] h-[300%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-20 animate-starsMove"></div>
        
        {/* Enhanced floating particles */}
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Modal */}
        <div className="relative w-[90%] max-w-lg p-8 glassmorphism rounded-2xl text-white shadow-[0_0_40px_rgba(168,85,247,0.3)] animate-slideUp animate-glow">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-90 hover:bg-white/10 rounded-full"
          >
            ✕
          </button>

          {status === 'loading' && (
            <div className="text-center py-12 text-gray-300 animate-fadeIn">
              <div className="relative w-16 h-16 mx-auto mb-6">
                <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-2 border-2 border-blue-500 border-b-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
              </div>
              <p className="text-lg font-medium mb-2">Sending your message</p>
              <div className="loading-dots text-purple-400">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center py-12 text-green-300 animate-fadeIn">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 animate-success flex items-center justify-center text-2xl">
                ✓
              </div>
              <p className="text-xl font-semibold mb-2">Success!</p>
              <p className="text-gray-300">Your message has been sent successfully</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-12 text-red-300 animate-fadeIn animate-error">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-2xl font-bold animate-bounce">
                !
              </div>
              <p className="text-xl font-semibold mb-2">Oops!</p>
              <p className="text-gray-300">Something went wrong. Please try again.</p>
            </div>
          )}

          {status === 'idle' && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold mb-3 gradient-text">
                Let's Connect
              </h2>
              <p className="text-gray-300 mb-8 text-lg">Tell us about your project and we'll get back to you soon.</p>
              
              <div className="space-y-6">
                <div className="field-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full input-glassmorphism text-white p-4 rounded-xl text-sm placeholder-gray-400 ${errors.name ? 'input-error animate-error' : ''}`}
                  />
                  {errors.name && <div className="error-text">{errors.name}</div>}
                </div>
                
                <div className="field-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full input-glassmorphism text-white p-4 rounded-xl text-sm placeholder-gray-400 ${errors.email ? 'input-error animate-error' : ''}`}
                  />
                  {errors.email && <div className="error-text">{errors.email}</div>}
                </div>
                
                <div className="field-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full input-glassmorphism text-white p-4 rounded-xl text-sm placeholder-gray-400 ${errors.phone ? 'input-error animate-error' : ''}`}
                  />
                  {errors.phone && <div className="error-text">{errors.phone}</div>}
                </div>
                
                <div className="field-group">
                  <textarea
                    name="idea"
                    placeholder="Tell us about your project or idea *"
                    rows="4"
                    value={formData.idea}
                    onChange={handleChange}
                    className={`w-full input-glassmorphism text-white p-4 rounded-xl text-sm placeholder-gray-400 resize-none ${errors.idea ? 'input-error animate-error' : ''}`}
                  />
                  {errors.idea && <div className="error-text">{errors.idea}</div>}
                </div>
                
                <button 
                  type="button"
                  onClick={handleSubmit}
                  className="gradient-button w-full text-white p-4 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                </button>
              </div>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                * All fields are required
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}