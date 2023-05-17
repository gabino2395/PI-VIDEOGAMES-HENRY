import React, { useEffect, useState, useinput } from "react";
// import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postVideogames, getGenres } from "../../redux/actions";
import axios from "axios";
import validate from "./Validate";
import "./CreateGame.css";
import Pong from "../../components/Pong/Pong";
const CreateGame = () => {
  //////
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    async function obtenerPlataformas() {
      try {
        const respuesta = await axios.get(
          "https://api.rawg.io/api/platforms?key=968e8c96554f4a3691dd2632e72dac14"
        );
        const nombresPlataformas = respuesta.data.results.map(
          (plataforma) => plataforma.name
        );
        console.log( 'esto es un console del llamado para plataformas de api en createGame')
        setPlataformas(nombresPlataformas);
        // console.log(nombresPlataformas)
      } catch (error) {
        console.error("Error al obtener datos de la API de Rawg: ", error);
      }
    }
    obtenerPlataformas();
  }, []);

  ////////
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genres = useSelector((input) => input.genres);
  const videogames = useSelector((input) => input.videogames);
  const [error, setError] = useState({});
  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    image: "",
    platforms: [],
    genres: [],
    rating: "",
  });
  useEffect(() => {
    dispatch(getGenres());
  }, []);
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
    // console.log(input)
  };
  const handleSelectGenre = (event) => {
    setInput({
      ...input,
      genres: [...input.genres, event.target.value],
    });
    setError(
      validate({
        ...input,
        genres: [...input.genres, event.target.value],
      })
    );
  };
  const handleSelectPlatform = (event) => {
    setInput({
      ...input,
      platforms: [...input.platforms, event.target.value],
    });
    setError(
      validate({
        ...input,
        platforms: [...input.platforms, event.target.value],
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validate(input));
    const errorSave = validate(input);
    if (Object.values(errorSave).length !== 0) {
      alert("Please, fullfil the required camps.");
    } else {
      dispatch(postVideogames(input));
      alert("personaje creado");
      setInput({
        name: "",
        description: "",
        released: "",
        image: "",
        platforms: [],
        genres: [],
        rating: Number,
      });
      navigate("/");
    }
  };
  return (
    <div>
      <Link to="/home">
        home
        {/* <button>volver</button> */}
      </Link>
      {/* <h1>Crear juego!</h1> */}
      {/* <Pong/> */}

      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            // onChange={(event) => handleChange(event)}
            onChange={handleChange}
            value={input.name}
            placeholder="Name*"
            required
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="released">Released: </label>
          <input
            type="date"
            value={input.released}
            name="released"
            placeholder="Released*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            required
          />
          {error.released && <p>{error.released}</p>}
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            value={input.rating}
            name="rating"
            placeholder="Rating*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            min={0}
            max={5}
            required
          />
          {error.rating && <p>{error.rating}</p>}
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="url"
            value={input.image}
            name="image"
            placeholder="Image*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            required
          />
          {error.image && <p>{error.image}</p>}
        </div>
        <div>
          <label>Genres: </label>

          <select
            onChange={handleSelectGenre}
            // onChange={(e) => handleSelectorGenres(e)}
            required
            value={input.genres}
          >
            {genres.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </select>
          {error.genres && <p>{error.genres}</p>}

          <ul>
            <li>{input.genres.map((el) => el + " ,")}</li>
          </ul>
          {/* {error.genres && <p>{error.genres}</p>} */}
        </div>
        <label htmlFor="plataformas">Plataformas: </label>

        <select
          name="plataformas"
          value={input.platforms}
          onChange={handleSelectPlatform}
        >
          {plataformas.map((plataforma) => (
            <option key={plataforma} value={plataforma}>
              {plataforma}
            </option>
          ))}
        </select>
        {error.platforms && <p>{error.platforms}</p>}

        <ul>
          <li>{input.platforms.map((el) => el + " ,")}</li>
        </ul>

        <div></div>

        <div>
          <div>
            {/* <label>Description: </label> */}
            <textarea
              value={input.description}
              // onChange={(e) => handleChange(e)}
              onChange={handleChange}
              name="description"
              placeholder="Description*"
              rows="10"
              cols="55"
            >
              Escribe aquí tus comentarios
            </textarea>
            {error.description && <p>{error.description}</p>}
          </div>
        </div>
        <button type="submit">Crear juego</button>
      </form>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            // onChange={(event) => handleChange(event)}
            onChange={handleChange}
            value={input.name}
            placeholder="Name*"
            required
          />
          {error.name && <p>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="released">Released: </label>
          <input
            type="date"
            value={input.released}
            name="released"
            placeholder="Released*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            required
          />
          {error.released && <p>{error.released}</p>}
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input
            type="number"
            value={input.rating}
            name="rating"
            placeholder="Rating*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            min={0}
            max={5}
            required
          />
          {error.rating && <p>{error.rating}</p>}
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="url"
            value={input.image}
            name="image"
            placeholder="Image*"
            // onChange={(e) => handleChange(e)}
            onChange={handleChange}
            required
          />
          {error.image && <p>{error.image}</p>}
        </div>
        <div>
          <label>Genres: </label>

          <select
            onChange={handleSelectGenre}
            // onChange={(e) => handleSelectorGenres(e)}
            required
            value={input.genres}
          >
            {genres.map((el) => (
              <option value={el.name}>{el.name}</option>
            ))}
          </select>
          {error.genres && <p>{error.genres}</p>}

          <ul>
            <li>{input.genres.map((el) => el + " ,")}</li>
          </ul>
          {/* {error.genres && <p>{error.genres}</p>} */}
        </div>
        <label htmlFor="plataformas">Plataformas: </label>

        <select
          name="plataformas"
          value={input.platforms}
          onChange={handleSelectPlatform}
        >
          {plataformas.map((plataforma) => (
            <option key={plataforma} value={plataforma}>
              {plataforma}
            </option>
          ))}
        </select>
        {error.platforms && <p>{error.platforms}</p>}

        <ul>
          <li>{input.platforms.map((el) => el + " ,")}</li>
        </ul>

        <div></div>

        <div>
          <div>
            {/* <label>Description: </label> */}
            <textarea
              value={input.description}
              // onChange={(e) => handleChange(e)}
              onChange={handleChange}
              name="description"
              placeholder="Description*"
              rows="10"
              cols="55"
            >
              Escribe aquí tus comentarios
            </textarea>
            {error.description && <p>{error.description}</p>}
          </div>
        </div>
        <button type="submit">Crear juego</button>
      </form>
    </div>
  );
};

export default CreateGame;
/* 



*/
