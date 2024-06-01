const User = require('../models/user');

const adminCheck = async (req, res, next) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.status(401).send('Unauthorized: User ID not provided.');
    }

    const user = await User.findById(userId);

    if (!user || user.role !== 'admin') {
      return res.status(403).send('Access denied. Admins only.');
    }

    next();
  } catch (error) {
    console.error('Error in adminCheck middleware:', error);
    res.status(500).send('Internal server error');
  }
};

module.exports = adminCheck;
