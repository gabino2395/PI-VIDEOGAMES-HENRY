import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
const Home = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, []);

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
      <button onClick={(e) => handleClick(e)}>
        Volver a cargar los personajes
      </button>
      {/* componente de selectores */}
      <div>
        <select name="" id="">
          <option value="">Ascendente</option>
          <option value="">Descendente</option>
        </select>
        <select name="" id="">
          <option value="">todos los generos</option>
          <option value="">genero1</option>
          <option value="">genero2</option>
          <option value="">genero3</option>
        </select>
        <select name="" id="">
          <option value="">Creados</option>
          <option value="">De la Api</option>
        </select>
      </div>
      {/* componente de cards */}
      {allGames &&
        allGames.map((el) => {
          return (
            <Card
              name={el.name}
              image={el.image}
              genres={el.genres.map((el) => el)}
            />
          );
        })}
    </div>
  );
};

export default Home;
