const User = require('../models/user');

module.exports.hasAdminPermission = (req, res, next) => {
    const { user } = req;
    // console.log(user.id);
    User.findOne({ username: user.username })
        .then(user => {
            if (user && user.role === 'Admin') {
                next();
            }
            else {
                return res.sendStatus(403);
            }
        })
        .catch(err => res.sendStatus(500));
}
