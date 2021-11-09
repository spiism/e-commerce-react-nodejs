const express = require('express');
const router = express.Router();

//const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update, purchaseHistory } = require('../controllers/user');

const { signup } = require('../controllers/user');

const {sayHi} = require('../controllers/user');

//do here
router.post('/signup', signup);
router.get ('/', sayHi)



module.exports = router;
