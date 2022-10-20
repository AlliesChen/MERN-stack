import Router from "preact-router";
import { useState } from "preact/hooks";
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar";

export function App() {
  const [count, setCount] = useState(0);

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
