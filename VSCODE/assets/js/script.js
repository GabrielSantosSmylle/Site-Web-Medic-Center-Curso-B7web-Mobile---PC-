const menuBtn = document.querySelector('.menu_mobile');
const menuList = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('show');
    menuBtn.classList.toggle('open');
});