const { model } = require("mongoose");
const Author = require("../models/Author");



module.exports.createAuthor = async (req, res) => {
  try {
    const { name } = req.body;

    const newAuthor = new Author({ name });
    const savedAuthor = await newAuthor.save();

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


module.exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


module.exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      { name },
      { new: true, runValidators: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(updatedAuthor);
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

module.exports.getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


module.exports.deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
