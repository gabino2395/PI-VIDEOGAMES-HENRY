//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db/db.js');

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001,async () => {
//     console.log('server listening at 3001 and DB connected'); // eslint-disable-line no-console
//   });
// }); 

const PORT = 3001;
server.listen(PORT, async () => {
  console.log("server listen on port: " + PORT);
  // console.log("::::", conn.models);
  await conn.sync({ force: true }); // sincroniza todos los models, todas las tablas
  // await conn.sync({ alter: true }); // sincroniza todos los models, todas las tablas

}); 

