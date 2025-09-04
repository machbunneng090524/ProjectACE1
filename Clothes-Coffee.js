// New product data for a clothes store
const productData = [
    {
        title: "PEACE CAMBODIA",
        image: "photo_3_2025-09-03_12-56-59.jpg",
        price: "$14"
    },
    {
        title: "KHMER RISM",
        image: "photo_4_2025-09-03_12-56-59.jpg",
        price: "$15.50"
    },
    {
        title: "PEACE CAMBODIA",
        image: "photo_5_2025-09-03_12-56-59.jpg",
        price: "$16.50"
    },
    {
        title: "PEACE CAMBODIA",
        image: "photo_6_2025-09-03_12-56-59.jpg",
        category: "Dresses",
        price: "$13.00"
    },
    {
        title: "PEACE CAMBODIA",
        image: "photo_7_2025-09-03_12-56-59.jpg",
        category: "Knitwear",
        price: "$14.00"
    },
    {
        title: "PEACE CAMBODIA",
        image: "photo_8_2025-09-03_12-56-59.jpg",
        category: "Footwear",
        price: "$14.99"
    },
    {
        title: "PEACE CAMBODIA",
        image: "photo_9_2025-09-03_12-56-59.jpg",
        category: "Tops",
        price: "$16.00"
    },
    {
        title: "KHMERRISM V1",
        image: "photo_10_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$19.99"
    },
    {
        title: "KHMERRISM V2",
        image: "photo_11_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$18.99"
    },
    {
        title: "KHMERRISM V3",
        image: "photo_12_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$17.99"
    }
    ,
    {
        title: "KHMERRISM V4",
        image: "photo_13_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$16.99"
    }
    ,
    {
        title: "KHMERRISM V5",
        image: "photo_14_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
    ,
    {
        title: "KHMERRISM V6",
        image: "photo_15_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$14.99"
    }
    ,
    {
        title: "KHMERRISM V7",
        image: "photo_16_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
    ,
    {
        title: "KHMERRISM V8",
        image: "photo_17_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
    ,
    {
        title: "KHMERRISM V9",
        image: "photo_18_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
    ,
    {
        title: "KHMERRISM V10",
        image: "photo_19_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
    ,
    {
        title: "KHMERRISM V11",
        image: "photo_20_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    },
    {
        title: "KHMERRISM V12",
        image: "photo_21_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    },
    {
        title: "KHMERRISM V13",
        image: "photo_22_2025-09-03_12-56-59.jpg",
        category: "Outerwear",
        price: "$15.99"
    }
];

function renderProducts(products, containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            products.forEach(product => {
                const card = document.createElement("div");
                card.className = "coffee-card cursor-pointer";
                // Add data attributes for the cart logic
                card.setAttribute('data-title', product.title);
                card.setAttribute('data-price', product.price);
                card.setAttribute('data-image', product.image);
                card.setAttribute('data-category', product.category);

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400/8d6e63/ffffff?text=Coffee+Image';">
                    <div class="coffee-overlay">
                        <h4>${product.title}</h4>
                        <p>${product.category} - ${product.price}</p>
                    <a href="/Sell_Coffee.html"><button class="order-btn">Order Now</button></a>
                    </div>
                `;
                container.appendChild(card);
            });
        }


        document.addEventListener("DOMContentLoaded", () => {
            // Render products into their respective containers
            renderProducts(productData.slice(0, 4), "coffee-latest-container");
            renderProducts(productData.slice(1, 5), "coffee-popular-container");
            renderProducts(productData.slice(2, 6), "coffee-best-container");
            renderProducts(productData.slice(3, 7), "new-arrivals-container");
            renderProducts(productData, "all-coffee-container");

            // Event listener for adding products to cart
            document.querySelectorAll('.product-container').forEach(container => {
                container.addEventListener('click', (e) => {
                    if (e.target.classList.contains('order-btn')) {
                        const card = e.target.closest('.coffee-card');
                        const title = card.getAttribute('data-title');
                        const price = card.getAttribute('data-price');
                        const image = card.getAttribute('data-image');
                        const newProduct = { title, price, image };

                        let cart = JSON.parse(localStorage.getItem('cart')) || [];
                        cart.push(newProduct);
                        localStorage.setItem('cart', JSON.stringify(cart));
                        
                        showMessage(`Added ${title} to cart!`);
                        
                        // Redirect to cart page after adding
                        setTimeout(() => {
                            window.location.href = '/Sell_Coffee.html';
                        }, 500);
                    }
                });
            });

            // Login and dropdown listeners
            const loginLink = document.getElementById("Login");
            loginLink.addEventListener("click", (e) => {
                e.preventDefault();
                showMessage("Login functionality is not implemented yet.");
            });

            document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
                dropBtn.preventDefault();
                dropBtn.addEventListener("click", function (e) {
                    const menu = this.nextElementSibling;
                    if (menu.style.display === "flex") {
                        menu.style.display = "none";
                    } else {
                        // Hide other open dropdowns
                        document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
                        menu.style.display = "flex";
                    }
                });
            });
        });

          function showMessage(message) {
            const msgBox = document.getElementById('message-box');
            msgBox.textContent = message;
            msgBox.classList.add('show');
            setTimeout(() => {
                msgBox.classList.remove('show');
            }, 3000);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const cartListEl = document.getElementById('cart-list');
            const subtotalEl = document.getElementById('subtotal-price');
            const discountEl = document.getElementById('discount-price');
            const totalEl = document.getElementById('total-price');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const renderCart = () => {
                cartListEl.innerHTML = '';
                let subtotal = 0;

                if (cart.length === 0) {
                    cartListEl.innerHTML = '<p class="text-center text-gray-400 mt-8">Your cart is empty.</p>';
                } else {
                    cart.forEach((product, index) => {
                        const itemEl = document.createElement('div');
                        itemEl.className = 'cart-item';
                        itemEl.innerHTML = `
                            <div class="cart-item-details">
                                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/100x100/333333/ffffff?text=No+Image';">
                                <div>
                                    <h4 class="font-semibold">${product.title}</h4>
                                    <p class="text-yellow-400">${product.price}</p>
                                </div>
                            </div>
                            <button class="remove-btn" data-index="${index}">&times;</button>
                        `;
                        cartListEl.appendChild(itemEl);
                        subtotal += parseFloat(product.price.replace('$', ''));
                    });
                }
                
                const discount = subtotal * 0.10;
                const total = subtotal - discount;

                subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
                discountEl.textContent = `-$${discount.toFixed(2)}`;
                totalEl.textContent = `$${total.toFixed(2)}`;
            };

            const removeItem = (index) => {
                const removedProduct = cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                showMessage(`Removed ${removedProduct[0].title} from cart.`);
                renderCart();
            };

            // Event listener for removing products
            cartListEl.addEventListener('click', (e) => {
                const removeBtn = e.target.closest('.remove-btn');
                if (removeBtn) {
                    const index = parseInt(removeBtn.dataset.index, 10);
                    removeItem(index);
                }
            });

            // Initial render
            renderCart();
        }); 