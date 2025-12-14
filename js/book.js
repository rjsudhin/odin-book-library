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
  togglingForm()
  togglingAddButton()
  servingLibrary()
})

// Books constructor
function Book(title, author, pages, id) {
  this.title = title
  this.author = author
  this.pages = pages
  this.id = id
}

Book.prototype.showing = function() {
  console.log('delete button clicks')
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
  const card = document.createElement('div')
  for (const book of myLibrary) {
    // title
    const cardTitle = document.createElement('h2')
    cardTitle.textContent = book.title

    // card author
    const cardAuthor = document.createElement('p')
    cardAuthor.textContent = book.author

    // card pages
    const cardPages = document.createElement('p')
    cardPages.textContent = book.pages
      
    card.dataset.uniqueId = book.id
    deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', (e) => {
      console.log('delete Button clicked')
    })

    card.append(cardTitle, cardAuthor, cardPages, deleteButton)
    
    console.log(card)
    document.body.appendChild(card)
  }
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


