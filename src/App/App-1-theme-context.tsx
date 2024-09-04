import { useState } from "react";
import {
  BrowserRouter as BrowserRouterProvider,
  Switch,
  Route,
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import { Avatar, Button, createTheme, Stack, ThemeProvider } from "@mui/material";
import { LocationPage } from "../Pages/Location";

function AppThemeContext() {
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
                  <Avatar>{count}</Avatar>
                  <Button variant="contained" onClick={() => setCount(count + 1)}>Incrementar</Button>
                </Stack>
              </Route>
              <Route path="/*">

                <LocationPage />
              </Route>
            </Switch>
          </BrowserRouterProvider>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default AppThemeContext;
