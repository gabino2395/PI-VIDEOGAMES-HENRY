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
  // const [plataformas, setPlataformas] = useState([]);

  // useEffect(() => {
  //   async function obtenerPlataformas() {
  //     try {
  //       const respuesta = await axios.get(
  //         "https://api.rawg.io/api/platforms?key=968e8c96554f4a3691dd2632e72dac14"
  //       );
  //       const nombresPlataformas = respuesta.data.results.map(
  //         (plataforma) => plataforma.name
  //       );
  //       console.log(
  //         "esto es un console del llamado para plataformas de api en createGame"
  //       );
  //       setPlataformas(nombresPlataformas);
  //       console.log(nombresPlataformas)
  //     } catch (error) {
  //       console.error("Error al obtener datos de la API de Rawg: ", error);
  //     }
  //   }
  //   obtenerPlataformas();
  // }, []);

  const plataformas = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "Xbox One",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
  ];
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
    <div className="createGame-page">
      <Link to="/home">
        home
        {/* <button>volver</button> */}
      </Link>
      {/* <h1>Crear juego!</h1> */}
      {/* <Pong/> */}
      <div className="form-section-box">
        <img
          src="/ai-videogames-pic/photo6.png"
          className="form-section-img"
          alt="aca va imagen"
        />
        <form action="" className="main-form" onSubmit={handleSubmit}>
          <div className="input-field-box ">
            <label htmlFor="name">Name: </label>
            <input
              className="input-field"
              type="text"
              name="name"
              // onChange={(event) => handleChange(event)}
              onChange={handleChange}
              value={input.name}
              placeholder="Name*"
              required
            />
          </div>
          {error.name && <p className="error-form">{error.name}</p>}
          <div className="input-field-box ">
            <label htmlFor="released">Released: </label>
            <input
              // className="input-field"
              className="date-field"
              // className="rating-field"

              type="date"
              value={input.released}
              name="released"
              placeholder="Released*"
              // onChange={(e) => handleChange(e)}
              onChange={handleChange}
              required
            />
          </div>
          {error.released && <p className="error-form">{error.released}</p>}
          <div className="input-field-box ">
            <label htmlFor="rating">Rating: </label>
            <input
              className=" rating-field"
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
          </div>
          {error.rating && <p className="error-form">{error.rating}</p>}
          <div className="input-field-box ">
            <label htmlFor="image">Image: </label>
            <input
              className="input-field"
              type="url"
              value={input.image}
              name="image"
              placeholder="Image*"
              // onChange={(e) => handleChange(e)}
              onChange={handleChange}
              required
            />
          </div>
          {error.image && <p className="error-form">{error.image}</p>}
          <div className="input-field-box ">
            <label>Genres: </label>

            <select
              className="genres-field"
              onChange={handleSelectGenre}
              // onChange={(e) => handleSelectorGenres(e)}
              required
              value={input.genres}
            >
              {genres.map((el) => (
                <option className="input-field" value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>

            {/* {error.genres && <p>{error.genres}</p>} */}
          </div>

          <ul className="select-list">
            <li className="input-field select-list">
              {input.genres.map((el) => el + " -")}
            </li>
          </ul>
          {error.genres && <p className="error-form">{error.genres}</p>}



          {/* <div className="input-field-box ">
            <label>Platforms: </label> */}
{/* 
            <select
              className="genres-field"
              onChange={handleSelectGenre}
              // onChange={(e) => handleSelectorGenres(e)}
              required
              value={input.platforms}
            > */}
              {/* {plataformas.map((el) => (
                <option className="input-field" value={el}>
                  {el}
                </option>
              ))}
            </select> */}

            {/* {error.genres && <p>{error.genres}</p>}
          </div>
          <ul className="select-list">
            <li className=" input-field select-list">
              {input.platforms.map((el) => el + " ,")}
            </li>
          </ul> */}

          {error.platforms && <p className="error-form">{error.platforms}</p>}
          <div className="input-field-box ">
            <label htmlFor="plataformas">Plataformas: </label>

            <select
              className="genres-field"
              name="plataformas"
              value={input.platforms}
              onChange={handleSelectPlatform}
            >
              {plataformas.map((plataforma) => (
                <option
                  className="input-field"
                  key={plataforma}
                  value={plataforma}
                >
                  {plataforma}
                </option>
              ))}
            </select>

          </div>
            <ul className="select-list">
              <li className="select-list input-field ">
                {input.platforms.map((el) => el + " -")}
              </li>
            </ul>
          {error.platforms && <p className="error-form">{error.platforms}</p>}
          <div className="  textarea-box ">
            {/* <label>Description: </label> */}

            <textarea
              className="input-field textarea form-control"
              value={input.description}
              // onChange={(e) => handleChange(e)}
              onChange={handleChange}
              name="description"
              placeholder="Description*"
              rows="10"
              cols="45"
            >
              Escribe aquí tus comentarios
            </textarea>
          </div>
          {error.description && (
            <p className="error-form">{error.description}</p>
          )}
          <button className="comenzar-btn" type="submit">
            Crear juego
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGame;
/* 



*/
