import React from 'react';
import './App.css';
import News from './components/News/News'
import Weather from './components/weather/Weather'

function App() {

  return (
    <div className="App">
      <News />
      <Weather />
    </div>
  );
}

export default App;
