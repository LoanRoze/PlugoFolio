import { fetchProjectById } from '../data/projectRepository.js';
import * as themeManager from '../managers/themeManager.js';
import * as menuManager from '../managers/menuManager.js';
import * as projectSingleManager from '../managers/projectSingleManager.js';

async function init() {
    themeManager.activate();
    menuManager.activate();

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));

    if (!Number.isInteger(id) || id <= 0) {
        projectSingleManager.activate(null);
        return;
    }

    try {
        const project = await fetchProjectById(id);
        projectSingleManager.activate(project);
    } catch (error) {
        console.error(error);
        projectSingleManager.activate(null);
    }
}

init();
