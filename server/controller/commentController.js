const User = require('../model/User');

exports.deleteComment = async (req, res) => {
    try{
        const user = await User.findOne({ name: "Ilker" });
        res.json(user);
        console.log(user);
    } catch(error){
        res.status(500).json(error);
    }
}