const cards = document.getElementById('cards');
const projectSearch = document.getElementById('projectSearch');

function buildProjectLink(project) {
    return project.lien_projet || `/projet.html?id=${project.id}`;
}

function renderProjects(projects) {
    if (!cards) return;

    cards.innerHTML = '';

    projects.forEach((project) => {
        const projectLink = document.createElement('a');
        projectLink.href = buildProjectLink(project);
        projectLink.className = 'card col-4';
        projectLink.innerHTML = `
            <img src="${project.img_url}" alt="${project.nom_projet}">
            <div class="body">
                <h3>${project.nom_projet}</h3>
                <p>${project.description_courte}</p>
            </div>
        `;
        cards.appendChild(projectLink);
    });
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
    if (!cards || !projectSearch) return;

    renderProjects(projectsData);

    projectSearch.addEventListener('input', (event) => {
        const filtered = filterProjects(projectsData, event.target.value);
        renderProjects(filtered);
    });
}

export { activate };
