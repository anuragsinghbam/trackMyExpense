const searchInput = document.querySelector('.search-input')
const searchForm = document.querySelector('.search-form')
const expenseForm = document.querySelector('.expense-form')
const addButton = document.querySelector('.add-expense')
const overlay = document.querySelector('.overlay')

searchInput.addEventListener('focus', (e) => {
  searchForm.classList.add('focused')
})

addButton.addEventListener('click', (e) => {
  expenseForm.classList.add('active')
  overlay.classList.add('active')
})

overlay.addEventListener('click', (e) => {
  expenseForm.classList.remove('active')
  overlay.classList.remove('active')
})

