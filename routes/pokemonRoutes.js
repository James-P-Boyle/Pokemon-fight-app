const express = require("express");
const router = express.Router();
const { displayFull, displayById } = require("../controllers/pokemon");

router.get("/", displayFull);

router.get("/:id", displayById);

module.exports = router;
