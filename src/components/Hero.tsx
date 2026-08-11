import React, { useEffect, useState } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

import profileImage from '../assets/profile.jpg';
import cvImage from '../assets/CV.png';
import cvPdf from '../assets/Tiewodros_Bekele_CV.pdf';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flip, setFlip] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const { theme } = useTheme();
  const fullText = "Hello, I'm Tiewodros Bekele";
  
  const gradients = [
    'from-blue-500 to-teal-400',
    'from-blue-500 to-yellow-400',
    'from-teal-400 to-yellow-400',
    'from-blue-600 to-teal-500',
    'from-teal-500 to-blue-400'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const pauseAtEnd = 1000;
    const interval = setInterval(() => {
      setFlip((prev) => {
        const next = !prev;
        if (next === false) {
          setColorIndex((c) => (c + 1) % gradients.length);
        }
        return next;
      });
    }, pauseAtEnd);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover blur-sm md:blur"
        style={{ backgroundImage: `url('/cam.jpg')` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `radial-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="section-container relative z-10">
        {/* ✅ NEW: Full-width animated title at the top */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span
              className={`inline-block transform transition-all duration-700 ease-out bg-gradient-to-r ${gradients[colorIndex]} bg-clip-text text-transparent ${
                flip ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
              }`}
            >
              {fullText}
            </span>
          </h1>
        </div>

        {/* Two-column layout below the title */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          
          {/* LEFT COLUMN: Profile Image, Subheading, Bio */}
          <div className={`flex flex-col items-start space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            
            {/* Profile image with gradient border */}
            <div className="relative mx-auto md:mx-0">
              <div className="rounded-full overflow-hidden w-64 h-64 sm:w-80 sm:h-80 border-2 p-1 bg-gradient-to-r from-blue-500 to-teal-400">
                <img 
                  src={profileImage} 
                  alt="Tiewodros Bekele"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className={`absolute -bottom-4 -left-4 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } px-4 py-2 rounded-full shadow-lg border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                  IT Specialist & Artist
                </p>
              </div>
            </div>

            {/* Subheading & Bio Text */}
            <div className="space-y-4 max-w-md">
              <h2 className={`text-xl sm:text-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              } font-light`}>
                IT Specialist & Multidisciplinary Artist (Musician)
              </h2>
              
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              } leading-relaxed`}>
                Information Technology graduate from Debre Markos University. 
                Bridging the gap between technology and artistic expression through 
                development, system analysis, and music. Passionate about creating 
                innovative solutions that combine technical precision with creative vision.
              </p>
            </div>
          </div>
          
          {/* RIGHT COLUMN: CV Image, Buttons */}
          <div className={`flex flex-col items-start md:items-start space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            
            {/* Full-Length CV Image Preview */}
            <div className="w-full max-w-md rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-shadow hover:shadow-xl">
              <img 
                src={cvImage} 
                alt="Full-Length CV Preview" 
                className="w-full h-auto max-h-[500px] object-cover object-top"
              />
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a 
                href={cvPdf}
                target="_blank"
                download="Tiewodros_Bekele_CV.pdf"
                className="btn btn-outline flex items-center gap-2"
              >
                <Download size={16} />
                Download My CV
              </a>
            </div>

          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          } text-sm mb-2`}>Scroll Down</p>
          <ArrowDown className={`animate-bounce ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`} size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;