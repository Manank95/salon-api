const mongoCollection = require('./../config/mongoCollection');
const user = mongoCollection.user;

let exportedMethods = {
  async getAllUsers() {
    const userCollection = await user();
    return await userCollection.find({}).toArray();
  },

  async getAllCustomers() {
    return;
  }
}

module.exports = exportedMethods;