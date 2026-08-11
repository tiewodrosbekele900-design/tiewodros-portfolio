import React from 'react';
import { Music, Code, Cpu, TrendingUp, Download, FileText, Award, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import cvPdf from '../assets/Tiewodros_Bekele_CV.pdf';

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-center bg-cover blur-sm md:blur"
        style={{ backgroundImage: `url('/go.jpg')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="section-container relative z-10">
        <h2 className={`section-title ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* LEFT COLUMN: Bio */}
          <div className="space-y-6">
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}>
              I'm Tiewodros Bekele, a graduate of Debre Markos University with a Bachelor's
              degree in Information Technology. I am a passionate individual with a unique blend of technical expertise and artistic talent. My journey bridges the gap between the logical world of IT and the expressive realm of artistic creation.
            </p>
            
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}>
              As an IT Specialist, I specialize in creating robust, user-centered applications and systems that solve real-world problems. I'm proficient in modern web technologies and frameworks, with a keen eye for detail, performance optimization, and system analysis.
            </p>
            
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}>
              My parallel career as a multidisciplinary artist allows me to bring creative thinking and aesthetic sensibility to my technical work. I write, produce, and perform music, bringing stories to life through sound.
            </p>
            
            <p className={`${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            } leading-relaxed`}>
              This dual perspective gives me a unique advantage in creating digital experiences that are not only functionally sound but also emotionally resonant and visually appealing.
            </p>

            {/* ✨ NEW: Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className={`text-center p-4 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <p className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">2+</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Projects</p>
              </div>
              <div className={`text-center p-4 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">not yet</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Music Videos</p>
              </div>
              <div className={`text-center p-4 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50`}>
                <p className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">2018</p>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Graduated</p>
              </div>
            </div>

            {/* ✨ NEW: CV Download Card */}
            <div className={`p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gradient-to-r from-blue-900/30 to-teal-900/30 border-blue-700/30' : 'bg-gradient-to-r from-blue-50/80 to-teal-50/80 border-blue-200/50'
            } border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]`}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <FileText size={28} className="text-blue-400" />
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-blue-600 hover:bg-blue-500 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </div>
          
          {/* RIGHT COLUMN: Skills */}
          <div className="space-y-8">
            <h3 className={`text-2xl font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>My Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Development Skills */}
              <div
                className={`card p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm ${
                  theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
                } transition-all duration-300`}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-center bg-cover filter blur-blur opacity-30 pointer-events-none"
                  style={{ backgroundImage: `url('/soft.jpg')` }}
                />
              
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-md ${
                    theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'
                  } text-blue-400`}>
                    <Code size={24} />
                  </div>
                  <h4 className={`text-xl font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Development</h4>
                </div>
                
                <ul className={`space-y-2 pl-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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
                className={`card p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 ${
                  theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
                } transition-all duration-300`}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-center bg-cover filter blur-none opacity-30 pointer-events-none"
                  style={{ backgroundImage: `url('/st.jpg')` }}
                />
               
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-md ${
                    theme === 'dark' ? 'bg-teal-900/30' : 'bg-teal-100'
                  } text-teal-400`}>
                    <TrendingUp size={24} />
                  </div>
                  <h4 className={`text-xl font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>System Analysis</h4>
                </div>
                
                <ul className={`space-y-2 pl-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  <li>Requirements Gathering</li>
                  <li>System Design</li>
                  <li>Data Modeling</li>
                  <li>Process Optimization</li>
                  <li>Quality Assurance</li>
                  <li>Technical Documentation</li>
                </ul>
              </div>
              
              {/* Music Skills */}
              <div
                className={`card p-6 space-y-4 relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm ${
                  theme === 'dark' ? 'bg-gray-800/90' : 'bg-white/90'
                } transition-all duration-300 col-span-1 md:col-span-2`}
              >
                <div
                  className="absolute inset-0 rounded-2xl bg-center bg-cover filter blur-blur opacity-30 pointer-events-none"
                  style={{ backgroundImage: `url('/MI.jpg')` }}
                />
               
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-md ${
                    theme === 'dark' ? 'bg-yellow-900/30' : 'bg-yellow-100'
                  } text-yellow-400`}>
                    <Music size={24} />
                  </div>
                  <h4 className={`text-xl font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Music</h4>
                </div>
                
                <ul className={`grid grid-cols-2 gap-2 pl-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
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
  );
};

export default About;