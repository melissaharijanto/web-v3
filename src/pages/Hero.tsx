import React, { ReactElement } from 'react';
import HeroComponent from '../components/HeroComponent';

const Hero: React.FC = (): ReactElement => {
  return (
    <div className="w-full p-6 md:p-16 lg:p-24">
      <HeroComponent />
    </div>
  );
};

export default Hero;
