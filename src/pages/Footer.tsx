import React from 'react';
import { fonts } from '../constants/styles';

const Footer = () => {
  return (
    <div className="w-full py-12 px-6 flex flex-col justify-center items-center">
      <span className={`${fonts['text-normal']} text-center`}>
        Prototyped in <strong>Figma</strong>.{' '}
      </span>
      <span className={`${fonts['text-normal']} text-center`}>
        Built with <strong>React with Typescript</strong> and{' '}
        <strong>Tailwind CSS</strong>.
      </span>

      <span className={`${fonts['text-normal']} tracking-wide`}>
        Designed by <strong>Melissa</strong>. View on <strong>GitHub</strong>.
      </span>
    </div>
  );
};

export default Footer;
