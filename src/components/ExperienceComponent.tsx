import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import { Experience } from '../constants/experiences';

const FormattedParagraph: React.FC<string> = ({ text }: string) => {
  const inputString = text;
  const formatString = (input: string) => {
    const parts = input.split('**');

    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <React.Fragment key={index}>{part}</React.Fragment>;
      } else {
        return <strong key={index}>{part}</strong>;
      }
    });
  };

  return (
    <span
      className={`${fonts['text-normal']} text-center mb-1 lg:text-start leading-6`}>
      {formatString(inputString)}
    </span>
  );
};

const ExperienceComponent: React.FC<Experience> = ({
  exp,
}: Experience): ReactElement => {
  return (
    <div className="flex flex-col items-center border-black border-[1px] rounded-bl-xl rounded-tr-xl shadow-project p-6 md:px-14 lg:px-18 w-full">
      {exp.image ? (
        <div className="mb-4">
          <img
            src={exp.image}
            className={exp.imageSize ? exp.imageSize : 'w-20'}
            h-auto
            alt={exp.image}
          />
        </div>
      ) : (
        <div />
      )}
      <div className="flex flex-col items-center">
        <span className={`${fonts.subheading1} text-center mb-1 leading-5`}>
          {exp.role.toUpperCase()}
        </span>
        <span className={`${fonts['text-normal']} text-center mb-1 leading-5`}>
          {exp.company}
          {exp.type ? '\u2002|\u2002' + exp.type : null}
        </span>
        <span
          className={`${fonts['text-small']} text-center mb-3 opacity-[50%] leading-5`}>
          {exp.period.toUpperCase()}
        </span>
        <hr className="border-[0.5px] border-black/25 w-[65%]"></hr>
        <ul className="list-disc ml-4 mt-3 text-justify">
          {exp.description.map((desc) => (
            <li>
              <FormattedParagraph text={desc}></FormattedParagraph>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceComponent;
