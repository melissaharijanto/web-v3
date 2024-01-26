import React, { ReactElement } from 'react';
import { Project } from '../constants/projects';
import { fonts } from '../constants/styles';

interface ProjectComponentProps {
  project: Project;
}
const ProjectComponent = ({ project }: ProjectComponentProps): ReactElement => {
  return (
    <div className="flex flex-col rounded-2xl shadow-project border-[1px] border-black">
      <div className="w-100 px-6 py-4 flex items-center">
        <img
          src={project.icon}
          className="w-8 h-8 rounded-2xl mr-2 border-[1px] border-black"
          alt="Icon"
        />
        <span className={`${fonts['text-normal']} font-bold`}>
          {project.username}
        </span>
      </div>
      <div className="w-100 flex border-y-[1px] border-black">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="w-100 p-6 flex flex-col">
        <span className="text-justify">
          <span className={`${fonts['text-normal']} font-bold`}>
            {project.name}
          </span>
          <span className={`${fonts['text-normal']}`}>
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
              {index < project.links.length - 1 && <span>&ensp;|&ensp;</span>}
            </>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ProjectComponent;
