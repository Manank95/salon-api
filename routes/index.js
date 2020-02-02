const operator = require("./operator");
const customer = require("./customer");

const constructorMethod = app => {
  app.use("/operator", operator);
  app.use("/customer", customer);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;