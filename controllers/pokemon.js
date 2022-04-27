let jsonData = require("../DB/file.json");

const displayFull = (req, res) => {
  res.send(jsonData);
};

const displayById = (req, res) => {
  const { id } = req.params;
  const pokemon = jsonData.filter((e) => {
    return id == e.id;
  });
  console.log(pokemon);

  res.send(pokemon);
};

const displayInfoById = (req, res) => {
  const { id, info } = req.params;
  console.log(id);
  console.log(info);
  const pokemon = jsonData.filter((e) => {
    return info == e.info;
  });
  res.send(pokemon);
};
module.exports = {
  displayFull,
  displayById,
  displayInfoById,
};
