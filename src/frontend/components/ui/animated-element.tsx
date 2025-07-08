import React, { useState, useEffect } from 'react';

interface AnimatedElementProps {
  children?: React.ReactNode;
  delay: string;
  className?: string;
}

export const AnimatedElement = ({ children, delay, className }: AnimatedElementProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay} ${className || ''}`}
    >
      {children}
    </div>
  );
}; 