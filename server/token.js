const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//Access config var
process.env.TOKEN_SECRET;

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }