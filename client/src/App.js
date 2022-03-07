import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [taskList, setTaskList] = useState({})

  useEffect(()=>{
    axios.get("/tasks").then((result) => {
      setTaskList(result.data)
      console.log(result)
    } 
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <div>task</div>
      </main>
    </div>
  );
}

export default App;
