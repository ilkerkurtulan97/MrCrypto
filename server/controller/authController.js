const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({ user: user });
  console.log(user);
};

exports.loginUser = async (req, res) => {
  try {
    const emailUser = req.body.email;
    const passwordUser = req.body.password;

    User.findOne({ email: emailUser }, function (err, user) {
      if (user) {
        if (user.password == passwordUser) {
          res.status(200).send({ Success: "Success!" });
          jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        } else {
          res.status(404).send({ Failed: "Wrong password!" });
        }
      } else {
        res.status(404).send({ Failed: "This Email Is not regestered!" });
      }
    });
  } catch (err) {
    res.status(400).send({ Failed: "Wrong url or operation" });
    res.navi;
  }
};

exports.loginWithJwt = async (req, res) => {
  try {
    const emailUser = req.body.email;
    const user = { email: emailUser };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  } catch (err) {
    res.status(500).json(err);
  }
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15s'});
}