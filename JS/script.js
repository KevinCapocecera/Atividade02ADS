const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.textContent = menu.classList.contains('active') ? 'close' : 'menu';
})
