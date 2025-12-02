const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

function activate() {
    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    themeToggle.textContent = (root.getAttribute('data-theme') === 'dark') ? 'Light' : 'Dark';

    themeToggle.addEventListener('click', () => {
        const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', current === 'dark' ? 'dark' : '');
        localStorage.setItem('theme', current === 'dark' ? 'dark' : 'light');
        themeToggle.textContent = (current === 'dark') ? 'Light' : 'Dark';
    });
}

export { activate }