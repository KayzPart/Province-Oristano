const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('main-nav');
const modal = document.getElementById('modal');
const openML = document.getElementById('open-ML')
const closeML = document.getElementById('close-ML');


burgerMenu.addEventListener('click', function(e){
    e.preventDefault();
    nav.classList.toggle('show');
    burgerMenu.classList.toggle('open');
});

openML.addEventListener('click', function(){
    modal.classList.toggle('show')
})

closeML.addEventListener('click', function(){
    modal.classList.toggle('show')
})