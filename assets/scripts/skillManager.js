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

function activate(skillsData) {
    renderSkills(skillsData);
}

export { activate }