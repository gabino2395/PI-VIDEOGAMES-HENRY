import { useState } from "react";
import LandingPage from "./views/landing/landingPage";
// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import Detail from "./components/Detail/Detail";
import CreateGame from "./views/CreateGame/CreateGame";
import Nav from "./components/Nav/Nav";
import HeroSection from "./views/landing/HeroSection";
import Pong from "./components/Pong/Pong";
import EditGame from "./views/EditGame/EditGame";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={< HeroSection/>} />
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/pong" element={<Pong/>} />

        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/editGame/:id" element={<EditGame />} />

      </Routes>
    </>
  );
}

export default App;
