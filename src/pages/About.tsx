import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import { openPage } from '../components/HeroComponent';

const About: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link2}`}
      className="min-h-[90vh] flex flex-col items-center justify-center w-full p-8 md:p-16 lg:p-24">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>ABOUT</span>
      </div>
      <div className="bg-about bg-cover bg-center border-black border-[1px] p-8 md:p-12 rounded-3xl shadow-project w-[75%] lg:w-[60%] gap-x-8 text-justify grid gap-y-4 md:gap-y-0 md:grid-cols-[3fr_7fr]">
        <div className="flex flex-col w-full order-last md:order-first">
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
            experience in <strong>Full Stack Development</strong> as well as
            using <strong>GenAI tools</strong>, such as using{' '}
            <strong>ChatGPT API</strong> for development. I am especially
            passionate about <strong>Frontend Development</strong>, whether it
            is for web or mobile applications. I love applying what I have
            learnt to real life projects.
          </span>
          <br />
          <br />
          <span className={`${fonts['text-normal']}`}>
            When I have free time, I love designing colorful graphics; whether
            it be posters, websites or anything random!
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
