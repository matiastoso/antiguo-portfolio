let btnMenu = document.getElementById('btnMenu');

btnMenu.addEventListener('click', function() {
    let header = document.getElementById('header');
    header.classList.toggle('menu-active');
})