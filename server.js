const express = require("express");
const cors = require("cors");
const { pokemonRouter } = require("./routes/pokemonRoutes");

const app = express();
const port = 3000;

//MIDDLEWARE
app.use(cors());

app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
