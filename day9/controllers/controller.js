const Joke = require("../models/Joke.js");



module.exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.find({});
    res.json(jokes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.createJoke = async (req, res) => {
  const { setup, punchline } = req.body;
  const joke = new Joke({ setup, punchline });

  try {
    const savedJoke = await joke.save();
    res.status(201).json(savedJoke);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
module.exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findById(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.json(joke);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.updateJoke = async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.json(joke);
  } catch (err) {
    res.status(400).json({ message: err.message });
  } 
};

module.exports.deleteJoke = async (req, res) => { 
  try {
    const joke = await Joke.findByIdAndDelete(req.params.id);
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    }
    res.json({ message: "Joke deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports.updatePatch= async (req, res) => {
  try {
    const joke = await Joke.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!joke) {
      return res.status(404).json({ message: "Joke not found" });
    } 
    res.json(joke);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
