const cards = document.getElementById('cards');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const projectSearch = document.getElementById('projectSearch');

function renderProjects(list) {
    cards.innerHTML = '';

    list.forEach(p => {
        const a = document.createElement('a');
        a.href = p.lien_projet || '#';
        a.className = 'card col-4 carousel-item';
        a.innerHTML = `
            <img src="${p.img_url}" alt="${p.nom_projet}">
            <div class="body">
                <h3>${p.nom_projet}</h3>
                <p>${p.description_courte}</p>
            </div>
        `;
        cards.appendChild(a);
    });
}

function getItems() {
    return cards.querySelectorAll('.carousel-item');
}

function getItemWidth() {
    const items = getItems();
    if (items.length === 0) return 0;

    const item = items[0];
    const style = window.getComputedStyle(cards);
    const gap = parseInt(style.gap) || 0;

    return item.offsetWidth + gap;
}

function activate(projectsData) {
    renderProjects(projectsData);

    prev.addEventListener('click', () => {
        cards.scrollBy({
            left: -getItemWidth(),
            behavior: 'smooth'
        });
    });

    next.addEventListener('click', () => {
        cards.scrollBy({
            left: getItemWidth(),
            behavior: 'smooth'
        });
    });

    projectSearch.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase().trim();

        const filtered = projectsData.filter(p =>
            (p.nom_projet + ' ' +
             p.description_courte + ' ' +
             (p.description_longue || '')
            ).toLowerCase().includes(q)
        );

        renderProjects(filtered);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft')
            cards.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });

        if (e.key === 'ArrowRight')
            cards.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
    });
}

export { activate };
