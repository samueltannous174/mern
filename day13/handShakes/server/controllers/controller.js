const Author = require("../models/author.model.js");

module.exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};

module.exports.createAuthor = async (req, res) => {
  try {
    const { name, age } = req.body;

    const savedAuthor = await Author.create({ name, age });

    res.status(201).json(savedAuthor);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation Error",
        errors: error.errors
      });
    }

    res.status(500).json({
      message: "Server Error",
      error: error.message
    });
  }
};
