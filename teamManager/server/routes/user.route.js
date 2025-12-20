const Controller = require("../controllers/user.controller.js");

module.exports = (app) => {
    app.post("/user/create", Controller.createUser);
    app.post("/user/login", Controller.loginUser);
};