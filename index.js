//constructor

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

// Display Constructor

function Display() {



}

// Add methods to display prototype
Display.prototype.add = function (book) {
    console.log("Adding to UI");

    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                      
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
// Implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    } else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('msg');
    message.innerHTML = `<div class="alert alert-dismissible alert-${type}">
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                        <strong>Message:
                        </strong> ${displayMessage}.
                    </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 1500);

}

// Add Submit event listener to form libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value.toUpperCase();
    let type;
    let fiction = document.getElementById('Sciencefiction');
    let comic = document.getElementById('Comic');
    let programming = document.getElementById('Programming');



    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (comic.checked) {
        type = comic.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your Book has been succesfully added.')
    }
    else {
        // Show error to user
        display.show('danger', ' Sorry you can not add this book.');
    }





}
