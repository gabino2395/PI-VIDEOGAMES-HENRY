//css
import "./CreateGame.css";
//hooks
import React, { useEffect, useState, useinput } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
import { postVideogames, getGenres } from "../../redux/actions";
//router
import { Link, useNavigate } from "react-router-dom";
import validate from "./Validate";
import { plataformas } from "../../Utils/Utils";
const CreateGame = () => {
  //////

  // const plataformas = [
  //   "PC",
  //   "PlayStation 5",
  //   "PlayStation 4",
  //   "Xbox One",
  //   "Xbox Series S/X",
  //   "Nintendo Switch",
  //   "iOS",
  //   "Android",
  //   "Nintendo 3DS",
  //   "Nintendo DS",
  //   "Nintendo DSi",
  //   "macOS",
  //   "Linux",
  //   "Xbox 360",
  //   "Xbox",
  //   "PlayStation 3",
  //   "PlayStation 2",
  //   "PlayStation",
  //   "PS Vita",
  //   "PSP",
  //   "Wii U",
  //   "Wii",
  //   "GameCube",
  //   "Nintendo 64",
  //   "Game Boy Advance",
  //   "Game Boy Color",
  //   "Game Boy",
  //   "SNES",
  //   "NES",
  //   "Classic Macintosh",
  //   "Apple II",
  //   "Commodore / Amiga",
  //   "Atari 7800",
  //   "Atari 5200",
  //   "Atari 2600",
  //   "Atari Flashback",
  //   "Atari 8-bit",
  //   "Atari ST",
  //   "Atari Lynx",
  //   "Atari XEGS",
  //   "Genesis",
  //   "SEGA Saturn",
  //   "SEGA CD",
  //   "SEGA 32X",
  //   "SEGA Master System",
  //   "Dreamcast",
  //   "3DO",
  //   "Jaguar",
  //   "Game Gear",
  //   "Neo Geo",
  // ];
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
  const [disable, setDisable] = useState(false);
  function validate(input) {
    let error = {};

    if (!input.name) {
      if (typeof input.name === "string") {
        error.name = "The entered value is not valid.";
      }
      error.name = "This field is required.";
    } else if (input.name.length > 30) {
      error.name = "Please write a shorter name";
    }
    if (
      !input.image.includes("https://" || "http://") ||
      !input.image.includes(".jpg" || ".png" || ".gif")
    ) {
      error.image = "Enter a valid URL (.jpg, .png, .gif)";
    }
    if (
      !input.description ||
      input.description.length < 30 ||
      input.description.length > 200
    ) {
      error.description =
        "Please, enter a minimum description of 30 characters.";
    }
    if (!input.released) {
      if (
        !/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          input.released
        )
      ) {
        error.released = "Error.";
      }
    }
    if (!input.rating || input.rating < 0 || input.rating > 5) {
      error.rating = "The rating must be < 0 & > 5...";
    }

    if (!input.genres.length) {
      error.genres = "This field is required.";
    }
    if (!input.platforms.length) {
      error.platforms = "This field is required.";
    }
    setDisable(true);
    if (Object.values(error).length === 0) setDisable(false);
    return error;
  }

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
    if (error) console.log("hola");
    const errorSave = validate(input);

    if (Object.values(errorSave).length !== 0) {
      alert("Please, fullfil the required camps.");
    } else {
      console.log("dame algo");
      setDisable(false);
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

      navigate("/heroSection");
    }
  };

  return (
    <div className="createGame-page">
      <Link to="/home"></Link>

      <div className="form-section-box">
        <div className="img-left-section">
          <h1>
            Become a hero.. <br />
            Create your game
          </h1>
          <img
            src="/ai-videogames-pic/photo10.png"
            className="form-section-img img-left"
            alt="aca va imagen"
          />
        </div>
        <div className="contenedor-img">
          <img
            src="/ai-videogames-pic/photo1.png"
            className="form-section-img img-fondo"
            alt="aca va imagen"
          />
          <form
            action=""
            className="main-form form-texto"
            onSubmit={handleSubmit}
          >
            <div className="input-field-box ">
              <label htmlFor="name">Name: </label>
              {error.name && <p className="error-form">{error.name}</p>}
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
            <div className="input-field-box ">
              <label htmlFor="released">Released: </label>
              {error.released && <p className="error-form">{error.released}</p>}
              <input
                className="date-field"
                type="date"
                value={input.released}
                name="released"
                placeholder="Released*"
                // onChange={(e) => handleChange(e)}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field-box ">
              <label htmlFor="rating">Rating: </label>
              {error.rating && <p className="error-form">{error.rating}</p>}
              <input
                className=" rating-field"
                type="number"
                value={input.rating}
                name="rating"
                placeholder="Rating*"
                onChange={handleChange}
                min={0}
                max={5}
                required
              />
            </div>

            <div className="input-field-box ">
              <label htmlFor="image">Image: </label>
              {error.image && <p className="error-form">{error.image}</p>}
              <input
                className="input-field"
                type="url"
                value={input.image}
                name="image"
                placeholder="Image*"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-field-box ">
              <label>Genres: </label>
              {error.genres && <p className="error-form">{error.genres}</p>}
              <select
                className="genres-field"
                onChange={handleSelectGenre}
                required
                value={input.genres}
              >
                {genres.map((el) => (
                  <option className="input-field" value={el.name}>
                    {el.name}
                  </option>
                ))}
              </select>
            </div>

            <ul className="select-list">
              <li className="input-field select-list">
                {input.genres.map((el) => el + " -")}
              </li>
            </ul>

            <div className="input-field-box ">
              <label htmlFor="plataformas">Plataformas: </label>
              {error.platforms && (
                <p className="error-form">{error.platforms}</p>
              )}
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

            <div className="  textarea-box ">
              <textarea
                className="input-field textarea form-control"
                value={input.description}
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
            {disable ? (
              ""
            ) : (
              <button className="comenzar-btn disable" type="submit" disabledd>
                Crear juego
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGame;
/* 



*/
