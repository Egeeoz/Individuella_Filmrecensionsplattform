const User = require('../models/user');

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send('User created, please log in to continue');
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne(req.body).select('-password');

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { createUser, login };
