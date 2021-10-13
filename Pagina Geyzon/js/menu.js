const menuModal = document.querySelector('.navigation__menu');
const yoshiModal = document.querySelector('.yoshi');

document.querySelector('.header__menu').addEventListener('click', function(){
    menuModal.classList.toggle('closed');
})

document.querySelector('.header__bell').addEventListener('click', function(){
    yoshiModal.classList.toggle('yoshi__hide')
})

