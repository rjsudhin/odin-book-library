const header = document.querySelector('header')
const button = document.querySelector('.create-book-btn')
const main = document.querySelector('main')
const form = document.querySelector('form')
const formSubmitBtn = document.querySelector('.submit-btn')


// desable while form first load
form.style.display = 'none'

// add button clicks
button.addEventListener('click', addBookToLibrary)


// new button submision clicks
formSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('submission clicks')
  gettingUserInputValues()
})

const myLibrary = []

showCaseLibrary()

// book constructor
function Book(title, author, pages, read, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = id
}


function addBookToLibrary() {
  addingInputUi()
}

// getting user input values
function gettingUserInputValues() {
  
}



function showCaseLibrary() {
  if (myLibrary.length >= 0) {
    console.log(myLibrary)
  }
}


function addingInputUi() {
  form.style.display = 'flex'
  // remove the adding button then
  header.removeChild(button)
}
