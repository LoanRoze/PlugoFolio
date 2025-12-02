const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);

function activate(projects) {
    const project = projects.find(p => p.id === id);
    
    if (!project) {
        document.body.innerHTML = "<h1>Projet introuvable</h1>";
    } else {
        // Injection dans le DOM
        document.getElementById("projectImg").src = project.img_url;
        document.getElementById("projectImg").alt = project.nom_projet;
    
        document.getElementById("projectTitle").textContent = project.nom_projet;
        document.getElementById("projectShortDesc").textContent = project.description_courte;
        document.getElementById("projectLongDesc").textContent = project.description_longue || "Aucune description détaillée disponible.";
    
        document.getElementById("githubLink").href = project.lien_github || "#";
        document.getElementById("projectLink").href = project.lien_projet || "#";
    }

}

export { activate }