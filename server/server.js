const express =require("express");
const mongoose =require("mongoose");
const cors =require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

//db
mongoose
  .connect(process.env.db)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR ==>", err));

// middlewares
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"], //we use the origin to make it interact only with our frontend server
  })
);

app.post("/api/register", (req, res) => {});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`DB Connected on ${port}`));
