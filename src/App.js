import React from 'react';
import './App.css';
import Home from './screens/Home';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
      <NavBar>
        App Hooks App 
      </NavBar>
      <Home />
    </div>
  );
}

export default App;
