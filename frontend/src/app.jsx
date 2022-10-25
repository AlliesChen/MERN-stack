// @ts-check

import Router from "preact-router";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";
import { Login } from './pages/Login';
import { Signup } from "./pages/Signup";

export function App() {

  return (
    <div class="App">
      <Navbar />
      <div class="pages">
        <Router>
          <Home path="/"/>
          <Login path="login" />
          <Signup path="signup" />
        </Router>
      </div>
    </div>
  );
}
