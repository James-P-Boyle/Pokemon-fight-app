let jsonData = require("../DB/file.json");

const displayFull = (req, res) => {
  res.send(jsonData);
};

const displayById = (req, res) => {
  const { id } = req.params;
  const pokemon = jsonData.filter((e) => {
    console.log(typeof id);
    return id == e.id;
  });
  console.log(pokemon);

  res.send(pokemon);
};

module.exports = {
  displayFull,
  displayById,
};
