const SKILLS_URL = '/assets/skills.json';

async function fetchSkills() {
    const response = await fetch(SKILLS_URL);

    if (!response.ok) {
        throw new Error(`Impossible de récupérer les compétences (${response.status})`);
    }

    return response.json();
}

export { fetchSkills };
