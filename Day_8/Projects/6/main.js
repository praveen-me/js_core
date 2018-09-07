// 1- Take a value of book and append it to book list.

//Button add book 
let addBookButton = document.getElementById('addBookButton');

// Making structure for book that has to be appended
let newBookLi = function (nameOfBook) {
  let li = `<li>
  <span class="name">${nameOfBook}</span>
  <span class="delete">delete</span>
  </li>`

  return li;
}

//Addung book name to when add button clicked
let addBookName = function (e) {
  //Prevent Default 
  e.preventDefault();
  //Book Name
  let bookName = document.getElementById('book-value');

  // Selecting Ul of book-list
  let ul = document.querySelector('#book-list > ul');

  // Adding book
  ul.innerHTML += newBookLi(bookName.value);

  //Empty the text bar
  bookName.value = '';
}

// 2 - When click on delete button the book should be gone

let deleteBook = function (e) {
  let elm = e.target;
  elm.parentElement.remove();
}

//Delete Button
let deleteBookByButton = function () {
  let deleteButtons = document.querySelectorAll('.delete');

  deleteButtons.forEach(function (btn) {
    btn.addEventListener('click', deleteBook);
  });
}

// 3 Hide Books when Checkbox checked
function hideBooks() {
  let hideButton = document.getElementById('hide');

  let bookList = document.getElementById('book-list');

  if (hideButton.checked) {
    bookList.style.display = 'none';
  } else if (hideButton.checked === false) {
    bookList.style.display = 'block';
  }

}

// 4 Search the Book
let searchBook = function () {
  let searchField = document.querySelector('#search-books input[type="text"]');

  let booksName = document.querySelectorAll('.name');

  searchField.addEventListener('keydown', function () {

    booksName.forEach(book => {
      if (book.innerText.includes(searchField.value)) {
        book.parentElement.style.display = 'block';
      } else {
        book.parentElement.style.display = 'none';
      }

    });
  });

}


// Initialization Function
function init() {
  addBookButton.addEventListener('click', addBookName);

  setInterval(() => {
    deleteBookByButton();
    hideBooks();
    searchBook();
  }, 50);
}

init();



