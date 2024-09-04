import { useState } from "react";
import {
  BrowserRouter as BrowserRouterProvider,
  Switch,
  Route,
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import { Avatar, Button } from "@mui/material";
import { LocationPage } from "../Pages/Location";

function AppRouterContext() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <BrowserRouterProvider>
          <Switch>
            <Route exact path="/">
              <Avatar>{count}</Avatar>
              <Button onClick={() => setCount(count + 1)}>Incrementar</Button>
            </Route>
            <Route path="/*">
              <LocationPage />
            </Route>
          </Switch>
        </BrowserRouterProvider>
      </header>
    </div>
  );
}

export default AppRouterContext;
