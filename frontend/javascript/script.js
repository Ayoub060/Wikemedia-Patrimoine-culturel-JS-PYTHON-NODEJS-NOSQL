// Afficher un message de bienvenue dans la console
console.log("Bienvenue dans mon premier script JavaScript !");

// Interagir avec un élément HTML après le chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément avec l'ID "demo"
    const demoElement = document.getElementById("demo");
    demoElement.textContent = "Ce texte a été modifié par JavaScript !";
}); 
