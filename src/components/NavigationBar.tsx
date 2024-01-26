import React, { ReactElement, useState } from 'react';
import Logo from '../assets/images/black-logo.svg';
import { fonts } from '../constants/styles';

const NavigationBar: React.FC = (): ReactElement => {
  const linkStyle = `${fonts['text-small']} hover:font-extrabold transition-all ease-in cursor-pointer mx-4`;

  const [onTop, setOnTop] = useState<boolean>(true);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  });
  return (
    <div
      className={`fixed flex w-full backdrop-blur-lg justify-between ${
        onTop ? 'bg-transparent' : 'bg-white/60'
      }`}>
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" className="w-28 mx-6 top-0 my-4" />
      </div>
      <div className="flex justify-center items-center">
        <a href="#home" className={linkStyle}>
          HOME
        </a>
        <a href="#about" className={linkStyle}>
          ABOUT
        </a>
        <a href="#experiences" className={linkStyle}>
          EXPERIENCES
        </a>
        <a href="#projects" className={`${linkStyle} mr-8`}>
          PROJECTS
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
