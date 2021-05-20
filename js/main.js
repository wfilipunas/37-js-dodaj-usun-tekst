let dodaj = document.querySelector('#dodaj');
let usun = document.querySelector('#usun');
let paragraph = document.querySelector('p');

dodaj.onclick = function() {
    paragraph.textContent = 'Lorem ipsum';
}

usun.onclick = function() {
    paragraph.textContent = '';
}