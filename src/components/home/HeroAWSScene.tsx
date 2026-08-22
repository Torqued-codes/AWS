import React, { useRef, useEffect } from 'react';

// Pure CSS/Canvas animated AWS service icons floating in hero background
// Lightweight alternative to full Three.js scene

const AWS_SERVICES = [
  { label: 'S3', color: '#5DA94E', shape: 'bucket', x: 15, y: 20, delay: 0, size: 52 },
  { label: 'EC2', color: '#FF9900', shape: 'box', x: 80, y: 15, delay: 1.2, size: 44 },
  { label: 'λ', color: '#FF9900', shape: 'lambda', x: 88, y: 65, delay: 0.6, size: 40 },
  { label: 'RDS', color: '#4285f4', shape: 'cylinder', x: 10, y: 70, delay: 1.8, size: 38 },
  { label: 'VPC', color: '#8B5CF6', shape: 'shield', x: 50, y: 8, delay: 2.4, size: 34 },
  { label: 'CF', color: '#FF9900', shape: 'globe', x: 92, y: 38, delay: 0.3, size: 30 },
];

interface AwsServiceIconProps {
  label: string;
  color: string;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const AwsServiceIcon: React.FC<AwsServiceIconProps> = ({ label, color, x, y, delay, size }) => {
  return (
    <div
      className="absolute animate-float group/icon"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${4 + delay * 0.5}s`,
        transformStyle: 'preserve-3d',
        perspective: '400px',
      }}
    >
      <div
        className="rounded-xl flex items-center justify-center font-stats font-bold select-none transition-transform duration-500"
        style={{
          width: size,
          height: size,
          background: `linear-gradient(145deg, ${color}1c, ${color}08)`,
          border: `1px solid ${color}35`,
          color,
          fontSize: size > 44 ? 13 : 11,
          boxShadow: `0 0 ${size * 0.4}px ${color}22, inset 0 1px 0 ${color}20`,
          backdropFilter: 'blur(8px)',
          transform: 'rotateX(8deg) rotateY(-8deg)',
        }}
      >
        {label}
      </div>
    </div>
  );
};

export const HeroAWSScene: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {AWS_SERVICES.map(svc => (
        <AwsServiceIcon key={svc.label} {...svc} />
      ))}

      {/* Subtle connection lines via SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF9900" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF9900" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF9900" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="15%" y1="20%" x2="80%" y2="15%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="80%" y1="15%" x2="88%" y2="65%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="10%" y1="70%" x2="50%" y2="8%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="88%" y1="65%" x2="50%" y2="8%" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 6" />
      </svg>
    </div>
  );
};
