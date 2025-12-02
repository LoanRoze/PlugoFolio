const cards = document.getElementById('cards');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const projectSearch = document.getElementById('projectSearch');

function toggleDescription(card, descriptionElement, button) {
    const expanded = card.classList.toggle('expanded');
    descriptionElement.hidden = !expanded;
    button.textContent = expanded ? 'Masquer la description' : 'Voir la description';
}

function renderProjects(projects) {
    if (!cards) return;

    cards.innerHTML = '';

    projects.forEach((project) => {
        const card = document.createElement('article');
        const descriptionId = `project-desc-${project.id}`;
        card.className = 'card col-4 carousel-item project-card';
        card.innerHTML = `
            <img src="${project.img_url}" alt="${project.nom_projet}">
            <div class="body">
                <h3>${project.nom_projet}</h3>
                <p class="short-description">${project.description_courte}</p>
                <div class="long-description" id="${descriptionId}" hidden>
                    <p>${project.description_longue}</p>
                </div>
                <button class="btn toggle-description" type="button" aria-expanded="false" aria-controls="${descriptionId}">Voir la description</button>
            </div>
        `;

        const toggleButton = card.querySelector('.toggle-description');
        const description = card.querySelector('.long-description');

        if (toggleButton && description) {
            toggleButton.addEventListener('click', () => {
                toggleDescription(card, description, toggleButton);
                toggleButton.setAttribute('aria-expanded', card.classList.contains('expanded'));
            });
        }

        cards.appendChild(card);
    });
}

function getItems() {
    return cards ? cards.querySelectorAll('.carousel-item') : [];
}

function getItemWidth() {
    const items = getItems();
    if (items.length === 0) return 0;

    const item = items[0];
    const style = window.getComputedStyle(cards);
    const gap = parseInt(style.gap, 10) || 0;

    return item.offsetWidth + gap;
}

function filterProjects(projects, query) {
    const normalizedQuery = query.toLowerCase().trim();

    return projects.filter((project) =>
        `${project.nom_projet} ${project.description_courte} ${project.description_longue || ''}`
            .toLowerCase()
            .includes(normalizedQuery)
    );
}

function activate(projectsData) {
    if (!cards || !projectSearch || !prev || !next) return;

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

    projectSearch.addEventListener('input', (event) => {
        const filtered = filterProjects(projectsData, event.target.value);
        renderProjects(filtered);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            cards.scrollBy({ left: -getItemWidth(), behavior: 'smooth' });
        }

        if (event.key === 'ArrowRight') {
            cards.scrollBy({ left: getItemWidth(), behavior: 'smooth' });
        }
    });
}

export { activate };
