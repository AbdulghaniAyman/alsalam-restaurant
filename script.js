document.addEventListener('DOMContentLoaded', () => {
    let menuData = [];

    const categoriesView = document.getElementById('categories-view');
    const itemsView = document.getElementById('items-view');
    const categoriesGrid = document.getElementById('categories-grid');
    const itemsGrid = document.getElementById('items-grid');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const backBtn = document.getElementById('back-btn');

    // جلب بيانات ملف data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            menuData = data;
            initCategories();
        })
        .catch(error => console.error('Error loading menu data:', error));

    // تجميع الأقسام وعرضها في الصفحة الرئيسية
    function initCategories() {
        categoriesGrid.innerHTML = '';
        
        // استخراج الأقسام الفريدة مع أخذ أول صورة لكل قسم كصورة تعبيرية
        const categoriesMap = {};
        menuData.forEach(item => {
            if (!categoriesMap[item.category]) {
                categoriesMap[item.category] = item.image;
            }
        });

        Object.keys(categoriesMap).forEach(categoryName => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-img-container">
                    <img src="${categoriesMap[categoryName]}" alt="${categoryName}" loading="lazy">
                </div>
                <div class="category-info">
                    <h3>${categoryName}</h3>
                </div>
            `;

            card.addEventListener('click', () => {
                openCategoryItems(categoryName);
            });

            categoriesGrid.appendChild(card);
        });
    }

    // فتح شاشة الأصناف الخاصة بالقسم المحدد مع تأثير iOS الانسيابي
    function openCategoryItems(categoryName) {
        currentCategoryTitle.textContent = categoryName;
        itemsGrid.innerHTML = '';

        const filteredItems = menuData.filter(item => item.category === categoryName);

        filteredItems.forEach((item, index) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            // تأخير زمني تدريجي لكل كارد لعمل أنيميشن متناسق (Staggered animation)
            itemCard.style.animationDelay = `${index * 0.05}s`;

            itemCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="item-img" loading="lazy">
                <div class="item-details">
                    <div>
                        <h4 class="item-title">${item.name}</h4>
                        <p class="item-desc">${item.description || ''}</p>
                    </div>
                    <div class="item-footer">
                        <span class="item-price">${item.price} ج.م</span>
                        ${item.sizes ? `<span class="item-sizes">${item.sizes}</span>` : ''}
                    </div>
                </div>
            `;
            itemsGrid.appendChild(itemCard);
        });

        // التبديل بين الشاشات بانسيابية
        categoriesView.classList.remove('active-view');
        itemsView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // زر العودة إلى القائمة الرئيسية
    backBtn.addEventListener('click', () => {
        itemsView.classList.remove('active-view');
        categoriesView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
