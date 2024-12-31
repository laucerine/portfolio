
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
