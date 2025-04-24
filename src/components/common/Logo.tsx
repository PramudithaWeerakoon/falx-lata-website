import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/icon.png" alt="Falx Lata Icon" className="h-16 w-20 mr-2" />
      <div>
        <span className="font-serif font-bold text-xl tracking-wider text-primary-800">
          FALX <span className="text-accent-600">LATA</span>
        </span>
        <div className="text-xs text-secondary-600 -mt-1">HR SERVICES</div>
      </div>
    </div>
  );
};

export default Logo;