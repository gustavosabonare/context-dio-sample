import { useState } from "react";
import {
  BrowserRouter as BrowserRouterProvider,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import logo from '../logo.svg';
import '../App.css';

import { Button, createTheme, Stack, TextField, ThemeProvider } from "@mui/material";
import { CounterContext } from "../Context/CounterContext";
import { LocationPage } from "../Pages/Location";
import { HomePage } from "../Pages/Home";
import { UserContext } from "../Context/UserContext";
import { ListPage } from "../Pages/List";

function AppCountContext() {
  const [count] = useState(0);
  const [user, setUser] = useState("");

  const theme = createTheme({
    palette: {
      mode: "dark"
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <UserContext.Provider value={user}>
          <CounterContext.Provider value={{ count }}>
            <ThemeProvider theme={theme}>
              <BrowserRouterProvider>
                <Switch>
                  <Route exact path="/">
                    <Stack direction="column" spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
                      <TextField variant="outlined" label="login" onChange={e => setUser(e.target.value)} />
                      <Link to="/inicio"><Button variant="contained">Login</Button></Link>
                    </Stack>
                  </Route>
                  <Route exact path="/inicio">
                    <HomePage />
                  </Route>
                  <Route exact path="/lista">
                    <ListPage />
                  </Route>
                  <Route path="/*">
                    <LocationPage />
                  </Route>
                </Switch>
              </BrowserRouterProvider>
            </ThemeProvider>
          </CounterContext.Provider>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default AppCountContext;
