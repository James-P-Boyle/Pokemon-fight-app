const express = require("express");
const pokemonRouter = express.Router();
const {
  displayFull,
  displayById,
  displayInfoById,
} = require("../controllers/pokemon");

pokemonRouter.get("/", displayFull);

pokemonRouter.get("/:id", displayById);
pokemonRouter.get("/:id/:info", displayInfoById);

module.exports = {
  pokemonRouter,
};
