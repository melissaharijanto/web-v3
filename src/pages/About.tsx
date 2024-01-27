import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import AboutComponent from '../components/AboutComponent';

const About: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link2}`}
      className="min-h-[90vh] flex flex-col items-center justify-center w-full p-8 md:p-16 lg:p-24">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>ABOUT</span>
      </div>
      <AboutComponent />
    </div>
  );
};

export default About;
