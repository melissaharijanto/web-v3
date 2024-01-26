import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';

const About: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link2}`}
      className="flex flex-col items-center justify-center w-full p-6 md:p-16 lg:p-24 ">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>ABOUT</span>
      </div>
    </div>
  );
};

export default About;
