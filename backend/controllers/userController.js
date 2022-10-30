const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

function createToken(id) {
  return jwt.sign({ _id: id }, process.env.SECRET, { expiresIn: '3d' });
}

// login user
async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user.id);
    res.status(200).cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
    }).json({ email });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// log out user (just clear the content of the token cookie)
async function logoutUser(req, res) {
  res.status(200).clearCookie('token');
  res.end();
}

// signup user
async function signupUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // create a token
    const token = createToken(user.id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { signupUser, loginUser, logoutUser };
