const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function requireAuth(req, res, next) {
  if (!req.headers?.cookie) {
    return res.status(401).json({ error: 'The content is for member only. Please login or consider sign up' });
  }

  // extract from "Bearer <Token>"
  const token = req.headers.cookie.split('=')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ error: 'Unable to identify your account. Please clear your browser cookie for the website and retry to log in' });
  }

  return null;
}

module.exports = requireAuth;
