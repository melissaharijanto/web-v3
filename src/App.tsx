import React, { ReactElement } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Mode } from './redux/features/modeSlice';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import About from './pages/About';
import NavigationBar from './components/NavigationBar';
import Footer from './pages/Footer';
import colors, { ColorScheme, Colors } from './constants/colors';

const App: React.FC = (): ReactElement => {
  const mode: Mode = useSelector((state: RootState) => state.config.mode);
  const bgColor: string = `${(colors[mode as keyof Colors] as ColorScheme).bg}`;

  return (
    <div style={{ backgroundColor: bgColor }}>
      <NavigationBar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
