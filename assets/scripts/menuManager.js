const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function activate() {
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

}

export { activate }