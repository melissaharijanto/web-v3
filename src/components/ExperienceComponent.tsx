import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import { Experience } from '../constants/experiences';

const FormattedParagraph: React.FC<string> = ({ text }: string) => {
  const inputString = text;
  const formatString = (input: string) => {
    const parts = input.split('**');

    return parts.map((part, index) => {
      if (index % 2 === 0) {
        return <>{part}</>;
      } else {
        return <strong key={index}>{part}</strong>;
      }
    });
  };

  return (
    <span
      className={`${fonts['text-normal']} text-justify py-4 px-2 leading-6`}>
      {formatString(inputString)}
    </span>
  );
};

const ExperienceComponent: React.FC<Experience> = ({
  exp,
}: Experience): ReactElement => {
  return (
    <div className="bg-experience bg-cover bg-opacity-25 flex flex-col items-center border-black border-[1px] rounded-bl-xl rounded-tr-xl shadow-project p-6 w-full">
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
      <div className="flex flex-col items-center m-4 w-full">
        <span className={`${fonts.subheading1} text-center mb-1 leading-5`}>
          {exp.role.toUpperCase()}
        </span>
        <span className={`${fonts['text-normal']} text-center mb-1 leading-5 `}>
          {exp.company}
          {exp.type ? '\u2002|\u2002' + exp.type : null}
        </span>
        <span
          className={`${fonts['text-small']} text-xs text-center mb-3 opacity-[50%] leading-5`}>
          {exp.period.toUpperCase()}
        </span>
        <hr className="border-[0.5px] border-black/25 w-[65%]"></hr>
        <FormattedParagraph text={exp.description} />
        {exp.techStack ? (
          <div className="text-start w-full">
            <span className={`${fonts['text-normal']} font-bold`}>
              {/* Skills: &#8202; */}
              {exp.techStack?.map((ts, index) => (
                <>
                  <FormattedParagraph text={ts} />
                  {index < exp.techStack.length - 1 && (
                    <span>&#8202;&#8729;&#8202;</span>
                  )}
                </>
              ))}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ExperienceComponent;
