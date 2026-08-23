import React from 'react';
import { Music, Code, TrendingUp, Download, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import cvPdf from '../assets/Tiewodros_Bekele_CV.pdf';
import EthiopianAmbientBackground from './EthiopianAmbientBackground';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <EthiopianAmbientBackground>
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        
        <div className="section-container relative z-10">
          <h2 className={`section-title ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* LEFT COLUMN: Bio */}
            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 backdrop-blur-md border border-gray-800' 
                  : 'bg-white/60 backdrop-blur-md border border-gray-200'
              }`}>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  I'm Tiewodros Bekele, a graduate of Debre Markos University with a Bachelor's
                  degree in Information Technology. I am a passionate individual with a unique blend of technical expertise and artistic talent. My journey bridges the gap between the logical world of IT and the expressive realm of artistic creation.
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 backdrop-blur-md border border-gray-800' 
                  : 'bg-white/60 backdrop-blur-md border border-gray-200'
              }`}>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  As an IT Specialist, I specialize in creating robust, user-centered applications and systems that solve real-world problems. I'm proficient in modern web technologies and frameworks, with a keen eye for detail, performance optimization, and system analysis.
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 backdrop-blur-md border border-gray-800' 
                  : 'bg-white/60 backdrop-blur-md border border-gray-200'
              }`}>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  My parallel career as a multidisciplinary artist allows me to bring creative thinking and aesthetic sensibility to my technical work. I write, produce, and perform music, bringing stories to life through sound.
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gray-900/60 backdrop-blur-md border border-gray-800' 
                  : 'bg-white/60 backdrop-blur-md border border-gray-200'
              }`}>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                } leading-relaxed`}>
                  This dual perspective gives me a unique advantage in creating digital experiences that are not only functionally sound but also emotionally resonant and visually appealing.
                </p>
              </div>

              {/* Quick Stats - Enhanced with glowing borders */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className={`text-center p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                } transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20`}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#009A44] to-[#FED100] bg-clip-text text-transparent">2+</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Projects</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                } transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20`}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#FED100] to-[#E4002B] bg-clip-text text-transparent">Coming</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Music Videos</p>
                </div>
                <div className={`text-center p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border border-gray-700' : 'bg-white/80 backdrop-blur-sm border border-gray-200'
                } transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20`}>
                  <p className="text-2xl font-bold bg-gradient-to-r from-[#E4002B] to-[#009A44] bg-clip-text text-transparent">2018</p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Graduated</p>
                </div>
              </div>

              {/* CV Download Card - Enhanced */}
              <div className={`p-6 rounded-2xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-[#009A44]/20 via-[#FED100]/10 to-[#E4002B]/20 border border-gray-700/50' 
                  : 'bg-gradient-to-r from-[#009A44]/10 via-[#FED100]/5 to-[#E4002B]/10 border border-gray-200/50'
              } backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${
                    theme === 'dark' ? 'bg-[#009A44]/20' : 'bg-[#009A44]/10'
                  }`}>
                    <FileText size={28} className="text-[#009A44]" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      My Resume
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Tiewodros_Bekele_CV.pdf • Updated 2026
                    </p>
                  </div>
                  <a
                    href={cvPdf}
                    target="_blank"
                    download="Tiewodros_Bekele_CV.pdf"
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-[#009A44] to-[#FED100] text-white'
                        : 'bg-gradient-to-r from-[#009A44] to-[#FED100] text-white'
                    }`}
                  >
                    <span className="relative z-10">Download</span>
                    <Download size={16} className="relative z-10" />
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FED100] to-[#E4002B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* RIGHT COLUMN: Skills - Enhanced with glowing borders */}
            <div className="space-y-8">
              <h3 className={`text-2xl font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>My Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Development Skills */}
                <div
                  className={`p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 border ${
                    theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'
                  } transition-all duration-500 hover:scale-[1.02] group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#009A44]/5 to-[#FED100]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#009A44] via-[#FED100] to-[#E4002B] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    <div className={`p-2 rounded-md ${
                      theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                    } text-blue-400`}>
                      <Code size={24} />
                    </div>
                    <h4 className={`text-xl font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Development</h4>
                  </div>
                  
                  <ul className={`space-y-2 pl-4 relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <li>JavaScript/TypeScript</li>
                    <li>React & Next.js</li>
                    <li>Node.js & Express</li>
                    <li>MongoDB & SQL</li>
                    <li>UI/UX Design</li>
                    <li>REST API Development</li>
                  </ul>
                </div>
                
                {/* System Analysis Skills */}
                <div
                  className={`p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 border ${
                    theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'
                  } transition-all duration-500 hover:scale-[1.02] group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FED100]/5 to-[#E4002B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FED100] via-[#E4002B] to-[#009A44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    <div className={`p-2 rounded-md ${
                      theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'
                    } text-teal-400`}>
                      <TrendingUp size={24} />
                    </div>
                    <h4 className={`text-xl font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>System Analysis</h4>
                  </div>
                  
                  <ul className={`space-y-2 pl-4 relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <li>Requirements Gathering</li>
                    <li>System Design</li>
                    <li>Data Modeling</li>
                    <li>Process Optimization</li>
                    <li>Quality Assurance</li>
                    <li>Technical Documentation</li>
                  </ul>
                </div>
                
                {/* Music Skills - Full width with Ethiopian flag gradient */}
                <div
                  className={`p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/10 border ${
                    theme === 'dark' ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'
                  } transition-all duration-500 hover:scale-[1.02] group col-span-1 md:col-span-2`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E4002B]/5 via-[#FED100]/5 to-[#009A44]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#E4002B] via-[#FED100] to-[#009A44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    <div className={`p-2 rounded-md ${
                      theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'
                    } text-yellow-400`}>
                      <Music size={24} />
                    </div>
                    <h4 className={`text-xl font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Music</h4>
                  </div>
                  
                  <ul className={`grid grid-cols-2 gap-2 pl-4 relative z-10 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    <li>Songwriting</li>
                    <li>Music Production</li>
                    <li>Vocal Performance</li>
                    <li>Audio Engineering</li>
                    <li>Composition</li>
                    <li>Instrumentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </EthiopianAmbientBackground>
  );
};

export default About;