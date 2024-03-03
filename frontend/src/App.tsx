import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get("http://localhost:8000/core/weather")
        console.log(response.data["lat"])
      }catch (error){
        console.error("Error fetching data", error)
      }
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
