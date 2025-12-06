const button = document.querySelector('button')
button.addEventListener('click', addBookToLibrary)


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
  let randomId = crypto.randomUUID()
  const book1 = new Book('Dragon Ball', 'makia', 882, true, randomId)
  myLibrary.push(book1)
  showCaseLibrary()
}


function showCaseLibrary() {
  if (myLibrary.length >= 0) {
    console.log(myLibrary)
  }
}
