const { Router } = require("express");
const {
  getVideogamesHandler,
  getGameById,
  postVideogames,
  updateVideogame,
} = require("../handlers/videogamesHandler");

const videogameRouter = Router();

videogameRouter.get("/", getVideogamesHandler);

videogameRouter.get("/:id", getGameById);

videogameRouter.post("/", postVideogames);
videogameRouter.put("/:id", updateVideogame);
module.exports = videogameRouter;
