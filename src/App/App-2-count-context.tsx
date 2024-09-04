import { useState } from "react";
import {
  BrowserRouter as BrowserRouterProvider,
  Switch,
  Route,
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import { Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import CounterWithContext from "../Components/CounterWithContext";
import { CounterContext } from "../Context/CounterContext";
import { LocationPage } from "../Pages/Location";

function AppCountContext() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    palette: {
      mode: "dark"
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CounterContext.Provider value={{ count }}>
          <ThemeProvider theme={theme}>
            <BrowserRouterProvider>
              <Switch>
                <Route exact path="/">
                  <Stack direction="column"
                    spacing={2}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}>
                    <CounterWithContext />
                    <Button variant="contained" onClick={() => setCount(count + 1)}>Incrementar</Button>
                  </Stack>
                </Route>
                <Route path="/*">
                  <LocationPage />
                </Route>
              </Switch>
            </BrowserRouterProvider>
          </ThemeProvider>
        </CounterContext.Provider>
      </header>
    </div>
  );
}

export default AppCountContext;
