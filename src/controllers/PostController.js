

module.exports = {
  async index(req, res) {
    res.send({message: 'Ok', user: req.userId});
  }
}