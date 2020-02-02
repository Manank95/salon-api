const express = require("express");
const router = express.Router();
const colors = require('colors');

const operatorService = require('./../service/operatorService');

router.get('/', getAllOperators);
router.post('/login', operatorLogin);
router.post('/signup', operatorSignup);
router.post('/verification/:otp', otpVerify);

async function getAllOperators(req, res, next) {
  try{
    const opList = await operatorService.getAllUsers();
    return res.json(opList);
  } catch(e) {
    return res.status(500).json({error: e});
  }
}

async function operatorLogin(req, res, next) {
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

async function operatorSignup(req, res, next) {

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