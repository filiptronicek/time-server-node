module.exports = (req, res) => {
  const epoch = Date.now(); // Unix timestamp in milliseconds
  res.status(200).send(epoch - (epoch % 100));
};
