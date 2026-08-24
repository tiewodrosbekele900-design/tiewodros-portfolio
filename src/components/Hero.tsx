import React, { useEffect, useState } from 'react';
import { ArrowDown, Download, Music2, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import EthiopianAmbientBackground from './EthiopianAmbientBackground';


import profileImage from '../assets/profile.jpg';
import cvImage from '../assets/CV.png';
import cvPdf from '../assets/Tiewodros_Bekele_CV.pdf';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [flip, setFlip] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
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

  const toggleAudioPreview = () => {
    setIsAudioPlaying(!isAudioPlaying);
    // You can add actual audio playback here later
  };

  return (
    <EthiopianAmbientBackground>
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
        {/* Glassmorphism overlay instead of static image blur */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(${theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)'} 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />

        <div className="section-container relative z-10">
          {/* Full-width animated title at the top */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            {/* LEFT COLUMN: Profile Image, Subheading, Bio */}
            <div className={`flex flex-col items-start space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              
              {/* Profile image with gradient border - Glassmorphism style */}
              <div className="relative mx-auto md:mx-0">
                <div className="rounded-full overflow-hidden w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 p-1.5 bg-gradient-to-r from-[#009A44] via-[#FED100] to-[#E4002B] shadow-2xl shadow-green-500/20">
                  <div className="rounded-full overflow-hidden w-full h-full bg-gray-900/80 backdrop-blur-sm p-1">
                    <img 
                      src={profileImage} 
                      alt="Tiewodros Bekele"
                      className="rounded-full w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating badge with audio preview */}
                <div className={`absolute -bottom-4 -left-4 flex items-center gap-2 ${
                  theme === 'dark' ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
                } px-4 py-2 rounded-full shadow-xl border ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                    IT Specialist & Artist
                  </p>
                  <button
                    onClick={toggleAudioPreview}
                    className={`p-1.5 rounded-full transition-all duration-300 ${
                      isAudioPlaying 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-gray-700/50 text-gray-400 hover:text-white'
                    }`}
                    aria-label="Audio preview"
                  >
                    <Music2 size={14} className={isAudioPlaying ? 'animate-pulse' : ''} />
                  </button>
                </div>
              </div>

              {/* Subheading & Bio Text - Glassmorphism card */}
              <div className={`space-y-4 max-w-md p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 backdrop-blur-md border border-gray-800' 
                  : 'bg-white/60 backdrop-blur-md border border-gray-200'
              }`}>
                <h2 className={`text-lg sm:text-xl ${
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
              
              {/* Full-Length CV Image Preview - Glassmorphism */}
              <div className={`w-full max-w-md rounded-2xl overflow-hidden border ${
                theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
              } shadow-2xl shadow-blue-500/10 transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02]`}>
                <div className={`p-2 ${
                  theme === 'dark' ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
                }`}>
                  <img 
                    src={cvImage} 
                    alt="Full-Length CV Preview" 
                    className="w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover object-top rounded-lg"
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="#contact" className="btn btn-primary relative overflow-hidden group">
                  <span className="relative z-10">Contact Me</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#009A44] via-[#FED100] to-[#E4002B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                </a>
                <a 
                  href={cvPdf}
                  target="_blank"
                  download="Tiewodros_Bekele_CV.pdf"
                  className="btn btn-outline flex items-center gap-2 relative overflow-hidden group"
                >
                  <Download size={16} className="relative z-10" />
                  <span className="relative z-10">Download My CV</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#009A44]/20 via-[#FED100]/20 to-[#E4002B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
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
    </EthiopianAmbientBackground>
  );
};

export default Hero;