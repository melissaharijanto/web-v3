import React from 'react';
import { buttons, fonts } from '../constants/styles';
import { hero } from '../constants/hero';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

export const openPage = (link: string) => {
  window.open(link, '_blank');
};

const HeroComponent = () => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  return (
    <div
      className={`${
        mode === 'LIGHT'
          ? 'bg-light shadow-project lg:shadow-solid'
          : 'bg-dark bg-top lg:bg-center shadow-dark-mobile lg:shadow-dark'
      } bg-cover w-full min-h-[75vh] flex flex-col justify-center rounded-3xl border-[1px] 
            0 25px 25px 0 2px rgb(1 1 1)]`}
      style={{ borderColor: textColor }}>
      <div className="py-10 px-12 md:px-16 lg:px-24 w-full flex items-center flex-col justify-center text-center">
        <div className="mb-10 md:mb-20">
          <span
            className={`${fonts['text-small']}`}
            style={{ color: textColor }}>
            {hero.header1}
          </span>
        </div>
        <div
          className={`${fonts.heading1} flex flex-col text-center`}
          style={{ color: textColor }}>
          {hero.name.map((name: string) => (
            <span>{name}</span>
          ))}
        </div>
        <div
          className={`flex flex-col items-center justify-center md:flex-row mt-4`}>
          <button
            className={`${fonts.subheading1} ${
              mode === 'LIGHT'
                ? buttons['rounded-light']
                : buttons['rounded-dark']
            }`}
            onClick={() => openPage(hero.buttonLink1)}>
            {hero.button1}
          </button>
          <button
            className={`${fonts.subheading1} ${
              mode === 'LIGHT'
                ? buttons['rounded-light']
                : buttons['rounded-dark']
            }} mt-2 md:mt-0 md:ml-2`}
            onClick={() => openPage(hero.buttonLink2)}>
            {hero.button2}
          </button>
        </div>
        <div className="mt-12 md:mt-24">
          <span
            className={`${fonts['text-small']}`}
            style={{ color: textColor }}>
            {hero.footer1}
          </span>
          <br></br>
          <span
            className={`${fonts['text-small']}`}
            style={{ color: textColor }}>
            {hero.footer2}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
