import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import navbar from '../constants/navbar';

const About: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link2}`}
      className="min-h-[90vh] flex flex-col items-center justify-center w-full p-8 md:p-16 lg:p-24">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>ABOUT</span>
      </div>
      <div className="border-black border-[1px] p-12 rounded-3xl shadow-project w-[75%] lg:w-[60%] gap-x-8 text-justify grid grid-cols-[3fr_7fr]">
        <div className="grid gap-y-2 w-full">
          <button className={`${buttons.rounded} ${fonts.subheading1} w-full`}>
            GITHUB
          </button>
          <button className={`${buttons.rounded} ${fonts.subheading1} w-full`}>
            EMAIL
          </button>
        </div>
        <div>
          <span className={`${fonts['text-normal']}`}>
            My name is Melissa, and I am an undergraduate studying in the
            National University of Singapore. I have experience in{' '}
            <strong>Full Stack Development</strong> as well as using{' '}
            <strong>GenAI tools</strong>, such as using{' '}
            <strong>ChatGPT API</strong> for development. I am especially
            passionate about <strong>Frontend Development</strong>, whether it
            is for web or mobile applications. I love applying what I've learnt
            to real life projects!
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
