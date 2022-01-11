const User = require('../model/User');

exports.register = async(req, res) => {
    const user = await User.create(req.body);

    res.status(201).json({user: user});
    console.log(user);
}

exports.loginUser = async (req, res) => {
    try{
        User.findOne({email:req.body.email},function(err,user){
            if(user){
                if(user.password==req.body.password){
                    res.status(200).send({"Success": "Success!"});
                    res.redirect("localhost:3000/");
                }else{
                    res.status(404).send({"Failed":"Wrong password!"});
                }
            }else{
                res.status(404).send({"Failed":"This Email Is not regestered!"});
            }
        });
    } catch(err){
        res.status(400).send({"Failed": "Wrong url or operation"});
        res.navi
    }
}

exports.login = async (req, res) =>{
    try{
        const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password
        })
        console.log(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err);
    }
}