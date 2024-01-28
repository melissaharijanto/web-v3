import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import { openPage } from './HeroComponent';
import about from '../constants/about';
import FormattedParagraph from './FormattedParagraph';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

const AboutComponent: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;

  return (
    <div
      className={`${
        mode === 'LIGHT'
          ? 'bg-about shadow-project'
          : 'bg-about-dark bg-center shadow-dark-mobile'
      } bg-cover bg-center border-[1px] p-8 md:p-12 rounded-3xl w-full md:w-[70%] lg:w-[60%] gap-x-8 text-justify grid gap-y-4 lg:gap-y-0 lg:grid-cols-[3fr_7fr]`}
      style={{ borderColor: textColor }}>
      <div className="flex flex-col w-full order-last lg:order-first">
        <button
          onClick={() => openPage(about.buttonLink1)}
          className={`${
            mode === 'LIGHT'
              ? buttons['rounded-light']
              : buttons['rounded-dark']
          } ${fonts.subheading1} w-full mb-2`}>
          {about.button1.toUpperCase()}
        </button>
        <button
          onClick={() => openPage(about.buttonLink2)}
          className={`${
            mode === 'LIGHT'
              ? buttons['rounded-light']
              : buttons['rounded-dark']
          } ${fonts.subheading1} w-full`}>
          {about.button2.toUpperCase()}
        </button>
      </div>
      <div style={{ color: textColor }}>
        <FormattedParagraph text={about.p1} />
        <br />
        <br />
        <FormattedParagraph text={about.p2} />
      </div>
    </div>
  );
};

export default AboutComponent;
