import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Mode, switchToDarkMode } from './redux/features/modeSlice';
import HeroComponent from './components/HeroComponent';
import Hero from './pages/Hero';
import Projects from './pages/Projects';

function App() {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const dispatch = useDispatch();

  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
