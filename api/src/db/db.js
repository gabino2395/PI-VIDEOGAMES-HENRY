require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DEPLOY,DB_DEPLOY2} = process.env;
// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`,
//   { logging: false, native: false }
// );
const sequelize = new Sequelize(DB_DEPLOY2, { logging: false, native: false });
const VideogameModel = require("../models/Videogame");
const GenreModel = require("../models/Genre");
const UserModel = require("../models/User");
UserModel(sequelize);
GenreModel(sequelize);
VideogameModel(sequelize);
//modelo user

const { Videogame, Genre, User } = sequelize.models;

//N:N
User.belongsToMany(Videogame, { through: "favorites" }); // se crea la tabla intermedia favorites
Videogame.belongsToMany(User, { through: "favorites" });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Videogame.belongsToMany(Genre, { through: "VideogameXGenre" });
Genre.belongsToMany(Videogame, { through: "VideogameXGenre" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
