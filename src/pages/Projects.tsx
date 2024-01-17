import React, { ReactElement } from 'react';
import ProjectComponent from '../components/ProjectComponent';
import { Project, projects } from '../constants/projects';

const Projects: React.FC = (): ReactElement => {
  return (
    <div className="w-100 grid grid-cols-3 p-24 gap-x-10 gap-y-10">
      {projects.map((project: Project) => (
        <ProjectComponent project={project} />
      ))}
    </div>
  );
};

export default Projects;
