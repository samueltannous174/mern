const { model } = require("mongoose");
const Player = require("../models/player.model.js");
const Game = require("../models/game.model.js");


module.exports.createGame = async (req, res) => {
  try {
    const { title, players } = req.body;
    const game = await Game.create({ title, players });
    return res.status(201).json(game);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.createPlayer = async (req, res) => {
  try {
    const { name, position } = req.body;
    console.log(name, position);
    

    const player = await Player.create({ name, position });

    return res.status(201).json(player);

  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }

    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};



module.exports.getAllPlayers= async(req,res)=>{
  try{
    const players = await Player.find()
    res.status(200).json(players);
  }
  catch(error){res.status(500).json({
    message: "Server Error",
    error: error.message,
  }); 
}
};

module.exports.getPlayerById = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const userIdFromToken = req.userId;
    console.log(id);
        if (userIdFromToken !== id) {
      return res.status(403).json({
        message: "You can only update your own profile",
      });
    }


    const { name, position } = req.body;
    const player = await Player.findByIdAndUpdate(id, { name, position }, { new: true, runValidators: true });
    console.log(player);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json(player);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ 
        message: "Validation Error",
        errors: error.errors 
      });
    }
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndDelete(id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.status(200).json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports.addPlayerToGame = async (req, res) => {
  try {
    const { gameId } = req.params;
    const { playerId, status } = req.body;

    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    const player = await Player.findById(playerId);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    game.players.push({ player: playerId, status: status || 'undecided' });
    await game.save();

    res.status(200).json(game);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors,
      });
    }
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};
