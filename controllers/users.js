const User = require('../models/users')

module.exports.showUser = async (req, res) => {
  const {username} = req.params
  const user = await User.findOne({username: username}).populate('expenses')
  // res.send(user)
  const tag = ''
  res.render('show', {user, tag})
}