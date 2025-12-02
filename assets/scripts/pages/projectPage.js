import { fetchProjects } from '../data/projectRepository.js';
import * as themeManager from '../managers/themeManager.js';
import * as menuManager from '../managers/menuManager.js';
import * as projectGridManager from '../managers/projectGridManager.js';

async function init() {
    themeManager.activate();
    menuManager.activate();

    try {
        const projects = await fetchProjects();
        projectGridManager.activate(projects);
    } catch (error) {
        console.error(error);
    }
}

init();
