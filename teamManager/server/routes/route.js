const Controller = require("../controllers/controller.js");

module.exports = (app) => {
    app.post("/create", Controller.createPlayer);
    app.post("/games", Controller.createGame);
    app.get("/players", Controller.getAllPlayers);
    app.get("/players/:id", Controller.getPlayerById);
    app.put("/players/:id", Controller.updatePlayer);
    app.delete("/players/:id", Controller.deletePlayer);    
    app.get("/games", Controller.getAllGames);
    app.get("/games/:id", Controller.getGameById);
};
