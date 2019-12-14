module.exports = (req, res) => {
  const epoch = Date.now(); // Unix timestamp in milliseconds
  console.log(epoch);
  res.status(200).send(epoch);
};
