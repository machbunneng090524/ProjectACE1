// // document.querySelector(".order-now").addEventListener("click", () => {
// //     alert("Thank you for your order! ☕");
// // });
// // document.querySelector(".sign-up").addEventListener("click", () => {
// //     alert("Sign up functionality coming soon!");
// // });

// // dropdown 
// document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
//     dropBtn.addEventListener("click", function (e) {
//         e.preventDefault();
//         const menu = this.nextElementSibling;
//         menu.style.display = menu.style.display === "flex" ? "none" : "flex";
//     });
// });
// // main
// // Sample coffee product data
// const latestCoffee = [
//     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg?w=374&h=374&fit=crop&crop=faces&dpr=2", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg?v=1733148675", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
//   ];

//   const popularCoffee = [
//     { title: "Dark Roast Arrival", image: "https://images.ctfassets.net/4f3rgqwzdznj/79nKG7FXpe2RsjlzGyzKcc/00fa50b8d44d270982349b6b5d5bfb5d/cold_brew_coffee_with_coffee_beans_1417201399.jpg", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://i0.wp.com/ricelifefoodie.com/wp-content/uploads/2025/07/tall-glass-of-iced-honey-coffee-latte.jpg?resize=800%2C1000&ssl=1", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://i0.wp.com/passionspoon.com/wp-content/uploads/2021/07/fresh-mint-and-chocolate-ganache-scaled.jpg?resize=750%2C1122&ssl=1", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://thegirlonbloor.com/wp-content/uploads/2020/05/Vanilla-Sweet-Cream-Cold-Brew-18.jpg", category: "Cold Brew", price: "$4.25" },
//   ];

//   const bestSellers = [
//     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg?w=374&h=374&fit=crop&crop=faces&dpr=2", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg?v=1733148675", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
//   ];

//   const newArrivals = [
//     { title: "Dark Roast Arrival", image: "https://images.ctfassets.net/4f3rgqwzdznj/79nKG7FXpe2RsjlzGyzKcc/00fa50b8d44d270982349b6b5d5bfb5d/cold_brew_coffee_with_coffee_beans_1417201399.jpg", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://i0.wp.com/ricelifefoodie.com/wp-content/uploads/2025/07/tall-glass-of-iced-honey-coffee-latte.jpg?resize=800%2C1000&ssl=1", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://i0.wp.com/passionspoon.com/wp-content/uploads/2021/07/fresh-mint-and-chocolate-ganache-scaled.jpg?resize=750%2C1122&ssl=1", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://thegirlonbloor.com/wp-content/uploads/2020/05/Vanilla-Sweet-Cream-Cold-Brew-18.jpg", category: "Cold Brew", price: "$4.25" },
//   ];

//   // about rendering products

//   const allCoffee = [
//     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg?w=374&h=374&fit=crop&crop=faces&dpr=2", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg?v=1733148675", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
//     { title: "Matcha Latte", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", category: "Matcha Latte", price: "$4.99" },
//     { title: "Matcha Cream", image: "https://tenzotea.co/cdn/shop/articles/Matcha_Latte_with_Matcha_Whipped_Cream.webp?v=1712336018", category: "Matcha Cream", price: "$5.49" },
//     { title: "Matcha Green Tea", image: "https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg", category: "Matcha Green Tea", price: "$3.99" },
//     { title: "Vanilla Matcha Latte", image: "https://joyfulbalanceonline.com/wp-content/uploads/2024/03/Pin-Challenge-Week-1-copy.jpg", category: "Vanilla Matcha", price: "$4.25" },
//     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg?w=374&h=374&fit=crop&crop=faces&dpr=2", category: "Espresso", price: "$4.99" },
//     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
//     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg?v=1733148675", category: "Cold Brew", price: "$3.99" },
//     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
// ];

// function renderProducts(products, containerId) {
//   const container = document.getElementById(containerId);
//   if (!container) return;

//   products.forEach(product => {
//     const card = document.createElement("div");
//     card.className = "coffee-card";

//     card.innerHTML = `
//       <img src="${product.image}" alt="${product.title}">
//       <div class="coffee-overlay">
//         <h4>${product.title}</h4>
//         <p>${product.category} - ${product.price}</p>
//         <a href="/sell_Coffee.html" class="order-btn">Order Now</a>
//       </div>
//     `;

//     container.appendChild(card);
//   });
// }

//   // ✅ Make sure DOM is ready before running
//   document.addEventListener("DOMContentLoaded", () => {
//     renderProducts(latestCoffee, "coffee-latest-container");
//     renderProducts(popularCoffee, "coffee-popular-container");
//     renderProducts(bestSellers, "coffee-best-container");
//     renderProducts(newArrivals, "new-arrivals-container");
//     renderProducts(allCoffee, "all-coffee-container");
//   });

//   // scroll effect

// // Filter Function
// const filterSelect = document.getElementById("filter-select");
// filterSelect.addEventListener("change", () => {
//   const filterValue = filterSelect.value;
//   const cards = document.querySelectorAll(".product-card");
//   cards.forEach(card => {
//     const category = card.dataset.category;
//     card.style.display = filterValue === "all" || category === filterValue ? "block" : "none";
//   });
// });

// // login
// const loginLink = document.getElementById("Login");
// loginLink.addEventListener("click", (e) => {
//   e.preventDefault();
//   // Show login modal or redirect to login page
//   alert("Login functionality is not implemented yet.");
//   // Redirect to login page
//   window.location.href = "login.html";
// });

//   // 🛒
//   const cartLink = document.querySelector(".cart");
//   cartLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     // Show cart modal or redirect to cart page
//     alert("Cart functionality is not implemented yet.");
//     // Redirect to cart page
//     window.location.href = "cart.html";
//   });

//   document.addEventListener('DOMContentLoaded', () => {
//             const productList = document.querySelector('.container');
//             const orderList = document.getElementById('order-list');
//             const subtotalEl = document.getElementById('subtotal-price');
//             const discountEl = document.getElementById('discount-price');
//             const totalEl = document.getElementById('total-price');

//             let cart = [];

//             // CRUD - Create Operation
//             const addProductToCart = (product) => {
//                 cart.push(product);
//                 updateCartUI();
//             };

//             // CRUD - Read Operation (and UI Update)
//             const updateCartUI = () => {
//                 orderList.innerHTML = '';
//                 let subtotal = 0;
                
//                 cart.forEach((product, index) => {
//                     const itemEl = document.createElement('div');
//                     itemEl.className = 'flex items-center justify-between bg-gray-700 p-4 rounded-lg shadow-md';
//                     itemEl.innerHTML = `
//                         <div class="flex items-center">
//                             <img src="${product.image}" alt="${product.name}" class="w-16 h-16 rounded-md object-cover mr-4">
//                             <div>
//                                 <h4 class="font-semibold">${product.name}</h4>
//                                 <p class="text-yellow-400">$${product.price.toFixed(2)}</p>
//                             </div>
//                         </div>
//                         <button class="remove-item-btn text-gray-400 hover:text-red-500 transition-colors duration-200" data-index="${index}">
//                             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     `;
//                     orderList.appendChild(itemEl);
//                     subtotal += product.price;
//                 });
                
//                 updateTotals(subtotal);
//             };

//             // CRUD - Update Operation
//             const updateTotals = (subtotal) => {
//                 const discount = subtotal * 0.10;
//                 const total = subtotal - discount;

//                 subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
//                 discountEl.textContent = `-$${discount.toFixed(2)}`;
//                 totalEl.textContent = `$${total.toFixed(2)}`;
//             };

//             // CRUD - Delete Operation
//             const removeItemFromCart = (index) => {
//                 cart.splice(index, 1);
//                 updateCartUI();
//             };

//             // Event listener for adding products
//             productList.addEventListener('click', (e) => {
//                 if (e.target.classList.contains('order-btn')) {
//                     const card = e.target.closest('.product-card');
//                     const name = card.dataset.name;
//                     const price = parseFloat(card.dataset.price);
//                     const image = card.dataset.image;

//                     const product = { name, price, image };
//                     addProductToCart(product);
//                 }
//             });

//             // Event listener for removing products
//             orderList.addEventListener('click', (e) => {
//                 const removeBtn = e.target.closest('.remove-item-btn');
//                 if (removeBtn) {
//                     const index = parseInt(removeBtn.dataset.index, 10);
//                     removeItemFromCart(index);
//                 }
//             });
//         });

// Message box utility
        // function showMessage(message) {
        //     const msgBox = document.getElementById('message-box');
        //     msgBox.textContent = message;
        //     msgBox.classList.add('show');
        //     setTimeout(() => {
        //         msgBox.classList.remove('show');
        //     }, 3000);
        // }

        // // Cart functionality
        // const cartSidebar = document.getElementById('cart-sidebar');
        // const cartIconBtn = document.getElementById('cart-icon');
        // const cartCloseBtn = document.getElementById('cart-close-btn');
        // const orderList = document.getElementById('order-list');
        // const subtotalEl = document.getElementById('subtotal-price');
        // const discountEl = document.getElementById('discount-price');
        // const totalEl = document.getElementById('total-price');
        
        // // Cart state
        // let cart = [];

        // // CRUD - Create Operation
        // const addProductToCart = (product) => {
        //     cart.push(product);
        //     updateCartUI();
        //     showMessage(`Added ${product.title} to cart!`);
        // };

        // // CRUD - Read Operation (and UI Update)
        // const updateCartUI = () => {
        //     orderList.innerHTML = '';
        //     let subtotal = 0;
            
        //     if (cart.length === 0) {
        //         orderList.innerHTML = '<p class="text-center text-gray-400 mt-8">Your cart is empty.</p>';
        //     }

        //     cart.forEach((product, index) => {
        //         const itemEl = document.createElement('div');
        //         itemEl.className = 'flex items-center justify-between p-4 rounded-lg';
        //         itemEl.innerHTML = `
        //             <div class="flex items-center">
        //                 <img src="${product.image}" alt="${product.title}" class="w-16 h-16 rounded-md object-cover mr-4" onerror="this.src='https://placehold.co/100x100/333333/ffffff?text=No+Image';">
        //                 <div>
        //                     <h4 class="font-semibold">${product.title}</h4>
        //                     <p class="text-yellow-400">${product.price}</p>
        //                 </div>
        //             </div>
        //             <button class="remove-item-btn text-gray-400 hover:text-red-500 transition-colors duration-200" data-index="${index}">
        //                 <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        //                 </svg>
        //             </button>
        //         `;
        //         orderList.appendChild(itemEl);
        //         subtotal += parseFloat(product.price.replace('$', ''));
        //     });
            
        //     updateTotals(subtotal);
        // };

        // // CRUD - Update Operation
        // const updateTotals = (subtotal) => {
        //     const discount = subtotal * 0.10;
        //     const total = subtotal - discount;

        //     subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        //     discountEl.textContent = `-$${discount.toFixed(2)}`;
        //     totalEl.textContent = `$${total.toFixed(2)}`;
        // };

        // // CRUD - Delete Operation
        // const removeItemFromCart = (index) => {
        //     const removedProduct = cart.splice(index, 1);
        //     updateCartUI();
        //     showMessage(`Removed ${removedProduct[0].title} from cart.`);
        // };

        // // Product data
        // const productData = [
        //     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg", category: "Espresso", price: "$4.99" },
        //     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
        //     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg", category: "Cold Brew", price: "$3.99" },
        //     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
        //     { title: "Matcha Latte", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", category: "Matcha Latte", price: "$4.99" },
        //     { title: "Matcha Cream", image: "https://tenzotea.co/cdn/shop/articles/Matcha_Latte_with_Matcha_Whipped_Cream.webp?v=1712336018", category: "Matcha Cream", price: "$5.49" },
        //     { title: "Matcha Green Tea", image: "https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg", category: "Matcha Green Tea", price: "$3.99" },
        //     { title: "Vanilla Matcha Latte", image: "https://joyfulbalanceonline.com/wp-content/uploads/2024/03/Pin-Challenge-Week-1-copy.jpg", category: "Vanilla Matcha", price: "$4.25" },
        // ];
        
        // function renderProducts(products, containerId) {
        //     const container = document.getElementById(containerId);
        //     if (!container) return;

        //     products.forEach(product => {
        //         const card = document.createElement("div");
        //         card.className = "coffee-card cursor-pointer";
        //         // Add data attributes for the cart logic
        //         card.setAttribute('data-title', product.title);
        //         card.setAttribute('data-price', product.price);
        //         card.setAttribute('data-image', product.image);
        //         card.setAttribute('data-category', product.category);

        //         card.innerHTML = `
        //             <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400/8d6e63/ffffff?text=Coffee+Image';">
        //             <div class="coffee-overlay">
        //                 <h4>${product.title}</h4>
        //                 <p>${product.category} - ${product.price}</p>
        //                 <a href="/Sell_Coffee.html" class="order-btn bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition-colors duration-200">Order Now</a>
        //             </div>
        //         `;
        //         container.appendChild(card);
        //     });
        // }

        // document.addEventListener("DOMContentLoaded", () => {
        //     // Render products into their respective containers
        //     renderProducts(productData.slice(0, 4), "coffee-latest-container");
        //     renderProducts(productData.slice(1, 5), "coffee-popular-container");
        //     renderProducts(productData.slice(2, 6), "coffee-best-container");
        //     renderProducts(productData.slice(3, 7), "new-arrivals-container");
        //     renderProducts(productData, "all-coffee-container");

        //     // Event listener for adding products to cart
        //     document.querySelectorAll('.product-container').forEach(container => {
        //         container.addEventListener('click', (e) => {
        //             if (e.target.classList.contains('order-btn')) {
        //                 const card = e.target.closest('.coffee-card');
        //                 const title = card.getAttribute('data-title');
        //                 const price = card.getAttribute('data-price');
        //                 const image = card.getAttribute('data-image');
        //                 addProductToCart({ title, price, image });
        //                 cartSidebar.classList.add('show');
        //             }
        //         });
        //     });

        //     // Event listener for removing products from cart
        //     orderList.addEventListener('click', (e) => {
        //         const removeBtn = e.target.closest('.remove-item-btn');
        //         if (removeBtn) {
        //             const index = parseInt(removeBtn.dataset.index, 10);
        //             removeItemFromCart(index);
        //         }
        //     });

        //     // Event listeners for cart sidebar
        //     cartIconBtn.addEventListener('click', () => {
        //         cartSidebar.classList.add('show');
        //         updateCartUI();
        //     });

        //     cartCloseBtn.addEventListener('click', () => {
        //         cartSidebar.classList.remove('show');
        //     });
            
        //     // Initial render of the cart
        //     updateCartUI();

        //     // Login and dropdown listeners
        //     const loginLink = document.getElementById("Login");
        //     loginLink.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         showMessage("Login functionality is not implemented yet.");
        //     });

        //     document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
        //         dropBtn.addEventListener("click", function (e) {
        //             e.preventDefault();
        //             const menu = this.nextElementSibling;
        //             if (menu.style.display === "flex") {
        //                 menu.style.display = "none";
        //             } else {
        //                 // Hide other open dropdowns
        //                 document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        //                 menu.style.display = "flex";
        //             }
        //         });
        //     });
        // });

        // Third
        // Message box utility
        // function showMessage(message) {
        //     const msgBox = document.getElementById('message-box');
        //     msgBox.textContent = message;
        //     msgBox.classList.add('show');
        //     setTimeout(() => {
        //         msgBox.classList.remove('show');
        //     }, 3000);
        // }

        // // Product data
        // const productData = [
        //     { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg", category: "Espresso", price: "$4.99" },
        //     { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
        //     { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg", category: "Cold Brew", price: "$3.99" },
        //     { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
        //     { title: "Matcha Latte", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", category: "Matcha Latte", price: "$4.99" },
        //     { title: "Matcha Cream", image: "https://tenzotea.co/cdn/shop/articles/Matcha_Latte_with_Matcha_Whipped_Cream.webp?v=1712336018", category: "Matcha Cream", price: "$5.49" },
        //     { title: "Matcha Green Tea", image: "https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg", category: "Matcha Green Tea", price: "$3.99" },
        //     { title: "Vanilla Matcha Latte", image: "https://joyfulbalanceonline.com/wp-content/uploads/2024/03/Pin-Challenge-Week-1-copy.jpg", category: "Vanilla Matcha", price: "$4.25" },
        // ];
        
        // function renderProducts(products, containerId) {
        //     const container = document.getElementById(containerId);
        //     if (!container) return;

        //     products.forEach(product => {
        //         const card = document.createElement("div");
        //         card.className = "coffee-card cursor-pointer";
        //         // Add data attributes for the cart logic
        //         card.setAttribute('data-title', product.title);
        //         card.setAttribute('data-price', product.price);
        //         card.setAttribute('data-image', product.image);
        //         card.setAttribute('data-category', product.category);

        //         card.innerHTML = `
        //             <img src="${product.image}" alt="${product.title}" onerror="this.src='https://placehold.co/400x400/8d6e63/ffffff?text=Coffee+Image';">
        //             <div class="coffee-overlay">
        //                 <h4>${product.title}</h4>
        //                 <p>${product.category} - ${product.price}</p>
        //                 <a href="Sell_Coffee.html"><button class="order-btn">Order Now</button></a>
        //             </div>
        //         `;
        //         container.appendChild(card);
        //     });
        // }

        // document.addEventListener("DOMContentLoaded", () => {
        //     // Render products into their respective containers
        //     renderProducts(productData.slice(0, 4), "coffee-latest-container");
        //     renderProducts(productData.slice(1, 5), "coffee-popular-container");
        //     renderProducts(productData.slice(2, 6), "coffee-best-container");
        //     renderProducts(productData.slice(3, 7), "new-arrivals-container");
        //     renderProducts(productData, "all-coffee-container");

        //     // Event listener for adding products to cart
        //     document.querySelectorAll('.product-container').forEach(container => {
        //         container.addEventListener('click', (e) => {
        //             if (e.target.classList.contains('order-btn')) {
        //                 const card = e.target.closest('.coffee-card');
        //                 const title = card.getAttribute('data-title');
        //                 const price = card.getAttribute('data-price');
        //                 const image = card.getAttribute('data-image');
        //                 const newProduct = { title, price, image };

        //                 let cart = JSON.parse(localStorage.getItem('cart')) || [];
        //                 cart.push(newProduct);
        //                 localStorage.setItem('cart', JSON.stringify(cart));
                        
        //                 showMessage(`Added ${title} to cart!`);
                        
        //                 // Redirect to cart page after adding
        //                 setTimeout(() => {
        //                     window.location.href = 'Sell_Coffee.html';
        //                 }, 500);
        //             }
        //         });
        //     });

        //     // Login and dropdown listeners
        //     const loginLink = document.getElementById("Login");
        //     loginLink.addEventListener("click", (e) => {
        //         e.preventDefault();
        //         showMessage("Login functionality is not implemented yet.");
        //     });

        //     document.querySelectorAll(".dropdown > a").forEach(dropBtn => {
        //         dropBtn.addEventListener("click", function (e) {
        //             e.preventDefault();
        //             const menu = this.nextElementSibling;
        //             if (menu.style.display === "flex") {
        //                 menu.style.display = "none";
        //             } else {
        //                 // Hide other open dropdowns
        //                 document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        //                 menu.style.display = "flex";
        //             }
        //         });
        //     });
        // });

        // Fourth
         // Message box utility

        // Product data
        const productData = [
            { title: "Dark Roast Arrival", image: "https://imgix.bustle.com/uploads/image/2022/12/29/2bcdcaf1-d4a8-4cac-b8bd-c590327fa9bf-pistachio-cream-cold-brew.jpg", category: "Espresso", price: "$4.99" },
            { title: "Honey Latte", image: "https://storage.googleapis.com/impact-news-photo/news-photo/8989.Untitled%20design%20(1).jpg", category: "Latte", price: "$5.49" },
            { title: "Mint Cold Brew", image: "https://www.teacurry.com/cdn/shop/files/CAFESTYLE-min_18c49dcc-d718-46dc-8c54-83e94d583258.jpg", category: "Cold Brew", price: "$3.99" },
            { title: "Vanilla Cold Brew", image: "https://copykat.com/wp-content/uploads/2021/08/Starbucks-Vanilla-Sweet-Cream-Cold-Brew-Pin-1.jpg", category: "Cold Brew", price: "$4.25" },
            { title: "Matcha Latte", image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg", category: "Matcha Latte", price: "$4.99" },
            { title: "Matcha Cream", image: "https://tenzotea.co/cdn/shop/articles/Matcha_Latte_with_Matcha_Whipped_Cream.webp?v=1712336018", category: "Matcha Cream", price: "$5.49" },
            { title: "Matcha Green Tea", image: "https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2.jpg", category: "Matcha Green Tea", price: "$3.99" },
            { title: "Vanilla Matcha Latte", image: "https://joyfulbalanceonline.com/wp-content/uploads/2024/03/Pin-Challenge-Week-1-copy.jpg", category: "Vanilla Matcha", price: "$4.25" },
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

