import React, { ReactElement, useState } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import { hero } from '../constants/hero';

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
        onTop ? 'bg-transparent' : 'bg-white/80'
      }`}>
      <div className="flex justify-center items-center">
        <img
          src={navbar['light-mode-logo']}
          alt="logo"
          className="w-28 mx-6 top-0 my-4"
        />
      </div>
      <div className="flex justify-center items-center">
        <a href={`#${navbar.link1}`} className={linkStyle}>
          {navbar.link1.toUpperCase()}
        </a>
        <a href={`#${navbar.link2}`} className={linkStyle}>
          {navbar.link2.toUpperCase()}
        </a>
        <a href={`#${navbar.link3}`} className={linkStyle}>
          {navbar.link3.toUpperCase()}
        </a>
        <a href={`#${navbar.link4}`} className={`${linkStyle}`}>
          {navbar.link4.toUpperCase()}
        </a>
        <a
          href={`${hero.buttonLink1}`}
          target="_blank"
          rel="noreferrer"
          className={`${linkStyle} mr-12`}>
          {navbar.link5.toUpperCase()}
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
