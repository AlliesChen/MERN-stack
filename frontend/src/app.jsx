// @ts-check

import { Router, route } from "preact-router";
import useAuthContext from "./hooks/useAuthContext";

// pages & components
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";
import { Login } from './pages/Login';
import { Signup } from "./pages/Signup";
import { Redirect } from "./components/Redirect";
import { useEffect } from "preact/hooks";

export function App() {
  const { state: userState } = useAuthContext();
  useEffect(() => {
    if (!userState.user) {
      route('/login', true);
    }
  }, [])
  return (
    <div class="App">
      <Navbar />
      <div class="pages">
        <Router>
          { userState.user ?
            <Home path="/"/> :
            <Redirect path="/" to="/login"/>
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
