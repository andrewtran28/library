const myLibrary = [];
const form = document.querySelector("form");
const btn_addBook = document.querySelector("#add-book");
const btn_submit = document.querySelector("#submit")
const toggleForm = document.querySelector(".form-toggle");
const btn_remove = document.querySelector(".remove");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;

    this.info = function() {
        read ? read = "has been read" : read = "has not been read yet";
        return (title + " by " + author + " (" + pages + " pages) " + read + ".");
    }

    console.log(this.info());
}

function addBookCard(title, author, pages, read) {
    const newBook = document.querySelector(".library-cont");
    const card = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookStatus = document.createElement("div");
    const bookRemove = document.createElement("button");

    card.classList.add("book");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookRemove.classList.add("remove");
    // bookPages.classList.add("pages");

    newBook.appendChild(card);
    card.appendChild(bookRemove);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);

    bookTitle.textContent = title;
    bookAuthor.textContent = author;
    bookPages.textContent ="Page Count: " + pages;
    bookStatus.textContent = "Read Status: " + read;
    bookRemove.textContent = "x";

    btn_remove.addEventListener("click", () => {
        newBook.removeChild(card);
        console.log("Test");
    });

}

function addBookToLibrary(event) {
    const title_input = document.querySelector("#book-title").value;
    const author_input = document.querySelector("#book-author").value;
    const pages_input = document.querySelector("#book-pages").value;
    const read_input = document.querySelector("#book-status").value;
    event.preventDefault();

    let newBook = new Book(title_input, author_input, pages_input, read_input);
    addBookCard(title_input, author_input, pages_input, read_input);
    toggleForm.classList.toggle("form-toggle");
}

btn_addBook.addEventListener("click", () => {
    toggleForm.classList.toggle("form-toggle");
});

form.addEventListener("submit", addBookToLibrary);

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 0);