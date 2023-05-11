import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByGenres,
  filterCreated,
  getVideogames,
  orderGames,
} from "../../redux/actions";

import axios from "axios";

const endpointGenre = "http://localhost:3001/genres";

const Selectors = ({setCurrentPage}) => {
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

  const handleFilterGenre = (event) => {
    dispatch(filterByGenres(event.target.value));
    setGenre((genre = event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderGames(event.target.value));
    setCurrentPage(1)
    setAux(true);
  };
  const handleFilterCreated = (event) => {
    dispatch(filterCreated(event.target.value));
  };

  return (
    <div>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select
          onChange={(event) => handleFilterGenre(event)}
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
        <select onChange={handleFilterCreated}>
          <option value="All">All</option>

          <option value="created">Creados</option>
          <option value="api">De la Api</option>
        </select>
      </div>
    </div>
  );
};

export default Selectors;
