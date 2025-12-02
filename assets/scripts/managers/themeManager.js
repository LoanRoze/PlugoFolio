const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

function activate() {
    if (!themeToggle) return;

    if (savedTheme) root.setAttribute('data-theme', savedTheme);

    themeToggle.textContent = root.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark';

    themeToggle.addEventListener('click', () => {
        const isDarkMode = root.getAttribute('data-theme') === 'dark';
        const nextTheme = isDarkMode ? 'light' : 'dark';

        root.setAttribute('data-theme', nextTheme === 'dark' ? 'dark' : '');
        localStorage.setItem('theme', nextTheme === 'dark' ? 'dark' : 'light');
        themeToggle.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
    });
}

export { activate };
