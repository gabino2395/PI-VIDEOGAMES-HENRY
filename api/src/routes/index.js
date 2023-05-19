const { Router } = require("express");
const videogameRouter = require("./videogameRouter");
const genreRouter = require("./genreRouter");
const userRouter = require("./UserRouter");
const mainRouter = Router();

mainRouter.use("/videogames", videogameRouter);
mainRouter.use("/genres", genreRouter);
mainRouter.use("/user", userRouter);

module.exports = mainRouter;
