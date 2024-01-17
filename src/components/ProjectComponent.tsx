import React, { ReactElement } from 'react';
import TravelLog from '../assets/images/travel-log.png';
import { Project } from '../constants/projects';
import { fonts } from '../constants/styles';

const ProjectComponent = ({ project }: Project) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-project border-[1px] border-black">
      <div className="w-100 px-6 py-4 flex items-center">
        <img
          src={project.icon}
          className="w-8 h-8 rounded-2xl mr-2 border-[1px] border-black"
        />
        <span className={`${fonts['text-normal']} font-bold`}>
          {project.username}
        </span>
      </div>
      <div className="w-100 flex border-y-[1px] border-black">
        <img src={project.image} />
      </div>
      <div className="w-100 p-6 flex">
        <span className="text-justify">
          <span className={`${fonts['text-normal']} font-bold`}>
            {project.name}
          </span>
          <span className={`${fonts['text-normal']}`}>
            &nbsp;&mdash;&nbsp;{project.description}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ProjectComponent;
