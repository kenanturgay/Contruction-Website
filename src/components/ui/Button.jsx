import React from 'react';

const Button = ({ children, variant = 'primary', className = '', href, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none cursor-pointer tracking-wide";
  
  const variants = {
    primary: "px-8 py-3 rounded-full border border-[var(--color-rayan-blue)] text-[var(--color-rayan-blue)] bg-transparent hover:bg-[var(--color-rayan-blue)] hover:text-white uppercase text-xs md:text-sm shadow-sm",
    outline: "px-8 py-3 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white uppercase text-xs md:text-sm",
    ghost: "px-4 py-2 bg-transparent text-slate-800 hover:text-[var(--color-rayan-blue)] uppercase text-sm",
    link: "px-0 py-1 bg-transparent text-[var(--color-rayan-blue)] hover:text-[var(--color-rayan-blue-hover)] border-b border-transparent hover:border-[var(--color-rayan-blue-hover)]"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
