import React, { ReactElement, useState } from 'react';
import { fonts } from '../constants/styles';
import navbar from '../constants/navbar';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar: React.FC = (): ReactElement => {
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
    <div className="flex flex-col fixed w-full">
      <div
        className={`z-50 flex backdrop-blur-lg justify-between ${
          onTop ? 'bg-transparent' : 'bg-white/80'
        } border-[1px] border-black/10`}>
        <div className="flex justify-center items-center">
          <a href={`#${navbar.link1}`}>
            <img
              src={navbar['light-mode-logo']}
              alt="logo"
              className="w-24 md:w-28 mx-6 top-0 my-3 md:my-4"
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <div className="hidden md:flex justify-center items-center">
            <a href={`#${navbar.link1}`} className={linkStyle}>
              {navbar.link1.toUpperCase()}
            </a>
            <a href={`#${navbar.link2}`} className={linkStyle}>
              {navbar.link2.toUpperCase()}
            </a>
            <a href={`#${navbar.link3}`} className={linkStyle}>
              {navbar.link3.toUpperCase()}
            </a>
            <a href={`#${navbar.link4}`} className={`${linkStyle} mr-10`}>
              {navbar.link4.toUpperCase()}
            </a>
          </div>
          <div className="md:hidden flex mr-6 relative">
            <MenuIcon
              sx={{
                width: '30px',
                transform: open ? 'rotate(90deg)' : null,
                zIndex: 99,
              }}
              onClick={() => setOpen(() => !open)}
            />
          </div>
        </div>
      </div>
      <div className="w-full justify-end items-end flex">
        <div
          className={`md:hidden flex-col ${
            open ? 'flex' : 'hidden'
          } items-end bg-white/80 mt-2 mr-2 backdrop-blur-lg border-[1px] border-black/10 rounded-xl z-[99]`}>
          <a
            href={`#${navbar.link1}`}
            className={`${linkStyle} p-1 pt-2 border-black/50 `}>
            {navbar.link1.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link2}`}
            className={`${linkStyle} p-1 border-black/50 `}>
            {navbar.link2.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link3}`}
            className={`${linkStyle} p-1 border-black/50 `}>
            {navbar.link3.toUpperCase()}
          </a>
          <a
            href={`#${navbar.link4}`}
            className={`${linkStyle} p-1 pb-2 border-black/50 `}>
            {navbar.link4.toUpperCase()}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
