const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors")

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();


const router = require("./routes/route.js");
router(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


