const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const { pokemonRouter } = require("./routes/pokemonRoutes");

const app = express();
const port = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
