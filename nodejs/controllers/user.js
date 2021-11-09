const User = require('../models/user');
//const { Order } = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');



exports.sayHi = (req, res) => {
    res.json ({message: 'hello there from controllers'})
};




//do here
exports.signup = (req, res) => {
    console.log('req.body', req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                err: errorHandler(err)
            })
        }

        //hide user salt +password
        user.salt =undefined;
        user.hashed_password = undefined;

        res.json({
            user
        });
    })
};
