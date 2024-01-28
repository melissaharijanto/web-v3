import React, { ReactElement, useEffect, useState } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import MenuIcon from '@mui/icons-material/Menu';
import ModeToggleSwitch from './ModeToggleSwitch';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Mode } from '../redux/features/modeSlice';
import colors, { ColorScheme, Colors } from '../constants/colors';

const NavigationBar: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const textColor: string = `${
    (colors[mode as keyof Colors] as ColorScheme).text
  }`;
  const bgColor: string = `${(colors[mode as keyof Colors] as ColorScheme).bg}`;

  const linkStyle = `${fonts['text-small']} hover:font-extrabold transition-all ease-in cursor-pointer mx-4`;

  const [onTop, setOnTop] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  });
  return (
    <div className="flex flex-col fixed w-full z-50 ">
      <div
        className={`flex backdrop-blur-lg justify-between
        } border-b-[1px] border-b`}
        style={{
          backgroundColor: onTop ? 'transparent' : `${bgColor}80`,
          borderColor: `${textColor}20`,
        }}>
        <div className="flex justify-center items-center">
          <a href={`#${navbar.link1}`}>
            <img
              src={
                mode === 'LIGHT'
                  ? navbar['light-mode-logo']
                  : navbar['dark-mode-logo']
              }
              alt="logo"
              className="w-20 md:w-28 mx-6 top-0 my-3 md:my-4"
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden lg:flex justify-center items-center">
            <ModeToggleSwitch />
            <a
              href={`#${navbar.link1}`}
              className={linkStyle}
              style={{ color: `${textColor}` }}>
              {navbar.link1.toUpperCase()}
            </a>
            <a
              href={`#${navbar.link2}`}
              className={linkStyle}
              style={{ color: `${textColor}` }}>
              {navbar.link2.toUpperCase()}
            </a>
            <a
              href={`#${navbar.link3}`}
              className={linkStyle}
              style={{ color: `${textColor}` }}>
              {navbar.link3.toUpperCase()}
            </a>
            <a
              href={`#${navbar.link4}`}
              className={`${linkStyle} mr-10`}
              style={{ color: `${textColor}` }}>
              {navbar.link4.toUpperCase()}
            </a>
          </div>
          <div className="lg:hidden flex mr-6 relative">
            <MenuIcon
              sx={{
                width: '30px',
                transform: open ? 'rotate(90deg)' : null,
                zIndex: 99,
                color: textColor,
              }}
              onClick={() => setOpen(() => !open)}
            />
          </div>
        </div>
      </div>
      <div className="w-full justify-end items-end flex">
        <div
          className={`lg:hidden flex-col ${
            open ? 'flex' : 'hidden'
          } items-end mt-2 mr-2 backdrop-blur-lg border-[1px] rounded-xl z-[99]`}
          style={{
            backgroundColor: `${bgColor}80`,
            borderColor: `${textColor}20`,
          }}>
          <a
            href={`#${navbar.link1}`}
            className={`${linkStyle} p-1 pt-2 border-black/50`}
            style={{ color: `${textColor}` }}>
            {navbar.link1.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link2}`}
            className={`${linkStyle} p-1 border-black/50`}
            style={{ color: `${textColor}` }}>
            {navbar.link2.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link3}`}
            className={`${linkStyle} p-1 border-black/50`}
            style={{ color: `${textColor}` }}>
            {navbar.link3.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link4}`}
            className={`${linkStyle} p-1 pb-2 border-black/50`}
            style={{ color: `${textColor}` }}>
            {navbar.link4.toUpperCase()}
          </a>
          <div className="p-1 pb-4">
            <ModeToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
