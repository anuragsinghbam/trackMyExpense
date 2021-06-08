const users = require('../models/users')
const User = require('../models/users')

module.exports.renderBalanceForm = (req, res) => {
  res.render('updateBalance')
}

module.exports.updateBalance = async (req, res) => {
  const user = await User.findById(req.user.id)
  user.balance = req.body.balance
  let totalExpense = 0
  for(let expense of user.expenses) {
    totalExpense += expense.amount
  }
  user.balance -= totalExpense
  user.totalExpense = totalExpense
  user.save()
  res.redirect(`/${req.user.username}`)
}
