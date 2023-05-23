const {
  getDB,
  getInfoId,
  getAllVideogamesHelper,
} = require("../controllers/videogameController");
const { Genre, Videogame } = require("../db/db");

const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const totalVideogames = await getAllVideogamesHelper();
    if (name) {
      let videogameName = await totalVideogames.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      );
      let nombre = "string";
      nombre.toLowerCase;

      videogameName.length
        ? res.status(200).json(videogameName)
        : res.status(404).json("no existe ese personaje");
    } else {
      res.status(200).send(totalVideogames);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getGameById = async (req, res) => {
  const { id } = req.params;

  try {
    if (id.includes("-")) {
      const allId = await getDB();
      // const allId = await getDbInfo();

      let gameid = allId.find((el) => el.id === id);

      res.status(200).json(gameid);
    } else {
      const getGames = await getInfoId(id);

      res.status(200).json(getGames);
    }
  } catch (error) {
    console.log("error en el handler en la parte de error");
    res.status(400).json({ error: error.message });
  }
};
const postVideogames = async (req, res) => {
  const {
    name,
    description,
    platforms,
    released,
    created,
    rating,
    image,
    genres,
  } = req.body;
  try {
    if (
      !name ||
      !description ||
      !platforms ||
      !released ||
      !created ||
      !rating ||
      !image ||
      !genres
    ) {
      return res.status(400).json("faltan datos para crear un juego");
    }
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      released,
      created,
      rating,
      image,
    });
    const genreNames = await Genre.findAll({
      where: {
        // id: {
        //   [Op.in]: genres,
        // },
        name: genres,
      },
    });
    await newVideogame.addGenre(genreNames);
    res.status(200).json({
      message: "Videogame created successfully",
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const updateVideogame = async (req, res) => {
  const {
    name,
    description,
    platforms,
    released,
    created,
    rating,
    image,
    genres,
  } = req.body;
  const { id } = req.params;

  try {
    if (
      !name ||
      !description ||
      !platforms ||
      !released ||
      !created ||
      !rating ||
      !image ||
      !genres
    ) {
      return res.status(400).json("Faltan datos para actualizar el juego");
    }

    const updatedVideogame = await Videogame.update(
      {
        name,
        description,
        platforms,
        released,
        created,
        rating,
        image,
        genres

      },
      {
        where: { id },
      }
    );

    if (updatedVideogame[0] === 0) {
      return res.status(404).json("No se encontró el videojuego");
    }

    const genreNames = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    const videogame = await Videogame.findByPk(id);
    await videogame.setGenres(genreNames);

    res.status(200).json({
      message: "Videojuego actualizado exitosamente",
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

///

module.exports = {
  getVideogamesHandler,
  getGameById,
  postVideogames,
  updateVideogame
};
