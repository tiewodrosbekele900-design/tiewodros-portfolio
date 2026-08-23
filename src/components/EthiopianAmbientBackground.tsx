import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface EthiopianAmbientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const EthiopianAmbientBackground: React.FC<EthiopianAmbientBackgroundProps> = ({
  children,
  className = '',
}) => {
  const { theme } = useTheme();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Ethiopian Flag Ambient Glow Spots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Green glow */}
        <div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,154,68,0.25) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Yellow glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(254,209,0,0.20) 0%, transparent 70%)',
            filter: 'blur(140px)',
          }}
        />
        {/* Red glow */}
        <div 
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(228,0,43,0.20) 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        {/* Tech radial grid overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default EthiopianAmbientBackground;