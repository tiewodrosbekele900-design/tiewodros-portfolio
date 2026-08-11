import React from 'react';
import { Heart, Github, Linkedin, Youtube, Instagram, LucideIcon } from 'lucide-react';
import { socialLinks } from '../data/navigationData';

const Footer: React.FC = () => {
  // Map icon name to Lucide icon component
  const iconMap: { [key: string]: LucideIcon } = {
    'GitHub': Github,
    'Linkedin': Linkedin,
    'Youtube': Youtube,
    'Instagram': Instagram,
  };

  const getIconComponent = (iconName: string): React.ReactNode => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) {
      console.warn(`Icon not found for ${iconName}`);
      return null;
    }
    return <IconComponent size={16} />;
  };
  
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8 mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Tiewodros Bekele
            </h2>
            <p className="text-gray-400 mt-2">IT Specialist & Multidisciplinary Artist</p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map(link => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300
                         bg-gray-800 hover:bg-gradient-to-r from-blue-600 to-teal-500 
                         text-gray-400 hover:text-white"
                aria-label={link.platform}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tiewodros Bekele. All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm flex items-center">
            Designed & Built with <Heart size={14} className="mx-1 text-red-500" /> by Tiewodros Bekele
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
