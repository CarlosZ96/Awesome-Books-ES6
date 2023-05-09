const form = document.querySelector('form');
const bookList = document.getElementById('bookList');
const menua = document.querySelector('.menua');
const menub = document.querySelector('.menub');
const menuc = document.querySelector('.menuc');
const main = document.querySelector('.list');
const add = document.querySelector('.add_new');
const contact = document.querySelector('.contact');
const books = [];

import { Abooks } from './book.js';

const Abooksa = new Abooks(books);
Abooksa.local();
Abooksa.displayBooks();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const Abooksa = new Abooks(books);
  Abooksa.submitbtn();
  Abooksa.displayBooks();
});

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const { index } = event.target.dataset;
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    const Abooksa = new Abooks(books);
    Abooksa.displayBooks();
  }
});
Abooksa.displayBooks();

menua.addEventListener('click', () => {
  main.classList.toggle('hide');
  add.classList.add('hide');
  contact.classList.add('hide');
});
menub.addEventListener('click', () => {
  add.classList.toggle('hide');
  main.classList.add('hide');
  contact.classList.add('hide');
});
menuc.addEventListener('click', () => {
  contact.classList.toggle('hide');
  main.classList.add('hide');
  add.classList.add('hide');
});