const { Router } = require("express");
const {
  getVideogamesHandler,
  getGameById,
  postVideogames,
  updateVideogame,
  deleteVideogame,
} = require("../handlers/videogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);

videogameRouter.get("/:id", getGameById);

videogameRouter.post("/", postVideogames);
videogameRouter.put("/:id", updateVideogame);
videogameRouter.delete("/:id", deleteVideogame);

module.exports = videogameRouter;
