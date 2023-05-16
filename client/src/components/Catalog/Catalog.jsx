import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenres,
  filterCreated,
  // getGenres,
  getVideogames,
  orderGames,
} from "../../redux/actions";

import axios from "axios";
import TransitionComp from "../transitionComp/TransitionComp.jsX";
import Cards from "../Cards/Cards";
import "./Selectors.css";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
const endpointGenre = "http://localhost:3001/genres";

const Catalog = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);
  let [genre, setGenre] = useState("All genres");
  const [aux, setAux] = useState(false);

  useEffect(() => {
    dispatch(filterByGenres);
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpointGenre);
        setGenres(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const [errors, setErrors] = useState("");

  const [stateCard, setStateCard] = useState("Welcome");
  // const handleGenre = (event) => {
  //   dispatch(getGenres(event.target.value));
  //   setGenre((genre = event.target.value));
  // };
  const handleOrder = (event) => {
    dispatch(orderGames(event.target.value));
    // setCurrentPage(1);
    setAux(true);
    setStateCard(event.target.value);
  };
  const handleFilterGenre = (event) => {
    dispatch(filterByGenres(event.target.value));
    setGenre((genre = event.target.value));
    setStateCard(event.target.value);
  };

  const handleFilterCreated = (event) => {
    dispatch(filterCreated(event.target.value));
    setStateCard(event.target.value);
  };

  return (
    <>
      <div className="cards-main-container">
        <div className="filter-inputs-box">
          <div className="box">
            <SearchBar
              setErrors={setErrors}
              setStateCard={setStateCard}
              className="select input-bar"
            />
          </div>
          <div className="select">
            <select onChange={handleOrder}>
              {/* <option value="All">All</option> */}
              <option value="Ascendant">Ascendant</option>
              <option value="Descendant">Descendant</option>
            </select>
          </div>

          <div className="select-genres">
            <select
              onChange={(event) => handleFilterGenre(event)}
              // onChange={(event) => handleGenre(event)}
              name="All genres"
              id=""
              value={genre}
            >
              <option
                value="All genres"
                //  selected="true"
                //   disabled="disabled"
              >
                All genres
              </option>

              {genres.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="select">
            <select name="Videogames" onChange={handleFilterCreated}>
              <option value="All">Origin</option>

              <option value="All">All</option>

              <option value="Created">Created</option>
              <option value="From the API">From the API</option>
            </select>
          </div>
        </div>

        <div className="cards-catalog">
          <div className="filter-card-box">
            {errors && <p className="error-text">{errors}</p>}
            {/* muestra los creados */}
            {stateCard === "Created" && (
              <>
                <p className="filter-title">{stateCard}</p>
                <img
                  className="filter-card-img"
                  src="/ai-videogames-pic/photo1.png
"
                  alt=""
                />
              </>
            )}
            {stateCard === "From the API" && (
              <>
                <p className="filter-title">{stateCard}</p>
                <img
                  className="filter-card-img"
                  src="/ai-videogames-pic/photo3.png
"
                  alt=""
                />
              </>
            )}
            {/* muestra los de los generos */}
            {stateCard != "Created" && stateCard != "From the API" && (
              <>
                <p className="filter-title">{stateCard}</p>
                <img
                  className="filter-card-img"
                  src="/ai-videogames-pic/photo2.png
"
                  alt=""
                />
              </>
            )}
          </div>
          <Cards />
        </div>
      </div>
      {/* <form>
        <div className="form-group">
          <input type="" name="" value="" hola />
          <label htmlFor="hola">hola:</label>
          <input type="" name="" value="" hola />
          <label htmlFor="hola">hola:</label>{" "}
          <input type="" name="" value="" hola />
          <label htmlFor="hola">hola:</label>{" "}
          <input type="" name="" value="" hola />
          <label htmlFor="hola">hola:</label>
        </div>
      </form> */}
    </>
  );
};

export default Catalog;
