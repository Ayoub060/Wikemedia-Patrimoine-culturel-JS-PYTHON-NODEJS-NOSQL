// Mock data (remplacez cette partie avec une API ou une base de données réelle)
const resources = [
    { id: 1, type: "images", title: "Image 1", src: "./images/image1.jpg" },
    { id: 2, type: "audio", title: "Audio 1", src: "./audios/audio1.mp3" },
    { id: 3, type: "videos", title: "Vidéo 1", src: "./videos/video1.mp4" },
    { id: 4, type: "livres", title: "Livre 1", src: "./livres/livre1.pdf" },
    { id: 5, type: "images", title: "Image 2", src: "./images/image2.jpg" },
    { id: 6, type: "audio", title: "Audio 2", src: "./audios/audio2.mp3" },
    { id: 7, type: "videos", title: "Vidéo 2", src: "./videos/video2.mp4" },
    { id: 8, type: "livres", title: "Livre 2", src: "./livres/livre2.pdf" },
];

// Fonction pour afficher les ressources
function displayResources(filteredResources) {
    const container = document.getElementById("resources-container");
    container.innerHTML = ""; // Clear existing content

    filteredResources.forEach((resource) => {
        const item = document.createElement("div");
        item.classList.add("resource-item");

        if (resource.type === "images") {
            item.innerHTML = `<img src="${resource.src}" alt="${resource.title}">
                              <p>${resource.title}</p>`;
        } else if (resource.type === "audio") {
            item.innerHTML = `<audio controls>
                                <source src="${resource.src}" type="audio/mpeg">
                              </audio>
                              <p>${resource.title}</p>`;
        } else if (resource.type === "videos") {
            item.innerHTML = `<video controls width="100%">
                                <source src="${resource.src}" type="video/mp4">
                              </video>
                              <p>${resource.title}</p>`;
        } else if (resource.type === "livres") {
            item.innerHTML = `<a href="${resource.src}" target="_blank">📖 ${resource.title}</a>`;
        }

        container.appendChild(item);
    });
}

// Fonction pour filtrer les ressources
function filterResources(type) {
    const filteredResources = type === "all" 
        ? resources 
        : resources.filter((resource) => resource.type === type);

    displayResources(filteredResources);
}

// Afficher les ressources par défaut (toutes les images)
filterResources("all");
