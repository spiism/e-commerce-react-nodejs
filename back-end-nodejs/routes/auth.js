const express = require('express');
const router = express.Router();

//const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

//const { userById, read, update, purchaseHistory } = require('../controllers/user');

const { signup, signin, signout, requireSignin } = require('../controllers/auth');
const {userSignupValidator} = require('../validator');

const {sayHi} = require('../controllers/auth');

//do here
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get ('/', sayHi)


// router.get('/hello', requireSignin, (req, res) => {
//     res.send('hello there');
// })



module.exports = router;
