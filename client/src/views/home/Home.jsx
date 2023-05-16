import React from "react";
import axios from "axios";
// import { getVideogames } from "../../redux/actions";
// import Selectors from "../selectors/Selectors";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import CreateGame from "../CreateGame/CreateGame";


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
      <SearchBar/>
<CreateGame/>
      <Cards />
    </div>
  );
};

export default Home;
