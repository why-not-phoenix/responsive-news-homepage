const menuOpenBtn = document.getElementById('menu-open-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const menuItems = document.getElementById('menu-items');
const body = document.querySelector('body');

menuOpenBtn.addEventListener('click', () => {
    menuItems.classList.add('slide-in');
    body.classList.add('menu-open');
});

menuCloseBtn.addEventListener('click', () => {
    menuItems.classList.remove('slide-in');
    body.classList.remove('menu-open');
});