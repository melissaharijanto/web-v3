import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Mode, switchToDarkMode } from './redux/features/modeSlice';

function App() {

  const mode : Mode = useSelector((state : RootState)=> state.config.mode);
  const dispatch = useDispatch();
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => dispatch(switchToDarkMode())}
        >
          {mode}
        </button>
      </header>
    </div>
  );
}

export default App;
