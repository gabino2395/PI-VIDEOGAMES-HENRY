const { Router } = require("express");
const {
  getVideogamesHandler,
  getGameById,
  postVideogamesJson,
  // createVideogameHandler,
  // getVideogamesHelper
} = require("../handlers/videogamesHandler");
const { postVideogames,
  //  createNewGame
   } = require("../controllers/videogameController");

const videogameRouter = Router();


videogameRouter.get("/", getVideogamesHandler);

videogameRouter.get("/:id", getGameById);

videogameRouter.post("/", postVideogames);
// videogameRouter.post("/", postVideogamesJson);


module.exports = videogameRouter;
