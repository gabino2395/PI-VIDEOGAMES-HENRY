const {
  getAllVideogames,
  getDB,
  getInfoId,
  getAllVideogamesHelper,
  getDbInfo,
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
    realeased,
    created,
    rating,
    genres,
    image,
  } = req.body;
  try {
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      realeased,
      created,
      rating,
      image,
    });
    const genreNames = await Genre.findAll({
      where: {
        name: genres,
        // id: {
        //   [Op.in]: genres,
        // },
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

const postVideogamesJson = async (req, res) => {
  let {
    name,
    image,
    description,
    released,
    rating,
    genres,
    platforms,
    website,
  } = req.body;

  try {
    let createVideogame = await Videogame.create({
      name,
      image,
      description,
      released,
      rating,
      platforms,
      website,
    });

    let genreByDb = await Promise.all(
      genres.map(async (el) => {
        return (
          await Genre.findOrCreate({
            where: {
              name: el,
            },
          })
        )[0].dataValues.id;
      })
    );

    await createVideogame.addGenre(genreByDb);

    let gameCreated = (
      await Videogame.findOne({
        attributes: [
          "name",
          "image",
          "id",
          "description",
          "released",
          "rating",
          "platforms",
        ],
        where: {
          name: name,
        },
        include: {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      })
    ).toJSON();
    gameCreated = {
      name: gameCreated.name,
      image: gameCreated.image,
      id: gameCreated.id,
      description: gameCreated.description,
      released: gameCreated.released,
      rating: gameCreated.rating,
      platforms: gameCreated.platforms,
      genres: gameCreated.Genres.map((el) => el.name),
    };
    res.status(200).json(gameCreated);
  } catch (e) {
    res
      .status(404)
      .send("Ups! Sorry, there was an error creating the videogame :(");
  }
};

module.exports = {
  getVideogamesHandler,
  getGameById,
  postVideogames,
  postVideogamesJson
};
