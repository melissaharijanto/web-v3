import React, { ReactElement } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Mode, switchToDarkMode } from './redux/features/modeSlice';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import About from './pages/About';

const App: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const dispatch = useDispatch();

  return (
    <div>
      <Hero />
      <About />
      <Experiences />
      <Projects />
    </div>
  );
};

export default App;
