document.addEventListener("DOMContentLoaded", () => {
    const products = [
        // Tops
        { id: 1, name: "Oversized hoodie", category: "tops", badge: "NEW DROP", image: "../img/Echo Men's Hoodie.jpg" },
        { id: 2, name: "Half-zip sweatshirt", category: "tops", badge: "BESTSELLER", image: "../img/Half-Zip Sweatshirt Sand - L.jpg" }, 
        { id: 3, name: "Zip-up jacket hoodie", category: "tops", badge: "NEW DROP", image: "../img/Screenshot 2026-08-26 105618.png" },
        { id: 4, name: "Graphic tee", category: "tops", badge: "SALE", image: "../img/Screenshot 2026-08-26 111414.png" },
        { id: 5, name: "Turtleneck sweater", category: "tops", badge: "BESTSELLER", image: "../img/Screenshot 2026-08-26 111534.png" }, 
        { id: 6, name: "Long sleeve tee", category: "tops", badge: "NEW DROP", image: "../img/Screenshot 2026-08-26 111708.png" },

        // Bottoms & Outerwear
        { id: 7, name: "Cargo pants", category: "bottoms-outerwear", badge: "BESTSELLER", image: "cargo.jpg" },
        { id: 5, name: "Turtleneck sweater", category: "tops", badge: "BESTSELLER", image: "plain-tee.jpg" }, 
        { id: 9, name: "Track pants", category: "bottoms-outerwear", badge: "NEW DROP", image: "track.jpg" },
        { id: 10, name: "Bomber jacket", category: "bottoms-outerwear", badge: "BESTSELLER", image: "bomber.jpg" },
        { id: 11, name: "Denim jacket", category: "bottoms-outerwear", badge: "NEW DROP", image: "denim.jpg" },
        { id: 12, name: "Windbreaker", category: "bottoms-outerwear", badge: "SALE", image: "windbreaker.jpg" },

        // Shoes & Accessories
        { id: 13, name: "Chunky sneakers", category: "shoes-accessories", badge: "BESTSELLER", image: "sneakers.jpg" },
        { id: 14, name: "High-top sneakers", category: "shoes-accessories", badge: "NEW DROP", image: "hightop.jpg" },
        { id: 15, name: "Slides", category: "shoes-accessories", badge: "SALE", image: "slides.jpg" },
        { id: 16, name: "Beanie", category: "shoes-accessories", badge: "BESTSELLER", image: "beanie.jpg" },
        { id: 17, name: "Crossbody bag", category: "shoes-accessories", badge: "NEW DROP", image: "bag.jpg" },
        { id: 18, name: "Chain necklace", category: "shoes-accessories", badge: "SALE", image: "necklace.jpg" }
    ];

    const productsContainer = document.getElementById("products-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    function renderProducts(items) {
        if (!productsContainer) return;

        productsContainer.innerHTML = items
            .map(
                (item) => `
      <div class="col-12 col-sm-4 mb-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <span class="badge bg-dark mb-2">${item.badge}</span>
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">High quality streetwear piece from ECHO collection.</p>
            <a href="#" class="btn btn-primary">View Product</a>
          </div>
        </div>
      </div>
    `
            )
            .join("");
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((btn) => {
                btn.classList.remove("active", "btn-dark");
                btn.classList.add("btn-outline-dark");
            });
            button.classList.add("active", "btn-dark");
            button.classList.remove("btn-outline-dark");

            const selectedCategory = button.getAttribute("data-filter");

            if (selectedCategory === "all") {
                renderProducts(products);
            } else {
                const filtered = products.filter(
                    (item) => item.category === selectedCategory
                );
                renderProducts(filtered);
            }
        });
    });

    // Initial render
    renderProducts(products);
});