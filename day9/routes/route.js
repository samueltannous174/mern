const Controller = require("../controllers/controller.js");

module.exports = (app) => {
  app.get("/all", Controller.getAllJokes);
  app.post("/create", Controller.createJoke);
  app.get("/joke/:id", Controller.getJokeById);
  app.put("/update/:id", Controller.updateJoke);
  app.delete("/delete/:id", Controller.deleteJoke);
  app.patch("/update/:id", Controller.updatePatch);
};
