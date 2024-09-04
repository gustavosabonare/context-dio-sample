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
import { HomeCombinedPage } from "../Pages/Home";
import { ListCombinedPage } from "../Pages/List";
import { LoginCombinedPage } from "../Pages/Login";
import { UserCombinedProvider } from "../Context/UserContextCombined";
import AuthListener from "../Components/AuthListener";

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
        
        <UserCombinedProvider>
          <AuthListener />
          <CounterContext.Provider value={{ count }}>
            <ThemeProvider theme={theme}>
              <BrowserRouterProvider>
                <Switch>
                  <Route exact path="/">
                    <LoginCombinedPage />
                  </Route>
                  <Route exact path="/inicio">
                    <HomeCombinedPage />
                  </Route>
                  <Route exact path="/lista">
                    <ListCombinedPage />
                  </Route>
                  <Route path="/*">
                    <LocationPage />
                  </Route>
                </Switch>
              </BrowserRouterProvider>
            </ThemeProvider>
          </CounterContext.Provider>
        </UserCombinedProvider>

      </header>
    </div>
  );
}

export default AppCountContext;
