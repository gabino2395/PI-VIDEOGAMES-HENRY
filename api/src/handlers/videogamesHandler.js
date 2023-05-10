const {
  getAllVideogames,
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


module.exports = {
  getVideogamesHandler,
  getGameById,

};
