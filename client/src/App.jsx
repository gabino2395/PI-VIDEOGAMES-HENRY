//hooks
import { useEffect, useState } from "react";
//router
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
//redux
import { cleanGames } from "./redux/actions";
import { useDispatch } from "react-redux";
//
import axios from "axios";
//components
import Detail from "./components/Detail/Detail";
import CreateGame from "./views/CreateGame/CreateGame";
import Nav from "./components/Nav/Nav";
import HeroSection from "./views/landing/HeroSection";
import Pong from "./components/Pong/Pong";
import EditGame from "./views/EditGame/EditGame";
import Landing from "./views/landing/Landing";
import LandingPage from "./views/landing/LandingPage";
import { URL } from "./Utils/Utils";
function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const shownav = location.pathname !== "/";
  const [access, setAccess] = useState(false);
  const [response, setResponse] = useState("");

  const login = async (userData) => {
    try {
      const { data } = await axios.post(`${URL}/user/login`, userData);
      const access = data.access;
      setAccess(access);
      access && navigate("/heroSection");
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    dispatch(cleanGames());
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);
  return (
    <>
      {shownav && <Nav logOut={logOut} />}
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              login={login}
              response={response}
              setResponse={setResponse}
            />
          }
        />

        <Route path="/heroSection" element={<HeroSection />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/pong" element={<Pong />} />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/editGame/:id" element={<EditGame />} />
      </Routes>
    </>
  );
}

export default App;
