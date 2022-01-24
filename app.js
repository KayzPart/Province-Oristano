const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('main-nav');

burgerMenu.addEventListener('click', function(e){
    e.preventDefault();
    nav.classList.toggle('show');
    burgerMenu.classList.toggle('open');
});