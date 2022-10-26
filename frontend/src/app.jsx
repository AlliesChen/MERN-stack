// @ts-check

import { Router } from "preact-router";
import useAuthContext from "./hooks/useAuthContext";

// pages & components
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";
import { Login } from './pages/Login';
import { Signup } from "./pages/Signup";
import { Redirect } from "./components/Redirect";

export function App() {
  const { state: userState } = useAuthContext();

  return (
    <div class="App">
      <Navbar />
      <div class="pages">
        <Router>
          { userState.user ?
            <Home path="/"/> :
            <Redirect path="/" to="login"/>
          }
          { !userState.user ?
            <Login path="login" /> :
            <Redirect path="/login" to="/" />
          }
          { !userState.user ?
            <Signup path="signup" /> :
            <Redirect path="/signup" to="/" />
          }
        </Router>
      </div>
    </div>
  );
}
