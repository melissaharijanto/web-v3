import React, { ReactElement } from 'react';
import HeroComponent from '../components/HeroComponent';

const Hero: React.FC = (): ReactElement => {
  return (
    <div className="w-full p-6 md:p-16 md:pt-24 lg:p-24 lg:pt-28">
      <HeroComponent />
    </div>
  );
};

export default Hero;
