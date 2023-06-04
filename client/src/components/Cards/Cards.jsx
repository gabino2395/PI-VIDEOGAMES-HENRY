import React from "react";
//css
import "./Cards.css";
//hooks
import { useState, useEffect } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../../redux/actions";
//components
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
const Cards = () => {
  const [loading, setLoading] = useState(true);
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
    
    setLoading(false);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getVideogames);
  };
  return (
    <>
      <div className="">
        {loading ? (
          <>
            <div className="card   skeleton">
              <div className="card-details ">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text text-skeleton"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
              <div
                className="skeleton img-skeleton"
                width="200px"
                height="250px"
              ></div>
            </div>
            <div className="card card2  skeleton">
              <div className="card-details ">
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text text-skeleton"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
              <div
                className="skeleton img-skeleton"
                width="200px"
                height="250px"
              ></div>
            </div>
          </>
        ) : (
          <>
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
                      loading={loading}
                      rating={el.rating}
                      id={el.id}
                      key={el.name}
                      name={el.name}
                      image={el.image}
                      genres={el.genres?.map((el) => el)}
                      created={el.created}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cards;
