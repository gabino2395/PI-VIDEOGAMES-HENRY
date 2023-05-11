import React from "react";
import axios from "axios";
// import { getVideogames } from "../../redux/actions";
import Selectors from "../selectors/Selectors";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";


const Home = () => {
  

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getVideogames);
  };

  return (
    <div>
      {" "}
      Este es el Home
      {/* componente de nav */}
      <Link to={"/createGame"}>Crear videojuego</Link>
      <h1>Videogames page</h1>
      <Cards />
    </div>
  );
};

export default Home;
