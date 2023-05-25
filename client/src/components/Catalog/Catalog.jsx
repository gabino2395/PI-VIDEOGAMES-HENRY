import React from "react";
//css
import "./Selectors.css";
//hooks
import { useState, useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import {
  filterByGenres,
  filterCreated,
  orderGames,
  orderRating,
} from "../../redux/actions";
//components
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
//
import axios from "axios";
import { URL } from "../../Utils/Utils";
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
        const response = await axios.get(`${URL}/genres`);
        setGenres(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  const [errors, setErrors] = useState("");

  const [stateCard, setStateCard] = useState("Welcome");
  const handleOrder = (event) => {
    dispatch(orderGames(event.target.value));
    // setCurrentPage(1);
    setAux(true);
    setStateCard(event.target.value);
  };
  const handleOrderRate = (event) => {
    dispatch(orderRating(event.target.value));
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
            <select onChange={handleOrderRate}>
              <option value="">Rating</option>
              <option value="Best-rating">Best rating</option>
              <option value="Worst-rating">Worst rating</option>
            </select>
          </div>
          <div className="select">
            <select onChange={handleOrder}>
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
                  src="/ai-videogames-pic/photo7.png
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
