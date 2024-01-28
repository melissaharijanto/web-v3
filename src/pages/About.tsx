import React, { ReactElement } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import AboutComponent from '../components/AboutComponent';
import { Mode } from '../redux/features/modeSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import colors, { ColorScheme, Colors } from '../constants/colors';

const About: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  return (
    <div
      id={`${navbar.link2}`}
      className="min-h-[90vh] flex flex-col items-center justify-center w-full p-8 md:p-16 lg:p-24">
      <div className="mb-8 md:mb-14">
        <span className={`${fonts.heading1}`} style={{ color: textColor }}>
          ABOUT
        </span>
      </div>
      <AboutComponent />
    </div>
  );
};

export default About;
