import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Premium Emblem */}
      <div className="relative group">
        <div className="flex items-center justify-center w-14 h-14 bg-black border-2 border-gold rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(201,166,70,0.2)]">
          <div className="flex items-center justify-center w-full h-full border border-gold/30 m-1 -rotate-45 group-hover:rotate-0 transition-all duration-700 ease-in-out">
            <span className="text-xl font-black text-gold font-playfair tracking-tighter -rotate-45 group-hover:rotate-0 transition-all duration-700 ease-in-out">TPL</span>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700 opacity-0 group-hover:opacity-100" />
      </div>

      {showText && (
        <div className="flex flex-col justify-center border-l border-gold/20 pl-4 py-1">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-[0.1em] text-white font-playfair leading-none">
              TPL <span className="text-gold italic">SERVICES</span>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-lato font-bold">
              Tax Advisory Excellence
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
