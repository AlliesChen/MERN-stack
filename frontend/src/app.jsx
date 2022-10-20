// @ts-check

import Router from "preact-router";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";

export function App() {

  return (
    <div class="App">
      <Navbar />
      <div class="pages">
        <Router>
          <Home path="/"/>
        </Router>
      </div>
    </div>
  );
}
