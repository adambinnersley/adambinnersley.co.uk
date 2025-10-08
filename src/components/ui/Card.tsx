import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'interactive';
  className?: string;
  onClick?: () => void;
}

export default function Card({ 
  children, 
  variant = 'default',
  className = '',
  onClick 
}: CardProps) {
  const baseStyles = 'bg-card rounded-xl border border-border transition-all duration-300';
  
  const variantStyles = {
    default: '',
    hover: 'hover:border-primary',
    interactive: 'hover:border-primary cursor-pointer hover:scale-105 transform',
  };
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
