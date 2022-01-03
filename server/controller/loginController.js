//const User = require('../model/User');
const User = require('../model/User');

exports.getLoginPage = async (req, res) => {
    res.json({
        "usersList": "user 1"
    });
}