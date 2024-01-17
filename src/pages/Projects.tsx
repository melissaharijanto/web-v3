import React, { ReactElement } from 'react';
import ProjectComponent from '../components/ProjectComponent';
import { Project, projects } from '../constants/projects';

const Projects: React.FC = (): ReactElement => {
  return (
    <div className="w-100 grid md:grid-cols-2 lg:grid-cols-3 p-12 md:p-16 lg:p-24 gap-x-10 gap-y-10">
      {projects.map((project: Project) => (
        <ProjectComponent project={project} />
      ))}
    </div>
  );
};

export default Projects;
