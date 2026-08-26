document.addEventListener("DOMContentLoaded", () => {
    const products = [
        // Tops
        { id: 1, name: "Oversized hoodie", category: "tops", badge: "NEW DROP", price: 28.00, description: "Heavyweight cotton hoodie with a relaxed, oversized fit.", image: "../img/Echo Men's Hoodie.jpg" },
        { id: 2, name: "Half-zip sweatshirt", category: "tops", badge: "BESTSELLER", price: 30.00, description: "Cozy half-zip pullover, perfect for layering.", image: "../img/Half-Zip Sweatshirt Sand - L.jpg" },
        { id: 3, name: "Zip-up jacket hoodie", category: "tops", badge: "NEW DROP", price: 32.00, description: "Full-zip hoodie with a sporty streetwear edge.", image: "../img/Screenshot 2026-08-26 105618.png" },
        { id: 4, name: "Graphic tee", category: "tops", badge: "SALE", price: 16.00, description: "Soft cotton tee with a bold front print.", image: "../img/Screenshot 2026-08-26 111414.png" },
        { id: 5, name: "Turtleneck sweater", category: "tops", badge: "BESTSELLER", price: 26.00, description: "Ribbed turtleneck knit for a sleek layered look.", image: "../img/Screenshot 2026-08-26 111534.png" },
        { id: 6, name: "Long sleeve tee", category: "tops", badge: "NEW DROP", price: 18.00, description: "Everyday long sleeve tee in heavy cotton.", image: "../img/Screenshot 2026-08-26 111708.png" },

        // Bottoms & Outerwear
        { id: 7, name: "Cargo pants", category: "bottoms-outerwear", badge: "BESTSELLER", price: 34.00, description: "Utility cargo pants with multiple side pockets.", image: "../img/Suo Men Easy Wash Cargos Trousers.jpg" },
        { id: 8, name: "Straight-leg jeans", category: "bottoms-outerwear", badge: "SALE", price: 30.00, description: "Classic straight-fit denim, built to last.", image: "../img/Straight Fit Genz Jeans For men.jpg" },
        { id: 9, name: "Track pants", category: "bottoms-outerwear", badge: "NEW DROP", price: 26.00, description: "Tapered track pants with side stripe detail.", image: "../img/download.jpg" },
        { id: 10, name: "Bomber jacket", category: "bottoms-outerwear", badge: "BESTSELLER", price: 52.00, description: "Classic bomber jacket with ribbed trims.", image: "../img/download (1).jpg" },
        { id: 11, name: "Denim jacket", category: "bottoms-outerwear", badge: "NEW DROP", price: 42.00, description: "Timeless denim jacket, layers over anything.", image: "../img/Huang's Women's Denim Jacket.jpg" },
        { id: 12, name: "Windbreaker", category: "bottoms-outerwear", badge: "SALE", price: 38.00, description: "Lightweight windbreaker for unpredictable days.", image: "../img/dd.jpg" },

        // Shoes & Accessories
        { id: 13, name: "Chunky sneakers", category: "shoes-accessories", badge: "BESTSELLER", price: 45.00, description: "Chunky-sole sneakers with all-day comfort.", image: "../img/Beige Chunky Sneakers.jpg" },
        { id: 14, name: "High-top sneakers", category: "shoes-accessories", badge: "NEW DROP", price: 48.00, description: "High-top sneakers with a two-tone finish.", image: "../img/Fall_Winter Two Tone High Top Chunky Sneakers.jpg" },
        { id: 15, name: "Slides", category: "shoes-accessories", badge: "SALE", price: 15.00, description: "Cushioned slides for easy everyday wear.", image: "../img/download (2).jpg" },
        { id: 16, name: "Beanie", category: "shoes-accessories", badge: "BESTSELLER", price: 10.00, description: "Ribbed knit beanie, one size fits all.", image: "../img/hats.jpg" },
        { id: 17, name: "Crossbody bag", category: "shoes-accessories", badge: "NEW DROP", price: 22.00, description: "Compact crossbody bag with adjustable strap.", image: "../img/Men's Black Crossbody Bag.jpg" },
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
            <p class="fw-bold mb-1">JD ${item.price.toFixed(2)}</p>
            <p class="card-text">${item.description}</p>
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