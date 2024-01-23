import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import ExperienceComponent from '../components/ExperienceComponent';
import { experiences } from '../constants/experiences';

const Experiences: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-6 md:p-16 lg:p-24 ">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>EXPERIENCES</span>
      </div>
      <div className="grid md:grid-cols-2 w-100 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 lg:gap-x-10 lg:gap-y-10">
        {experiences.map((exp) => (
          <ExperienceComponent exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
