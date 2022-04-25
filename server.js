const express = require("express");

const app = express();
let jsonData = require("./DB/file.json");
const port = 3000;

app.use("/", require("./routes/pokemonRoutes"));
app.use("/:id", require("./routes/pokemonRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
