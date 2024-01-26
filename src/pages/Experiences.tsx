import React, { ReactElement } from 'react';
import { buttons, fonts } from '../constants/styles';
import ExperienceComponent from '../components/ExperienceComponent';
import { experiences } from '../constants/experiences';
import navbar from '../constants/navbar';
import { hero } from '../constants/hero';

const Experiences: React.FC = (): ReactElement => {
  return (
    <div
      id={`${navbar.link3}`}
      className="flex flex-col items-center justify-center w-full p-6 md:p-16 lg:p-24 ">
      <div className="flex flex-col justify-center items-center mb-8 md:mb-14">
        <span className={`${fonts.heading1} mb-4`}>EXPERIENCES</span>
        <a
          href={hero.buttonLink1}
          className={`${buttons.rounded} ${fonts.subheading1}`}>
          VIEW MY RESUME
        </a>
      </div>
      <div className="grid lg:grid-cols-2 w-full lg:w-[80%] gap-y-6 lg:gap-x-6">
        {experiences.map((exp) => (
          <ExperienceComponent exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
