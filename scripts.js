const myLibrary = [];
const btn_addBook = document.querySelector("#add-book");
const addBookForm = document.querySelector(".form-toggle");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;

    this.info = function() {
        read ? read = "has been read" : read = "has not been read yet";
        return (title + "by " + author + ", " + pages + " pages, " + read + ".");
    }

    console.log(this.info());
}

function addBookToLibrary() {
    // const title_input = document.querySelector("#password");
    // const author_input = document.querySelector("#confirm-password");
    // const pages_input = document.querySelector(".message");
    // const read_input = document.querySelector("form");

    // form.addEventListener("submit", e => {
    //     const pwd = document.querySelector('#password').value;
    //     const confirm_pwd = document.querySelector('#confirm-password').value;
    //     const pwd_msg = document.querySelector('.pwd-msg'); 
    // });
}

btn_addBook.addEventListener("click", () => {
    addBookForm.classList.toggle("form-toggle");
});

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 0);
hobbit.info();