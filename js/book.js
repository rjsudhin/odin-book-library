const header = document.querySelector('header')
const button = document.querySelector('.create-book-btn')
const main = document.querySelector('main')
const form = document.querySelector('form')
const formSubmitBtn = document.querySelector('.submit-btn')

let titleInput = document.querySelector('#title')
let authorInput = document.querySelector('#author')
let pagesInput = document.querySelector('#pages')

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
  let title = titleInput.value 
  let author = authorInput.value 
  let pages = pagesInput.value 
  let radioSelection = ''
  let selectedRadioButton = document.querySelector('input[name="read-report"]:checked')
  if (selectedRadioButton) {
    console.log(`selected Radio button value : ${selectedRadioButton.value}`)
    if (selectedRadioButton.value == 'yes') {
      radioSelection = true
    } else {
      radioSelection = false
    }
  } else {
    console.log('No radio button in the gorup is selected')
  }
  console.log(radioSelection)

  // get a random crypto id
  let randomCryptoId = crypto.randomUUID()
  // make a new book card 
  let obj = new Book(title, author, pages, radioSelection, randomCryptoId)
  myLibrary.push(obj)
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
