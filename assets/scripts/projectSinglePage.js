const projectsData = [
    { id: 1, nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { id: 2, nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { id: 3, nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" },
    { id: 4, nom_projet: "Site vitrine", description_courte: "Petit projet d'un site vitrine sur une agence de voyage", description_longue: "Ce projet a été réalisé.......", img_url: "https://picsum.photos/seed/vitrine/800/600", lien_github: "https://github.com/LoanRoze/projet", lien_projet: "" },
    { id: 5, nom_projet: "TirAuxLoan (Jeu)", description_courte: "Jeu JS avec interactions sonores et manette", description_longue: "Détails...", img_url: "https://picsum.photos/seed/game/800/600", lien_github: "https://github.com/LoanRoze/tirauxloan", lien_projet: "" },
    { id: 6, nom_projet: "Accurate Money", description_courte: "Outil de gestion financière perso", description_longue: "Détails...", img_url: "https://picsum.photos/seed/money/800/600", lien_github: "https://github.com/LoanRoze/accurate-money", lien_projet: "" }
];

import * as themeManager from './themeManager.js'
import * as menuManager from './menuManager.js'
import * as projectSingleManager from './projectSingleManager.js'
themeManager.activate()
menuManager.activate()
projectSingleManager.activate(projectsData)