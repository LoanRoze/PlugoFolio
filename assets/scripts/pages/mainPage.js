import { fetchProjects } from '../data/projectRepository.js';
import { fetchSkills } from '../data/skillRepository.js';
import * as skillManager from '../managers/skillManager.js';
import * as themeManager from '../managers/themeManager.js';
import * as menuManager from '../managers/menuManager.js';
import * as projectCarouselManager from '../managers/projectCarouselManager.js';

async function init() {
    themeManager.activate();
    menuManager.activate();

    try {
        const skills = await fetchSkills();
        skillManager.activate(skills);
    } catch (error) {
        console.error(error);
    }

    try {
        const projects = await fetchProjects();
        projectCarouselManager.activate(projects);
    } catch (error) {
        console.error(error);
    }
}

init();
