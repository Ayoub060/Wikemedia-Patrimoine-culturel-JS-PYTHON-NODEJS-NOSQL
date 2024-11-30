const map = L.map('map').setView([48.8566, 2.3522], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;

            map.setView([userLat, userLng], 13);

            const greenManIcon = L.icon({
                iconUrl: './images/homme.png',  
                iconSize: [32, 32],  
                iconAnchor: [16, 32],  
                popupAnchor: [0, -32],  
            });

            L.marker([userLat, userLng], { icon: greenManIcon }).addTo(map)
                .bindPopup('Vous êtes ici.')
                .openPopup();
        },
        (error) => {
            alert("Impossible d'obtenir votre position. Veuillez vérifier vos paramètres.");
        }
    );
} else {
    alert("La géolocalisation n'est pas prise en charge par votre navigateur.");
}

// Liste des magasins Aldi avec leurs coordonnées et descriptions
const magasinsAldi = [
    { lat: 48.8566, lng: 2.3522, description: "Magasin Aldi Paris" },
    { lat: 48.8708, lng: 2.3127, description: "Magasin Aldi Paris 2" },
    { lat: 48.8744, lng: 2.2854, description: "Magasin Aldi Paris 3" },
];

// Création d'une icône personnalisée pour le point rouge
const redIcon = L.divIcon({
    className: 'leaflet-div-icon', // Classe par défaut pour les icônes de div
    html: '<div style="background-color: red; border-radius: 50%; width: 12px; height: 12px;"></div>',
    iconSize: [12, 12],  // Taille de l'icône
    iconAnchor: [6, 6],  // Point d'ancrage au centre du cercle
});

// Ajouter les marqueurs pour chaque magasin avec des points rouges
magasinsAldi.forEach(magasin => {
    L.marker([magasin.lat, magasin.lng], { icon: redIcon }).addTo(map)
        .bindPopup(magasin.description);
});

function toggleBlur() {
const mapElement = document.getElementById('map');
mapElement.classList.toggle('blur'); // Ajoute ou retire la classe 'blur'
}
