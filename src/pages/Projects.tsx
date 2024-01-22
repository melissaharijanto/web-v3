import React, { ReactElement } from 'react';
import ProjectComponent from '../components/ProjectComponent';
import { Project, projects } from '../constants/projects';
import { fonts } from '../constants/styles';

const Projects: React.FC = (): ReactElement => {
  return (
    <div className="flex flex-col p-6 md:p-16 lg:p-24 w-100 justify-center items-center">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`}>PROJECTS</span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-10 lg:gap-x-14 lg:gap-y-14">
        {projects.map((project: Project) => (
          <ProjectComponent project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
