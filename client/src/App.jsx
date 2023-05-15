import { useState } from "react";
import LandingPage from "./components/landing/landingPage";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/Detail/Detail";
import CreateGame from "./components/CreateGame/CreateGame";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createGame" element={<CreateGame />} />

      </Routes>
    </>
  );
}

export default App;
