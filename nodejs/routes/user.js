const express = require('express');
const router = express.Router();

//const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

//const { userById, read, update, purchaseHistory } = require('../controllers/user');

const { signup, signin, signout } = require('../controllers/user');
const {userSignupValidator} = require('../validator');

const {sayHi} = require('../controllers/user');

//do here
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);
router.get ('/', sayHi)



module.exports = router;
