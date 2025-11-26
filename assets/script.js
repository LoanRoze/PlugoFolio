/* ----------------------------- data (à remplacer par ton JSON) ----------------------------- */
const skillsData = [
    { nom_competence: "JavaScript", niveau_competence: "9" },
    { nom_competence: "Java", niveau_competence: "8" },
    { nom_competence: "React", niveau_competence: "8" },
    { nom_competence: "Node.js", niveau_competence: "7" },
    { nom_competence: "CSS", niveau_competence: "9" }
];

const projectsData = [
    { nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" },
    { nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" }
];

/* ----------------------------- theme toggle ----------------------------- */
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme) root.setAttribute('data-theme', savedTheme);

themeToggle.textContent = (root.getAttribute('data-theme') === 'dark') ? 'Light' : 'Dark';

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current === 'dark' ? 'dark' : '');
    localStorage.setItem('theme', current === 'dark' ? 'dark' : 'light');
    themeToggle.textContent = (current === 'dark') ? 'Light' : 'Dark';
});

/* ----------------------------- mobile menu ----------------------------- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

/* ----------------------------- render skills ----------------------------- */
const skillsGrid = document.getElementById('skillsGrid');
function renderSkills(data) {
    skillsGrid.innerHTML = '';
    data.forEach(s => {
        const lvl = Math.max(0, Math.min(10, parseInt(s.niveau_competence || s.level || 0, 10)));
        const w = (lvl / 10) * 100;
        const el = document.createElement('div'); el.className = 'skill';
        el.innerHTML = `
        <div class="meta">
            <strong>${s.nom_competence}</strong>
            <span>${lvl}/10</span>
        </div>
        <div class="bar">
            <i style="width:${w}%"></i>
        </div>`;
        skillsGrid.appendChild(el);
    })
}
renderSkills(skillsData);

/* ----------------------------- render projects (carousel) ----------------------------- */
const cards = document.getElementById('cards');
function renderProjects(list) {
    cards.innerHTML = '';
    list.forEach(p => {
        const a = document.createElement('a');
        a.href = p.lien_projet || '#';
        a.className = 'card col-4';
        a.innerHTML = `\n          
            <img src="${p.img_url}" alt="${p.nom_projet}">\n          
            <div class="body">\n            
                <h3>${p.nom_projet}</h3>\n            
                <p>${p.description_courte}</p>\n          
            </div>`;
        cards.appendChild(a);
    });
}
renderProjects(projectsData);

/* simple prev / next behaviour */
const prev = document.getElementById('prev');
const next = document.getElementById('next');
prev.addEventListener('click', () => { cards.scrollBy({ left: -320, behavior: 'smooth' }) });
next.addEventListener('click', () => { cards.scrollBy({ left: 320, behavior: 'smooth' }) });

// Search
const projectSearch = document.getElementById('projectSearch');
projectSearch.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = projectsData.filter(p => (p.nom_projet + ' ' + p.description_courte + ' ' + (p.description_longue || '')).toLowerCase().includes(q));
    renderProjects(filtered);
});

/* keyboard support for slider */
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') cards.scrollBy({ left: -320, behavior: 'smooth' });
    if (e.key === 'ArrowRight') cards.scrollBy({ left: 320, behavior: 'smooth' });
});

/* accessibility small improvement: close mobile menu when navigating */
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

/* allow replacing data from external JSON later */
// Exemple: fetch('/data/skills.json').then(r=>r.json()).then(d=>renderSkills(d));
// Exemple: fetch('/data/projects.json').then(r=>r.json()).then(d=>renderProjects(d));