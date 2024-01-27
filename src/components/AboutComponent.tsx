import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import { openPage } from './HeroComponent';

const AboutComponent: React.FC = (): ReactElement => {
  return (
    <div className="bg-about bg-cover bg-center border-black border-[1px] p-8 md:p-12 rounded-3xl shadow-project w-full md:w-[70%] lg:w-[60%] gap-x-8 text-justify grid gap-y-4 lg:gap-y-0 lg:grid-cols-[3fr_7fr]">
      <div className="flex flex-col w-full order-last lg:order-first">
        <button
          onClick={() => openPage('https://github.com/melissaharijanto')}
          className={`${buttons.rounded} ${fonts.subheading1} w-full mb-2`}>
          GITHUB
        </button>
        <button
          onClick={() => openPage('mailto:melissaharijanto18@gmail.com')}
          className={`${buttons.rounded} ${fonts.subheading1} w-full`}>
          EMAIL
        </button>
      </div>
      <div>
        <span className={`${fonts['text-normal']}`}>
          I am an undergraduate studying <strong>Computer Science</strong> in
          the <strong>National University of Singapore</strong>. I have
          experience in <strong>Full Stack Development</strong> as well as using{' '}
          <strong>GenAI tools</strong>, such as using{' '}
          <strong>ChatGPT API</strong> for development. I am especially
          passionate about <strong>Frontend Development</strong>, whether it is
          for web or mobile applications. I love applying what I have learnt to
          real life projects.
        </span>
        <br />
        <br />
        <span className={`${fonts['text-normal']}`}>
          When I have free time, I love designing colorful graphics; whether it
          be posters, websites or anything random!
        </span>
      </div>
    </div>
  );
};

export default AboutComponent;