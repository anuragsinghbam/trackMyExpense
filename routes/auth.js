const express = require('express')
const router = express.Router()
const auth = require('../controllers/auth')
const User = require('../models/users')
const passport = require('passport')

router.route('/register').get(auth.renderRegister).post(auth.registerUser)

router
  .route('/login')
  .get(auth.renderLogin)
  .post(
    passport.authenticate('local', {
      faliureFlash: true,
      faliureRedirect: '/login',
    }),
    auth.loginUser
  )

router.get('/logout', auth.logout)

module.exports = router
