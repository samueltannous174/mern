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
const userRouter = require("./routes/user.route.js");
router(app);
userRouter(app);



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


