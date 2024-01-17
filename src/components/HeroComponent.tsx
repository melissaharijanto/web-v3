import React from 'react';
import { buttons, fonts } from '../constants/styles';
import { hero } from '../constants/hero';

export const openPage = (link: string) => {
  window.open(link, '_blank');
};

const HeroComponent = () => {
  return (
    <div
      className={`bg-light-background bg-cover w-full min-h-[80vh] flex flex-col justify-center rounded-3xl border-[1px] border-black shadow-solid
            0 25px 25px 0 2px rgb(1 1 1)]`}>
      <div className="py-10 px-12 md:px-16 lg:px-24 w-full flex items-center flex-col justify-center text-center">
        <div className="mb-20">
          <span className={`${fonts['text-small']}`}>{hero.header1}</span>
        </div>
        <div className={`${fonts.heading1} flex flex-col text-center`}>
          {hero.name.map((name: string) => (
            <span>{name}</span>
          ))}
        </div>
        <div
          className={`flex flex-col items-center justify-center md:flex-row mt-4`}>
          <button
            className={`${fonts.subheading1} ${buttons.rounded}`}
            onClick={() => openPage(hero.buttonLink1)}>
            {hero.button1}
          </button>
          <button
            className={`${fonts.subheading1} ${buttons.rounded} text-white bg-black mt-2 md:mt-0 md:ml-2`}
            onClick={() => openPage(hero.buttonLink2)}>
            {hero.button2}
          </button>
        </div>
        <div className="mt-24">
          <span className={`${fonts['text-small']}`}>{hero.footer1}</span>
          <br></br>
          <span className={`${fonts['text-small']}`}>{hero.footer2}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
