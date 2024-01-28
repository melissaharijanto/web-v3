import React, { ReactElement, useState } from 'react';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  Mode,
  switchToDarkMode,
  switchToLightMode,
} from '../redux/features/modeSlice';
import colors, { ColorScheme, Colors } from '../constants/colors';

// taken from https://readymadeui.com/tailwind-components/form/switch-button and recustomized
const ModeToggleSwitch: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const dispatch = useDispatch();
  const textColor: string = (colors[mode as keyof Colors] as ColorScheme).text;

  return (
    <div className="flex justify-center items-center mx-4">
      <LightModeIcon sx={{ mr: 1, color: textColor }} />
      <label className="relative cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => {
            mode === 'LIGHT'
              ? dispatch(switchToDarkMode())
              : dispatch(switchToLightMode());
          }}
        />
        <div
          className="w-11 h-6 flex items-center bg-white border-[1px] border-black 
        rounded-full peer peer-checked:after:translate-x-full
        after:absolute after:left-[2px] peer-checked:after:border-white 
        after:bg-black after:border-[1px] after:border-black after:rounded-full 
        after:h-5 after:w-5 after:transition-all peer-checked:border-white peer-checked:border-[1px] peer-checked:bg-black peer-checked:after:bg-white"
        />
      </label>
      <ModeNightIcon sx={{ ml: 1, color: textColor }} />
    </div>
  );
};

export default ModeToggleSwitch;
