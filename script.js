
// Changement d'icône au clic
const icon = document.getElementById("icon");
document.addEventListener("mousedown", () => {
    icon.src = "img/marquedefab.png"; // Image au clic
});

document.addEventListener("mouseup", () => {
    icon.src = "img/marquedefab1.png"; // Retour à l'image de base
});

// Aide - burger menu
    document.addEventListener('DOMContentLoaded', () => {
        const burgerMenu = document.querySelector('.burger-menu');
        const navbar = document.querySelector('.navbar ul');

        burgerMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    });

    // Page - Projets 
// Données des projets
const projects = [
    { title: "Projet 1", date: "Janvier 2024", skills: "HTML, CSS, JavaScript", description: "Description du projet 1", collaborators: "Collaborateur 1" },
    { title: "Projet 2", date: "Février 2024", skills: "PHP, MySQL", description: "Description du projet 2", collaborators: "Collaborateur 2" },
    { title: "Projet 3", date: "Mars 2024", skills: "React, Node.js", description: "Description du projet 3", collaborators: "Collaborateur 3" },
    { title: "Projet 4", date: "Avril 2024", skills: "JavaScript, MongoDB", description: "Description du projet 4", collaborators: "Collaborateur 4" },
    { title: "Campagne Publicitaire", date: "Octobre 2024", skills: "Python, Flask", description: "Description du projet 5", collaborators: "Anastasia Gawryluk & Sophie" },
    { title: "Databstention", date: "Décembre 2024", skills: "Développement Web, Création Numérique, Gestion de projet", description: "Création d'un site 'Dataviz' qui permet de visualiser des données sur un sujet. Nous avons choisi 'Le taux d'abstention au premier tour des éléctions législatives en France'", collaborators: "Justine Thebault & Ramata Wagne" }
];

// Fonction pour ouvrir le pop-up avec les informations du projet
function openPopup(projectIndex) {
    const project = projects[projectIndex - 1];
    document.getElementById("popup-title").textContent = project.title;
    document.getElementById("popup-date").children[0].textContent = project.date;
    document.getElementById("popup-skills").children[0].textContent = project.skills;
    document.getElementById("popup-description").children[0].textContent = project.description;
    document.getElementById("popup-collaborators").children[0].textContent = project.collaborators;

    document.getElementById("popup").style.display = "block";
}

// Fonction pour fermer le pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Point d'interrogation encerclé 
const questionCircle = document.getElementById('question-circle');
const bulleinfo = document.getElementById('bulle-info');
const overlay = document.getElementById('overlay');
questionCircle.addEventListener('click', () => {
    bulleinfo.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    bulleinfo.style.display = 'none';
    overlay.style.display = 'none';
});

// Fonction pour défiler vers une section spécifique
function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentIndex = index; // Mettre à jour l'index actuel
        console.log(`Défilement vers la section : ${sections[index].id}`);
    } else {
        console.warn("Index hors des limites :", index);
    }
}

// Écouter les événements de touche sur le document
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' && currentIndex < sections.length - 1) {
        // Flèche bas : aller à la section suivante
        scrollToSection(currentIndex + 1);
    } else if (event.key === 'ArrowUp' && currentIndex > 0) {
        // Flèche haut : revenir à la section précédente
        scrollToSection(currentIndex - 1);
    } else {
        console.log("Aucune section suivante/précédente disponible.");
    }
});
