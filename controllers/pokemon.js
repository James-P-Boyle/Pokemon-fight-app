let jsonData = require("../DB/file.json");

const displayFull = (req, res) => {
  res.send(jsonData);
};

const displayById = (req, res) => {
  const { id } = req.params;
  const pokemon = jsonData.find((e) => {
    return id == e.id;
  });

  res.send(pokemon);
};

const displayInfoById = (req, res) => {
  const { id, info } = req.params;
  const pokemon = jsonData.find((e) => {
    return id == e.id;
  });
  res.send(pokemon[info]);
};

module.exports = {
  displayFull,
  displayById,
  displayInfoById,
};
