const PROJECTS_URL = '/assets/projects.json';

async function fetchProjects() {
    const response = await fetch(PROJECTS_URL);

    if (!response.ok) {
        throw new Error(`Impossible de récupérer les projets (${response.status})`);
    }

    return response.json();
}

async function fetchProjectById(id) {
    const projects = await fetchProjects();
    return projects.find((project) => project.id === id);
}

export { fetchProjects, fetchProjectById };
