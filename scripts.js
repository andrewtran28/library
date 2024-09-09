const myLibrary = [];

function  Book(title, author, pages, read) {
//constructor that takes user's input and stores the new book objects in to an array.
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
    //do stuff here
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, 0);

hobbit.info();
