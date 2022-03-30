import logo from './logo.svg';
import './App.css';

import {React, useState } from "react";
import "./App.css";


function App() {
  const [counter, setCounter] = useState(0)

  const handleClickAdd = () => {
    setCounter(counter + 1)
  }

  const handleClickRemove = () => {
    setCounter(counter - 1)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
    }}>
      Counter
      <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginRight: '5px',
          backgroundColor: 'green',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClickAdd}>+</button>
        <button style={{
          fontSize: '60%',
          position: 'relative',
          top: '20vh',
          marginLeft: '5px',
          backgroundColor: 'red',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClickRemove}>-</button>
      </div>
    </div>
  )
}


export default App;
