const User = require('../model/User');

exports.getIndexPage = async (req, res) => {
    try{
        const user = await User.findOne({ name: "Ilker" });
        res.json(user);
        console.log(user);
    } catch(error){
        res.status(400).json({
            status: 'fail'
        });
    }
}

exports.getProfilePage = async (req, res) => {
    try{
        const user = await User.findOne({ name: "Ilker" });
        res.json(user);
        console.log("/GET profile page")
    } catch(error){
        res.status(400).json({
            status: 'fail'
        });
    }
}