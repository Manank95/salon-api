const express = require("express");
const router = express.Router();
const colors = require('colors');

router.post('/login', customerLogin);
router.post('/signup', customerSignup);
router.post('/verification/:otp', otpVerify);


async function customerLogin(req, res, next) {
  try {
    // find if mobile number from request exists
    // send OTP
    // verify OTP
    // set JWT
    // res.status(200).json({message:'login successful', token:'XYZ' })
  } catch (e) {
    console.error(colors.red(e));
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

async function customerSignup(req, res, next) {

}


async function otpVerify(req, res, next) {
  try {
    // verification
  } catch (e) {
    console.error(colors.red(e));
    return res.status(500).json({ message: 'Internal Server Error' })
  }
}

module.exports = router;