const { Router } = require("express");
const videogameRouter = require("./videogameRouter");
const genreRouter = require("./genreRouter");
const mainRouter = Router();


mainRouter.use('/videogames',videogameRouter)
mainRouter.use('/genres',genreRouter) 



module.exports = mainRouter;
