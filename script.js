const jsonUrl = "https://raw.githubusercontent.com/AbdulghaniAyman/alsalam-restaurant/refs/heads/main/data.json";

document.addEventListener("DOMContentLoaded", () => {
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById("menu-container");
            menuContainer.innerHTML = "";

            // تجميع الأطباق حسب الأقسام
            const categories = {};
            data.forEach(item => {
                if (!categories[item.category]) {
                    categories[item.category] = [];
                }
                categories[item.category].push(item);
            });

            // بناء العرض لكل قسم
            for (const [categoryName, items] of Object.entries(categories)) {
                const categorySection = document.createElement("section");
                categorySection.className = "menu-category";

                const categoryTitle = document.createElement("h2");
                categoryTitle.className = "category-title";
                categoryTitle.textContent = categoryName;
                categorySection.appendChild(categoryTitle);

                const itemsGrid = document.createElement("div");
                itemsGrid.className = "items-grid";

                items.forEach(dish => {
                    const card = document.createElement("div");
                    card.className = "dish-card";

                    card.innerHTML = `
                        <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                        <div class="dish-info">
                            <h3>${dish.name}</h3>
                            <p class="description">${dish.description || ''}</p>
                            <p class="sizes"><strong>الأحجام:</strong> ${dish.sizes}</p>
                            <div class="price-tag">${dish.price} ج.م</div>
                        </div>
                    `;
                    itemsGrid.appendChild(card);
                });

                categorySection.appendChild(itemsGrid);
                menuContainer.appendChild(categorySection);
            }
        })
        .catch(error => console.error("خطأ في تحميل بيانات المنيو:", error));
});
