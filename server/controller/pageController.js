exports.getLoginPage = async (req, res) => {
    res.json({
        "usersList": "user 1"
    });
}

exports.getIndexPage = async (req, res) => {
    res.json({
        "usersList": "user 2"
    });
}