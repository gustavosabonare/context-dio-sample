import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Avatar, Button } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Avatar>{count}</Avatar>
        <Button variant="contained" onClick={() => setCount(count + 1)}>Incrementar</Button>
      </header>
    </div>
  );
}

export default App;
