const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors")

const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

connectDB();


const router = require("./routes/route.js");
router(app);

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("Nice to meet you. (shake hand)");
    socket.emit("welcome", "Welcome to the server!");
});


