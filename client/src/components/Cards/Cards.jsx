import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado";
import Selectors from "../selectors/Selectors";

const Cards = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.videogames);
  //primero declaramos estado de pagina actual que arranca en 1
  const [currentPage, setCurrentPage] = useState(1);

  //luego un estado con la cantidad de juegos por page
  const [gamesPerPage, setGamesPerPage] = useState(15);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexOfFirstGame, indexOfLastGame);

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
      <button onClick={(e) => handleClick(e)}>
        Volver a cargar los personajes
      </button>
      <Selectors setCurrentPage={setCurrentPage}/>

      <Paginado
        gamesPerPage={gamesPerPage}
        allGames={allGames.length}
        paginated={paginated}
      />

      {allGames &&
        currentGames.map((el) => {
          return (
            <Card
              key={el.name}
              name={el.name}
              image={el.image}
              // genres={el.genres.map((el) => el)}
              // genres={el.genres.map((el)=>{
              //   return(
              //     el
              //   )
              // })}
            />
          );
        })}
    </div>
  );
};

export default Cards;
