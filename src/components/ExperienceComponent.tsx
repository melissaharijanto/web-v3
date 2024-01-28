import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import { Experience } from '../constants/experiences';
import FormattedParagraph from './FormattedParagraph';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

interface ExperienceComponentProps {
  exp: Experience;
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ({
  exp,
}: ExperienceComponentProps): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  return (
    <div
      className={`${
        mode === 'LIGHT'
          ? 'bg-experience shadow-project'
          : 'bg-exp-dark shadow-dark-mobile'
      } bg-cover bg-opacity-25 flex flex-col items-center border-[1px] rounded-bl-xl rounded-tr-xl p-6 w-full`}
      style={{ color: textColor, borderColor: textColor }}>
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
        <hr
          className="border-[0.5px] w-[65%]"
          style={{ borderColor: `${textColor}30` }}></hr>
        <FormattedParagraph
          text={exp.description}
          className="py-4 px-2 leading-6"
        />
        {exp.techStack ? (
          <div className="text-start w-full">
            <span className={`${fonts['text-normal']} font-bold`}>
              {/* Skills: &#8202; */}
              {exp.techStack?.map((ts, index: number) => (
                <>
                  <FormattedParagraph
                    text={ts}
                    className="py-4 px-2 leading-6"
                  />
                  {index < exp.techStack!.length - 1 && (
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
