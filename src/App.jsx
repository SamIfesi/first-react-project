// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Welcome to the App</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main>
      <Header />
    </main>
  );
}

export default App;
