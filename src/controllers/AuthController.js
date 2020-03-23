const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateTokens');

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return res.status(404).send({ error: 'User not found' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(404).send({ erro: 'Password invalid' });
    user.password = undefined;

    res.status(200).json({
      user, 
      token: generateToken({id: user.id})
    });
  }
}