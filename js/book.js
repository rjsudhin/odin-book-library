const myLibrary = []

const form = document.querySelector('form')
const header = document.querySelector('.header')
const addButton = document.querySelector('.add-button')

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const submitButton = document.querySelector('.submit-button')

const booksContainer = document.querySelector('#books-container')


// desable the form first load
togglingForm()

// add button clicks
addButton.addEventListener('click', () => {
  addingUI()
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault()  // disable submisson
  togglingForm()      // remove form uij
  togglingAddButton() // adding + button
  creatingBook()      // creating new book object
  servingLibrary()    // serving the created books
})

// Books constructor
function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.id = crypto.randomUUID()
}

// delete books
Book.prototype.deleteBook = function() {
  let currentBookId = this.id
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == currentBookId) {
      myLibrary.splice(i, 1)
      i--
      servingLibrary()
    }
  }
  
}


// showing UI in home screen
function addingUI() {
  togglingForm() // showing the form
  togglingAddButton() // show | remove add button
}

function creatingBook() {
  let titleInput = title.value 
  let authorInput = author.value 
  let pagesInput = pages.value

  // check the fields are empty or not
  if (
    (titleInput != '') &&
    (authorInput != '') &&
    (pagesInput != '')
  ) {
    let bookObj = new Book(titleInput, authorInput, pagesInput)
    addBookToLibrary(bookObj)

  }
  
  title.value = ''
  author.value = ''
  pages.value = ''
}



// serving all library 
function servingLibrary() {
  booksContainer.innerHTML = ''
  const card = document.createElement('div')
  card.classList.add('card')
  
  for (const book of myLibrary) {
    // title
    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    cardTitle.textContent = book.title

    // card author
    const cardAuthor = document.createElement('p')
    cardAuthor.classList.add('card-author')
    cardAuthor.textContent = 'Author : ' + book.author

    // card pages
    const cardPages = document.createElement('p')
    cardPages.classList.add('card-page')
    cardPages.textContent = 'Pages : ' + book.pages
      
    card.dataset.uniqueId = book.id
    deleteButton = document.createElement('button')
    deleteButton.classList.add('delete-button')
    deleteButton.classList.add('material-symbols-outlined')
    deleteButton.textContent = 'delete'

    deleteButton.addEventListener('click', (e) => {
      book.deleteBook()
    })

    card.append(cardTitle, cardAuthor, cardPages, deleteButton)
    booksContainer.appendChild(card)
  }
}


function addBookToLibrary(book) {
  // create a book then store it in the array
  myLibrary.push(book)
}


function togglingForm() {
  if (document.body.contains(form)) {
    document.body.removeChild(form)
  } else {
    document.body.insertBefore(form, booksContainer)
  }
}

function togglingAddButton() {
  if (header.contains(addButton)) {
    header.removeChild(addButton)
  } else {
    header.appendChild(addButton)
  }
}


