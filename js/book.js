const myLibrary = []

const form = document.querySelector('form')
const header = document.querySelector('.header')
const addButton = document.querySelector('.add-button')

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const submitButton = document.querySelector('.submit-button')

// desable the form first load
togglingForm()

// add button clicks
addButton.addEventListener('click', addingUI)

submitButton.addEventListener('click', (e) => {
  e.preventDefault() // disable submisson
  creatingBook()
})

// Books constructor
function Book(title, author, pages, read, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.id = id
}

function addingUI() {
  togglingForm() // showing the form
  togglingAddButton() // show | remove add button
}

function creatingBook() {
  let titleInput = title.value 
  let authorInput = author.value 
  let pagesInput = pages.value
  let randomId = crypto.randomUUID()
  let bookObj = new Book(titleInput, authorInput, pagesInput, randomId)
  addBookToLibrary(bookObj)
}




// serving all library 
function servingLibrary() {
  
}


function addBookToLibrary(book) {
  // create a book then store it in the array
  myLibrary.push(book)
  console.log(myLibrary)
}


function togglingForm() {
  if (document.body.contains(form)) {
    document.body.removeChild(form)
  } else {
    document.body.appendChild(form)
  }
}

function togglingAddButton() {
  if (header.contains(addButton)) {
    header.removeChild(addButton)
  } else {
    header.appendChild(addButton)
  }
}


// getting uniq Id
function gettingUniqueId() {
  return crypto.randomUUID()
}


