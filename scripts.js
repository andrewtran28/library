const myLibrary = [];
var totalBooks = myLibrary.length;
const total = document.querySelector(".total")
const dialog = document.querySelector("dialog");
const btn_close = document.querySelector("dialog button")
const form = document.querySelector("form");
const btn_addBook = document.querySelector("#add-book");
const btn_remove = document.querySelector(".remove");
// const btn_submit = document.querySelector("#submit")

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

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    let library = document.querySelector(".library-cont");

    library.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = document.createElement("div");
        card.className = "book";
      
        card.innerHTML = `
            <button class="remove" onClick="removeBook(${i})">Close</button>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="page">Page Count: ${book.pages}</div>
            <div>
                Read Status: 
                <input type="checkbox" id="read" name="read" ${book.read ? "checked" : "unchecked"}>
            </div>
        `;
        library.appendChild(card);
        total.textContent = "Total Books: " + myLibrary.length; 
        dialog.close();
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    total.textContent = "Total Books: " + myLibrary.length; 
    displayLibrary();
}

btn_addBook.addEventListener("click", () => {
    dialog.showModal();
    form.reset();
    // toggleForm.classList.toggle("form-toggle");
});

btn_close.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title_input = document.querySelector("#book-title").value;
    const author_input = document.querySelector("#book-author").value;
    const pages_input = document.querySelector("#book-pages").value;
    const read_input = document.querySelector("#book-status").checked;
    var pages = pages_input;

    if (title_input != "") {
        if (pages_input < 1 || pages_input == "") {
            pages = 0
        };
        addBookToLibrary(title_input, author_input, pages, read_input);
    }
});

addBookToLibrary("Joe", "Mama", 142, 1);
addBookToLibrary("The Hobbit", "Joe Mama", 1422, 0);
addBookToLibrary("Joe", "Mama", 142, 1);
addBookToLibrary("The Hobbit", "Joe Mama", 1422, 0);
addBookToLibrary("Joe", "Mama", 142, 1);
addBookToLibrary("The Hobbit", "Joe Mama", 1422, 0);

console.log(totalBooks);