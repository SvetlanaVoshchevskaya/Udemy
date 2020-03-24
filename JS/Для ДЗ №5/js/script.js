'use strict';
const menuItem = document.querySelectorAll('.menu-item');
const menu = document.querySelector('.menu');
const title = document.querySelector('#title');
const adv = document.querySelector('.adv');
const column = document.querySelectorAll('.column');
const comment = document.querySelector('#prompt');

// menuItem[1].textContent = 'Второй пункт';
// menuItem[2].textContent = 'Третий пункт';

menu.insertBefore(menuItem[2], menuItem[1])

const li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.append(li);

title.textContent = 'Мы продаем только подлинную технику Apple';
document.body.style.background =
  'url("../img/apple_true.jpg") center no-repeat';
column[1].removeChild(adv);

const userComment = prompt('Ваше отношение к технике Apple');

comment.innerHTML = userComment;