import React, { ReactElement } from 'react';
import ProjectComponent from '../components/ProjectComponent';
import { Project, projects } from '../constants/projects';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

const Projects: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  return (
    <div
      id={`${navbar.link4}`}
      className="flex flex-col p-6 md:p-16 lg:p-24 w-100 justify-center items-center">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`} style={{ color: textColor }}>
          PROJECTS
        </span>
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
