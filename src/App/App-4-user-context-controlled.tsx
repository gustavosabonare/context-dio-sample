import { useState } from "react";
import {
  BrowserRouter as BrowserRouterProvider,
  Switch,
  Route,
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import { createTheme, ThemeProvider } from "@mui/material";
import { CounterContext } from "../Context/CounterContext";
import { LocationPage } from "../Pages/Location";
import { HomeControlledPage } from "../Pages/Home";
import { ListControlledPage } from "../Pages/List";
import { UserProvider } from "../Context/UserContextControlled";
import { LoginPage } from "../Pages/Login";

function AppCountContext() {
  const [count] = useState(0);

  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <UserProvider>
          <CounterContext.Provider value={{ count }}>
            <ThemeProvider theme={theme}>
              <BrowserRouterProvider>
                <Switch>
                  <Route exact path="/">
                    <LoginPage />
                  </Route>
                  <Route exact path="/inicio">
                    <HomeControlledPage />
                  </Route>
                  <Route exact path="/lista">
                    <ListControlledPage />
                  </Route>
                  <Route path="/*">
                    <LocationPage />
                  </Route>
                </Switch>
              </BrowserRouterProvider>
            </ThemeProvider>
          </CounterContext.Provider>
        </UserProvider>

      </header>
    </div>
  );
}

export default AppCountContext;
