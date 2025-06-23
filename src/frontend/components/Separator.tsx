import React from 'react';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ 
  orientation = 'horizontal', 
  className = '' 
}) => {
  const baseClasses = orientation === 'horizontal' 
    ? 'h-[1px] w-full bg-gray-200' 
    : 'h-full w-[1px] bg-gray-200';
  
  return (
    <div className={`shrink-0 ${baseClasses} ${className}`} />
  );
};

export { Separator }; 