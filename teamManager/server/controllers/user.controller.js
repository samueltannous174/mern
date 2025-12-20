const User = require("../models/user.model.js");



module.exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(name, email, password);
    const user = await User.create({ name, email, password });
    console.log(user);
    res.status(201).json(user);
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




module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};



    
