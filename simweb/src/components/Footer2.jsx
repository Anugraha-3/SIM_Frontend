import React, { useState } from "react";

const Footer2 = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
<div className="bg-black border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-light text-white">{title}</h2>
            <button
              onClick={onClose}
className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 border border-white/20 hover:border-red-400/50 transition-all duration-300 group"            >
              <svg className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-8 overflow-y-auto max-h-[calc(80vh-120px)] custom-scrollbar">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
<div className="bg-black text-white px-8 py-20 font-sans overflow-hidden relative">      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-purple-500/8 via-red-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-500/8 via-purple-500/8 to-blue-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="text-center mb-20 animate-fade-in">
<h2 className="text-5xl font-light mb-6 text-purple-500 tracking-wide">Get in Touch</h2>
<p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">            We'd love to hear from you. Connect with us today and let's create something amazing together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          {/* Contact Information - Smaller */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
<h3 className="text-2xl font-light text-white mb-8 pb-4 border-b border-white/10">Contact Information</h3>            
            <div className="space-y-6">
              <div className="group transform hover:scale-105 transition-all duration-300">
<div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30 backdrop-blur-sm">                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:from-red-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
<span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Address</span>                    <p className="text-gray-300 leading-relaxed mt-2 text-lg">
                      309, Dr. Rajendra Prasad Road,<br />
                      Tatabad, CBE - 641 012,<br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="group transform hover:scale-105 transition-all duration-300">
<div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30 backdrop-blur-sm">                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:from-red-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
<span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Phone</span>                   <a href="tel:+917788003366" className="text-white hover:text-purple-400 transition-colors duration-300 mt-2 block text-lg font-medium">
                      +91 77880 03366
                    </a>
                  </div>
                </div>
              </div>

              <div className="group transform hover:scale-105 transition-all duration-300">
<div className="flex items-start space-x-4 p-6 rounded-xl hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/30 backdrop-blur-sm">                  <div className="w-14 h-14 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:from-red-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-300 shadow-lg shadow-purple-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
<span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Email</span>                    <a href="mailto:admin@sunnetwork.info" className="text-white hover:text-purple-400 transition-colors duration-300 mt-2 block text-lg font-medium">
                      admin@sunnetwork.info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Map - Takes more space */}
          <div className="lg:col-span-3 space-y-8 animate-slide-in-right">
<h3 className="text-2xl font-light text-white mb-8 pb-4 border-b border-white/10">Find Us</h3>            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-700 transform hover:scale-[1.02]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.26118714513!2d76.95398617536273!3d11.019019789144869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fb882cbae7%3A0xdbef65f44b38f8ed!2sSun%20Info%20Media!5e0!3m2!1sen!2sin!4v1744035696065!5m2!1sen!2sin"
                width="100%"
                height="500"
                allowFullScreen=""
                loading="lazy"
                title="Office Map"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black px-8">
<div className="w-3 h-3 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full shadow-lg shadow-purple-500/50"></div>            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 animate-fade-in-up">
          {/* Enhanced Copyright */}
          <div className="text-center lg:text-left space-y-4 flex-1">
            <div className="space-y-2">
              <p className="text-white font-medium text-lg">
                © {new Date().getFullYear()} Sun Info Media. All rights reserved.
              </p>
              <p className="text-gray-300 text-base font-light">
                Crafted with excellence in Coimbatore, Tamil Nadu
              </p>
              <p className="text-gray-400 text-sm">
                Empowering businesses through innovative digital solutions since 2010
              </p>
            </div>
            
            {/* Additional Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400 pt-2">
              <button 
                onClick={() => openModal('privacy')}
className="hover:text-purple-400 transition-colors duration-200 cursor-pointer"              >
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => openModal('terms')}
className="hover:text-purple-400 transition-colors duration-200 cursor-pointer"              >
                Terms of Service
              </button>
              <span className="text-gray-600">•</span>
              <button 
                onClick={() => openModal('cookies')}
className="hover:text-purple-400 transition-colors duration-200 cursor-pointer"              >
                Cookie Policy
              </button>
            </div>
          </div>

          {/* Enhanced Social Media */}
          <div className="flex flex-col items-center lg:items-end gap-6">
<span className="text-gray-300 text-base font-medium tracking-wide">Connect With Us</span>            
            <div className="flex items-center gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/suninfomedia/"
                target="_blank"
                rel="noopener noreferrer"
className="group w-14 h-14 bg-white/10 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:bg-cyan-500/10 backdrop-blur-sm"                title="Connect with us on LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-cyan-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v15H0V8.5zm7.5 0h4.47v2.1h.06c.62-1.17 2.14-2.4 4.41-2.4c4.72 0 5.6 3.1 5.6 7.13V24h-5v-6.35c0-1.51-.03-3.45-2.1-3.45c-2.1 0-2.42 1.64-2.42 3.33V24h-5V8.5z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917788003366"
                target="_blank"
                rel="noopener noreferrer"
className="group w-14 h-14 bg-white/10 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-green-400/70 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:bg-green-500/10 backdrop-blur-sm"                title="Message us on WhatsApp"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-green-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:admin@sunnetwork.info"
className="group w-14 h-14 bg-white/10 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-purple-400/70 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:bg-purple-500/10 backdrop-blur-sm"                title="Send us an email"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-purple-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+917788003366"
className="group w-14 h-14 bg-white/10 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-orange-400/70 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 hover:rotate-3 hover:bg-orange-500/10 backdrop-blur-sm"                title="Call us"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={closeModal}
        title="Privacy Policy"
      >
        <div className="space-y-6 text-gray-300 leading-relaxed">
<p className="text-gray-300 text-lg font-medium">Effective Date: {new Date().getFullYear()}</p>          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Information We Collect</h3>
            <p>At Sun Info Media, we collect information you provide directly to us, such as when you contact us, request services, or interact with our website. This may include your name, email address, phone number, and business information.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform. We may also use your information to send you marketing communications with your consent.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Data Security</h3>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at admin@sunnetwork.info or +91 77880 03366.</p>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={closeModal}
        title="Terms of Service"
      >
        <div className="space-y-6 text-gray-300 leading-relaxed">
<p className="text-gray-300 text-lg font-medium">Effective Date: {new Date().getFullYear()}</p>          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Acceptance of Terms</h3>
            <p>By accessing and using Sun Info Media's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Services</h3>
            <p>Sun Info Media provides digital marketing, web development, and IT consulting services. We reserve the right to modify or discontinue services at any time without notice.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">User Responsibilities</h3>
            <p>You agree to provide accurate information, maintain the security of your account credentials, and use our services in compliance with applicable laws and regulations.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Intellectual Property</h3>
            <p>All content, trademarks, and intellectual property on our website and services are owned by Sun Info Media or our licensors and are protected by applicable laws.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Limitation of Liability</h3>
            <p>Sun Info Media shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Contact Information</h3>
            <p>For questions regarding these Terms of Service, contact us at admin@sunnetwork.info or +91 77880 03366.</p>
          </div>
        </div>
      </Modal>

      {/* Cookie Policy Modal */}
      <Modal
        isOpen={activeModal === 'cookies'}
        onClose={closeModal}
        title="Cookie Policy"
      >
        <div className="space-y-6 text-gray-300 leading-relaxed">
<p className="text-gray-300 text-lg font-medium">Effective Date: {new Date().getFullYear()}</p>          
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">What Are Cookies</h3>
            <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing website usage.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Types of Cookies We Use</h3>
<p><strong className="text-purple-400">Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.</p>            <p><strong className="text-purple-400">Analytics Cookies:</strong> We use these to understand how visitors interact with our website to improve our services.</p>
<p><strong className="text-purple-400">Functional Cookies:</strong> These enable enhanced functionality and personalization features.</p>          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Third-Party Cookies</h3>
            <p>We may use third-party services like Google Analytics that place cookies on your device. These services have their own privacy policies governing their use of cookies.</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium text-white">Contact Us</h3>
            <p>If you have questions about our use of cookies, please contact us at admin@sunnetwork.info or +91 77880 03366.</p>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.4s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
background: rgba(255, 255, 255, 0.1);          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ef4444, #a855f7, #3b82f6);
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #dc2626, #9333ea, #2563eb);
        }
      `}</style>
    </div>
  );
};

export default Footer2;