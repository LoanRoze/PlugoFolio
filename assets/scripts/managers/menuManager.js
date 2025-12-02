const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

function activate() {
    if (!burger || !mobileMenu) return;

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    mobileMenu.querySelectorAll('a').forEach((link) =>
        link.addEventListener('click', () => mobileMenu.classList.remove('open'))
    );
}

export { activate };
