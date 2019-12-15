module.exports = (req, res) => {
  let epoch = Date.now(); // Unix timestamp in milliseconds
  res.setHeader('Access-Control-Allow-Origin','*');
  res.status(200).send(epoch);

};
