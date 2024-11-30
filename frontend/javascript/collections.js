     // Liste des produits
     const products = Array.from({ length: 200 }, (_, i) => ({
        id: i + 1, // Identifiant unique
        name: `Patrimoine ${i + 1}`,
        image: './images/logo1.png',
        }));

        const itemsPerPage = 35; // 5 colonnes * 7 lignes
        let currentPage = 1;

        // Fonction pour afficher les produits d'une page
        function displayProducts(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name} style="display: block; margin: 0 auto"">
            <h3>${product.name}</h3>
            <div class="stars" data-product="2">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
            </div>
        `;
        // Ajouter un événement click
        productElement.addEventListener('click', () => {
            // Redirection vers la page de détails avec l'ID
            window.location.href = `patrimoine.html?id=${product.id}`;
        });
        productContainer.appendChild(productElement);
    });

    updatePagination(page);
}

        // Fonction pour mettre à jour la pagination
        function updatePagination(page) {
            const totalPages = Math.ceil(products.length / itemsPerPage);
            document.getElementById('prev').disabled = page === 1;
            document.getElementById('prev').classList.toggle('disabled', page === 1);
            document.getElementById('next').disabled = page === totalPages;
            document.getElementById('next').classList.toggle('disabled', page === totalPages);
        }

        // Ajouter les événements pour les boutons
        document.getElementById('prev').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts(currentPage);
            }
        });

        document.getElementById('next').addEventListener('click', () => {
            const totalPages = Math.ceil(products.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts(currentPage);
            }
        });

        // Afficher les produits pour la première page
        displayProducts(currentPage);


        // Gestion des clics sur les étoiles
        const starsContainers = document.querySelectorAll(".stars");

        starsContainers.forEach(container => {
            const stars = container.querySelectorAll("span");

            stars.forEach((star, index) => {
                star.addEventListener("click", () => {
                    // Réinitialiser les étoiles
                    stars.forEach(s => s.classList.remove("selected"));

                    // Activer les étoiles jusqu'à celle cliquée
                    for (let i = 0; i <= index; i++) {
                        stars[i].classList.add("selected");
                    }

                    // Récupérer les informations d'évaluation
                    const productId = container.getAttribute("data-product");
                    const rating = index + 1; // Index commence à 0, donc +1

                    console.log(`Produit ${productId} évalué à ${rating} étoiles.`);

                    // Envoi de l'évaluation à une API (optionnel)
                    // fetch('/api/avis', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify({ productId, rating })
                    // });
                });
            });
        });

        // Fonction pour ouvrir le panier
        function openCart() {
            alert("Panier ouvert !");
        }