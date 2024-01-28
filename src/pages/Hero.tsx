import React, { ReactElement } from 'react';
import HeroComponent from '../components/HeroComponent';
import navbar from '../constants/navbar';

const Hero: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link1}`}
      className="w-full p-6 pt-24 md:p-16 md:pt-28 lg:p-24 lg:pt-36">
      <HeroComponent />
    </div>
  );
};

export default Hero;
