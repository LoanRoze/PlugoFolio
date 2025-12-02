const skillsGrid = document.getElementById('skillsGrid');

function renderSkills(skills) {
    if (!skillsGrid) return;

    skillsGrid.innerHTML = '';

    skills.forEach((skill) => {
        const level = Math.max(0, Math.min(10, parseInt(skill.niveau_competence || skill.level || 0, 10)));
        const levelWidth = (level / 10) * 100;
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.innerHTML = `
    <div class="meta">
        <strong>${skill.nom_competence}</strong>
        <span>${level}/10</span>
    </div>
    <div class="bar">
        <i style="width:${levelWidth}%"></i>
    </div>`;
        skillsGrid.appendChild(skillElement);
    });
}

function activate(skillsData) {
    renderSkills(skillsData);
}

export { activate };
