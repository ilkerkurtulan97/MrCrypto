const User = require('../model/User');

exports.createUser = async(req, res) => {
    const user = await User.create(req.body);

    res.status(201).json({user: user});
    console.log(user);
}

exports.loginUser = async(req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(user){
        bcrypt.compare(req.body.password, user.password, (err, same)=>{
            if(same){
                res.redirect('/');
            }else{
                res.status(400).json({"Error": "Wrong Password"});
            }
        });
    }else{
        res.status(400).json({"Error": "User Not Found"})
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