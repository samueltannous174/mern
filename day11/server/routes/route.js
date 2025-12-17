const Controller = require("../controllers/controller.js");

module.exports = (app) => {
  app.post("/create", Controller.createAuthor);
  app.get("/authors", Controller.getAllAuthors);
  app.put("/authors/:id", Controller.updateAuthor);
  app.get("/authors/:id", Controller.getAuthorById);
  app.delete("/authors/:id", Controller.deleteAuthor);
};
