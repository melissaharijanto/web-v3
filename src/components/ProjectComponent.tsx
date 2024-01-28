import React, { ReactElement } from 'react';
import { Project } from '../constants/projects';
import { fonts } from '../constants/styles';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

interface ProjectComponentProps {
  project: Project;
}
const ProjectComponent = ({ project }: ProjectComponentProps): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  const bgColor: string = `${(colors[mode as keyof Colors] as ColorScheme).bg}`;

  return (
    <div
      className={`flex flex-col rounded-2xl ${
        mode === 'LIGHT' ? 'shadow-project' : 'shadow-dark-mobile'
      } border-[1px]`}
      style={{ borderColor: textColor }}>
      <div className="w-100 px-6 py-4 flex items-center">
        <img
          src={project.icon}
          className={`w-8 h-8 rounded-2xl mr-2 border-[1px] border-${textColor}`}
          style={{ color: textColor }}
          alt="Icon"
        />
        <span
          className={`${fonts['text-normal']} font-bold text-${textColor}`}
          style={{ color: textColor }}>
          {project.username}
        </span>
      </div>
      <div
        className={`w-100 flex border-y-[1px] border-${textColor}`}
        style={{ color: textColor }}>
        <img src={project.image} alt={project.name} />
      </div>
      <div className="w-100 p-6 flex flex-col">
        <span className="text-justify">
          <span
            className={`${fonts['text-normal']} font-bold text-${textColor}`}
            style={{ color: textColor }}>
            {project.name}
          </span>
          <span
            className={`${fonts['text-normal']} text-${textColor}`}
            style={{ color: textColor }}>
            &nbsp;&mdash;&nbsp;{project.description}
          </span>
        </span>
        <span className="mt-1">
          {project.links.map((link: string[], index: number) => (
            <>
              <a
                href={link[1]}
                target="_blank"
                rel="noreferrer"
                className={`${fonts['text-link']}`}>
                {link[0]}
              </a>
              {index < project.links.length - 1 && (
                <span style={{ color: textColor }}>&ensp;|&ensp;</span>
              )}
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectComponent;
