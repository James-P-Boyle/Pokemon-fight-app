const express = require("express");
const cors = require("cors");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();

const port = 3000;

//MIDDLEWARE
app.use(cors());
app.use("/test", require("./routes/pokemonRoutes"));
app.use("/:id", require("./routes/pokemonRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
