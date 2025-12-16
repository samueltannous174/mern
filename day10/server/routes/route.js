const Controller = require("../controllers/controller.js");

module.exports = (app) => {
  app.post("/create", Controller.createProduct);
  app.get("/", Controller.getAllProducts);
};
