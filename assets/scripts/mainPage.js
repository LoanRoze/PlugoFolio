/* ----------------------------- data (à remplacer par ton JSON) ----------------------------- */
const skillsData = [
    { nom_competence: "JavaScript", niveau_competence: "9" },
    { nom_competence: "Java", niveau_competence: "8" },
    { nom_competence: "React", niveau_competence: "8" },
    { nom_competence: "Node.js", niveau_competence: "7" },
    { nom_competence: "CSS", niveau_competence: "9" }
];

const projectsData = [
    { nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" },
    { nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" }
];

import * as skillManager from './skillManager.js'
import * as themeManager from './themeManager.js'
import * as menuManager from './menuManager.js'
import * as projectCarouselManager from './projectCarouselManager.js'
skillManager.activate(skillsData)
themeManager.activate()
menuManager.activate()
projectCarouselManager.activate(projectsData)

