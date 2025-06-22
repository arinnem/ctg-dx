import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img
      src="/X01-logo-nobackground.png"
      alt="X01 logo"
      className={className}
    />
  );
};

export default Logo; 