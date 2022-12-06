let addBookButton = document.getElementById('addBook');
let libraryContainer = document.getElementById('libraryContainer');
let inputText = document.getElementById('inputText');

addBookButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    libraryContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

});


