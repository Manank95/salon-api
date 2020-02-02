const { MONGO_URI, DB_NAME } = require('./index');
const MongoClient = require("mongodb").MongoClient;
const settings = {
  mongoConfig: {
    serverUrl: MONGO_URI,
    database: DB_NAME
  }
}

const mongoConfig = settings.mongoConfig;

let _connection = undefined;
let _db = undefined;

module.exports = async () =>{
  if(!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = await _connection.db(mongoConfig.database);
  }
  return _db;
}