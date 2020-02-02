// const dotenv = require('dotenv');
// dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  MONGO_URI: process.env.MONGO_URI,
  DB_NAME: process.env.DB_NAME
};


// uncomment code below if we don't wan't to manually add env variables above
// and move dotenv from dev-dependency to dependency
// const dotenv = require('dotenv');
// const result = dotenv.config();
// if (result.error) {
//   throw result.error;
// }
// const { parsed: envs } = result;
// console.log(envs);
// module.exports = envs;