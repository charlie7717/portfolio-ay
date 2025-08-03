import React from 'react';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-lg text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400"></div>
      
      <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-5 flex items-center justify-center text-white text-5xl font-bold">
        AY
      </div>
      
      <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Ashwani Yadav
      </h1>
      
      <p className="text-xl text-gray-600 mb-5">
        Product Manager | Project Manager | AI & SaaS Solutions Expert
      </p>
      
      <p className="text-gray-500 mb-5">
        📍 Lucknow, India • Willing to Relocate
      </p>
      
      <div className="flex justify-center gap-8 flex-wrap">
        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={16} />
          <a href="tel:+919554911115" className="text-blue-500 hover:text-purple-600 transition-colors">
            +91-9554911115
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Mail size={16} />
          <a href="mailto:ashwanii.office@gmail.com" className="text-blue-500 hover:text-purple-600 transition-colors">
            ashwanii.office@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Linkedin size={16} />
          <a href="https://linkedin.com/in/ashwaniiyadavv" className="text-blue-500 hover:text-purple-600 transition-colors">
            LinkedIn
          </a>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} />
          <span>Lucknow, India</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

