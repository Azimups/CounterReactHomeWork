import React from 'react'
import './App.css';
import First from "./Items/first";
import Second from "./Items/second";
function App() {

  const[state,setState] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        {state? <First/> : <Second/>}
        <button onClick={()=>setState(!state)}>Click to change</button>
      </header>
    </div>
  );
}

export default App;
