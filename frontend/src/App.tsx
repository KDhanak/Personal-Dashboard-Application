import React from 'react';
import './App.css';
import News from './components/News/News'
import Weather from './components/weather/Weather'
import TaskManager from './components/Task Manager/Task_Manager';

function App() {

  return (
  <div className="App flex flex-col bg-mainBg">
        <div className="mb-4">
          <Weather />
        </div>
        
        <div className="flow-root mt-60">
          <div className="w-full float-right lg:w-1/2">
            <TaskManager />
          </div>
          <div className="w-full float-left lg:w-1/2">
            <News />
          </div>
        </div>
  </div>
  );
}

export default App;
