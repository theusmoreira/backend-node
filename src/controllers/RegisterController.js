const User = require('../models/User');
const generateToken = require('../utils/generateTokens');

module.exports = {
  async store(req, res) {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ name, email, password })
      user.password = undefined;
    } else {
      return res.status(409).send('This email is already being used')
    }
    return res.status(201).send({
      user,
      token: generateToken({ id: user.id })
    });
  }
}