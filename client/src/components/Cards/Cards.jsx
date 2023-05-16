import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
// import Paginado from "../Paginated";
import Selectors from "../Catalog/Catalog";
import Paginated from "../Paginated/Paginated";
import "./Cards.css";
import Catalog from "../Catalog/Catalog";
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
  // const allGames = useSelector((state) => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
    console.log('cuantas veces renderizas desde cards')
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getVideogames);
  };
  return (
    <>
      <div className="">
        {" "}
        {/* <button onClick={(e) => handleClick(e)}>
        Volver a cargar los personajes
      </button> */}
        {/* <Selectors setCurrentPage={setCurrentPage} /> */}
        {/* <Catalog setCurrentPage={setCurrentPage}/> */}
        <Paginated
          gamesPerPage={gamesPerPage}
          allGames={allGames.length}
          paginated={paginated}
        />
        <div className="cards-container">
          {allGames &&
            currentGames.map((el) => {
              return (
                <Card
                  rating={el.rating}
                  id={el.id}
                  key={el.name}
                  name={el.name}
                  image={el.image}
                  genres={el.genres?.map((el) => el)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cards;
