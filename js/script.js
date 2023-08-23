let btnMenu = document.querySelector('#menu');
let btnClose = document.querySelector('.exit');

btnMenu.addEventListener('click', function(){
    let nav = document.querySelector('#cabecalho-menu');
    nav.classList.toggle('active');
})

