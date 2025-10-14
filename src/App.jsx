import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <main>
        <div className="card">
          <Header />
        </div>
      </main>
    </>
  );
}

export default App;
