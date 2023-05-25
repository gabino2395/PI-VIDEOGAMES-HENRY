
const server = require("./src/app.js");
const { conn } = require("./src/db/db.js");
const { PORT } = process.env || 3001;

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001,async () => {
//     console.log('server listening at 3001 and DB connected'); // eslint-disable-line no-console
//   });
// });

// const PORT = 3001;
server.listen(PORT, async () => {
  console.log("server listen on port: " + PORT);
  // console.log("::::", conn.models);
  await conn.sync({ force: false }); // sincroniza todos los models, todas las tablas
  // await conn.sync({ alter: true }); // sincroniza todos los models, todas las tablas
});

// { force: true } -> RESET ->  DROP (delete) a todas las TABLAS y vuelve a crear segun su config

// En etapa de Consultas (crear, eliminar, modificar datos)
// { force: false } -> mantiene todo igual  y persistente

// { alter: true } -> UPDATE ->  tabla name edad           actualiza y no perdemos datos TENER MUCHO CUIDADO, PUEDEN 						CORROMPERSE LOS DATOS
