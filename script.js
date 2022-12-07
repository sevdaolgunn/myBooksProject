//book class

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

//UI Class

class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book 1',
                author: 'Sevda Olgun'
            },
            {
                title: 'Book 2',
                author: 'Sevda Olgun'
            },
            {
                title: 'Book 3',
                author: 'Sevda Olgun'
            }
        ];
        
        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){

        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href = "#" class ="delete_button">X</a></td>
        `;

        list.appendChild(row);
    }
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(){
        
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';

    }
}

// store class: handles storge
// event: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event: add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {

    e.preventDefault(); //actual submit
   
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    if(title == '' || author == '') {
        alert('Please fill in all fields')

    }
    else{

    const book = new Book(title, author); 

    UI.addBookToList(book);

    UI.clearFields();

    }
});

//event: remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
});

