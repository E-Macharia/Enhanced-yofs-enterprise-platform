import React from 'react';

export function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon: Icon = null,
  iconPosition = 'left',
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yofs-cyan/50 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'btn-gradient text-white shadow-lg hover:shadow-yofs-cyan/20 border border-transparent',
    secondary: 'bg-yofs-lightnavy/80 hover:bg-yofs-lightnavy text-yofs-white border border-yofs-lightnavy hover:border-yofs-cyan/30 glass-panel',
    outline: 'border border-yofs-cyan/30 hover:border-yofs-cyan bg-transparent text-yofs-cyan hover:bg-yofs-cyan/10 hover:text-white',
    ghost: 'text-yofs-lightslate hover:text-yofs-cyan hover:bg-yofs-navy/50 bg-transparent border border-transparent',
    danger: 'bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 hover:border-red-500/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {Icon && iconPosition === 'left' && <Icon className={`mr-2 ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={`ml-2 ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />}
    </button>
  );
}
