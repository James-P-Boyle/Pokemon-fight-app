const express = require("express");
const router = express.Router();
const {
  displayFull,
  displayById,
  displayInfoById,
} = require("../controllers/pokemon");

router.get("/pokemon", displayFull);

router.get("/pokemon/:id", displayById);
router.get("/pokemon/:id/:info", displayInfoById);

module.exports = router;
