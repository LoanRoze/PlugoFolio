const cards = document.getElementById('cards');
const projectSearch = document.getElementById('projectSearch');

function renderProjects(list) {
    cards.innerHTML = '';

    list.forEach(p => {
        const a = document.createElement('a');
        a.href = p.lien_projet || '#';
        a.className = 'card col-4';
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

function activate(projectsData) {
    renderProjects(projectsData);

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
}

export { activate };
