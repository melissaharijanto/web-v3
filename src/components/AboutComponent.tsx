import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import { openPage } from './HeroComponent';
import about from '../constants/about';
import FormattedParagraph from './FormattedParagraph';

const AboutComponent: React.FC = (): ReactElement => {
  return (
    <div className="bg-about bg-cover bg-center border-black border-[1px] p-8 md:p-12 rounded-3xl shadow-project w-full md:w-[70%] lg:w-[60%] gap-x-8 text-justify grid gap-y-4 lg:gap-y-0 lg:grid-cols-[3fr_7fr]">
      <div className="flex flex-col w-full order-last lg:order-first">
        <button
          onClick={() => openPage(about.buttonLink1)}
          className={`${buttons.rounded} ${fonts.subheading1} w-full mb-2`}>
          {about.button1.toUpperCase()}
        </button>
        <button
          onClick={() => openPage(about.buttonLink2)}
          className={`${buttons.rounded} ${fonts.subheading1} w-full`}>
          {about.button2.toUpperCase()}
        </button>
      </div>
      <div>
        <FormattedParagraph text={about.p1} />
        <br />
        <br />
        <FormattedParagraph text={about.p2} />
      </div>
    </div>
  );
};

export default AboutComponent;
