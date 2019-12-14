module.exports = (req, res) => {
  const epoch = Date.now(); // Unix timestamp in milliseconds
  res.header('Access-Control-Allow-Origin','*');
  res.status(200).send(epoch);

};
