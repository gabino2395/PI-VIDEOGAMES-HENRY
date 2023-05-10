// const { API_KEY } = process.env;
// const axios = require("axios");
// const { Videogame, Genre } = require("../db/db");

// const postVideogames = async (req, res) => {
//   const {
//     name,
//     description,
//     platforms,
//     realeased,
//     created,
//     rating,
//     genres,
//     image,
//   } = req.body;
//   try {
//     const newVideogame = await Videogame.create({
//       name,
//       description,
//       platforms,
//       realeased,
//       created,
//       rating,
//       image,
//     });
//     const genreNames = await Genre.findAll({
//       where: {
//         name:genres
//         // id: {
//         //   [Op.in]: genres,
//         // },
//       },
//     });
//     await newVideogame.addGenre(genreNames);
//     res.status(200).json({
//       message: "Videogame created successfully",
//     });
//   } catch (error) {
//     res.status(400).send({ error: error.message });
//   }
// };
// const getInfo = async () => {
//   let i = 1;
//   let listGames = [];

//   while (i < 6) {
//     let getApi = axios.get(
//       `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
//     );

//     listGames.push(getApi);

//     i++;
//   }
//   listGames = (await Promise.all(listGames)).map((el) =>
//     el.data.results.map((el) => {
//       return {
//         id: el.id,
//         image: el.background_image,
//         name: el.name,
//         rating: el.rating,
//         genres: el.genres.map((el) => el.name),
//         platforms: el.platforms.map((el) => el.platform.name),
//       };
//     })
//   );
//   let allGames = [];

//   listGames.map((el) => {
//     allGames = allGames.concat(el);
//   });

//   return allGames;
// };

// const getApiInfo = async () => {
//   const apiUrl = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
//   const apiInfo = await apiUrl.data.map((el) => {
//     return {
//       id: el.id,
//       image: el.background_image,
//       name: el.name,
//       rating: el.rating,
//       genres: el.genres.map((el) => el.name),
//       platforms: el.platforms.map((el) => el.platform.name),
//     };
//   });

//   return apiInfo;
// };

// const getDbInfo = async () => {
//   return await Videogame.findAll({
//     include: {
//       model: Genre,
//       attributes: ["name"],
//       through: {
//         attributes: [],
//       },
//     },
//   });
// };

// const getAllVideogamesHelper = async () => { 
//   // const apiInfo = await getApiInfo();
//   const apiInfo = await getInfo();
 
//   const dbInfo = await getDbInfo();
//   const infoTotal = apiInfo.concat(dbInfo);
//   return infoTotal;
// };

// module.exports = {
//   getAllVideogamesHelper,
//   getApiInfo,
//   getDbInfo,
//   postVideogames,
// };
