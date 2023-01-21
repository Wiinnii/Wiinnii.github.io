window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_activ'),
    menuItem = document.querySelectorAll('ol'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_activ');
        menu.classList.toggle('activ');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_activ');
            menu.classList.toggle('activ');
        })
    })
})