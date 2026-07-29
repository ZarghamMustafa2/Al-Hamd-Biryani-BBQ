import React from 'react';

interface AlHamdLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'auto';
  showGlow?: boolean;
}

export const AlHamdLogo: React.FC<AlHamdLogoProps> = ({
  className = '',
  size = 'md',
  showGlow = true,
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  }[size];

  return (
    <div
      className={`relative rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 ${sizeClasses} ${
        showGlow ? 'shadow-xl shadow-amber-500/25 group-hover:scale-105' : ''
      } ${className}`}
    >
      <img
        src="./al-hamd-logo.png"
        alt="Al Hamd Biryani & BBQ Official Logo"
        className="w-full h-full object-cover rounded-full border border-amber-500/40"
      />
    </div>
  );
};
