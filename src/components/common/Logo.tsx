import React from 'react';
import { Shield } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img src="/icon.png" alt="Falx Lata Icon" className="h-8 w-8 mr-2" />
      <Shield size={32} className="text-primary-600" />
      <div className="ml-2">
        <span className="font-serif font-bold text-xl tracking-wider text-primary-800">
          FALX <span className="text-accent-600">LATA</span>
        </span>
        <div className="text-xs text-secondary-600 -mt-1">HR SERVICES</div>
      </div>
    </div>
  );
};

export default Logo;