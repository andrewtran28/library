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

function displayLibrary() {
    let library = document.querySelector(".library-cont");

    library.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const card = document.createElement("div");
        card.className = "book";
      
        card.innerHTML = `
            <button class="remove">x</button>
            <div class="title">${book.title}</div>
            <div class="author">${book.author}</div>
            <div class="page">Page Count: ${book.pages}</div>
            <div>
                Read Status: 
                <input type="checkbox" id="read" name="read" ${book.read ? "checked" : "unchecked"}>
            </div>
        `;

        library.appendChild(card);
    }
    
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
        document.removeChild(card);
        console.log("Test");
    });

}

function addBookToLibrary(event) {
    event.preventDefault();

    const title_input = document.querySelector("#book-title").value;
    const author_input = document.querySelector("#book-author").value;
    const pages_input = document.querySelector("#book-pages").value;
    const read_input = document.querySelector("#book-status").checked;

    let newBook = new Book(title_input, author_input, pages_input, read_input);

    myLibrary.push(newBook);
    displayLibrary();

    toggleForm.classList.toggle("form-toggle");
}

btn_addBook.addEventListener("click", () => {
    form.reset();
    toggleForm.classList.toggle("form-toggle");
});

form.addEventListener("submit", addBookToLibrary);