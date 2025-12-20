const Controller = require("../controllers/controller.js");


module.exports = (app) => {
    app.get("/api/authors", Controller.getAllAuthors);
    app.post("/api/authors", Controller.createAuthor);
};
