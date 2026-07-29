// بيانات الأصناف وتعدد الأحجام
const menuData = [
    {
        id: 1,
        category: "الدجاج",
        name: "دجاج شواية",
        description: "دجاج متبل على الطريقة الخاصة ومشوي على الفحم الحقيقي بعناية فائقة",
        image: "item1.jpg",
        sizes: [
            { name: "ربع", price: 115 },
            { name: "نص", price: 230 },
            { name: "فرخة", price: 460 }
        ]
    },
    {
        id: 2,
        category: "الدجاج",
        name: "دجاج شيش طاووق",
        description: "أقطع دجاج طرية متبلة بالبهارات الخاصة ومشوية على الأسياخ",
        image: "item2.jpg",
        sizes: [
            { name: "ربع", price: 120 },
            { name: "نص", price: 240 },
            { name: "فرخة", price: 480 }
        ]
    },
    {
        id: 3,
        category: "الدجاج",
        name: "دجاج تكا فحم",
        description: "دجاج شهي ومتبل بخلطة التكا الهندية الأصيلة ومشوي على الفحم",
        image: "item3.jpg",
        sizes: [
            { name: "ربع", price: 125 },
            { name: "نص", price: 250 },
            { name: "فرخة", price: 500 }
        ]
    },
    {
        id: 4,
        category: "اللحوم",
        name: "طبق مشويات مشكل",
        description: "تشكيلة فاخرة من الكباب، الكفته، والشيش طاووق الطازج",
        image: "item4.jpg",
        sizes: [
            { name: "سيخين", price: 180 },
            { name: "نص كيلو", price: 350 },
            { name: "كيلو", price: 680 }
        ]
    },
    {
        id: 5,
        category: "اللحوم",
        name: "كفته ضاني",
        description: "كفته لحم ضاني بلدي صافي مع البهارات الشرقية المميزة",
        image: "item5.jpg",
        sizes: [
            { name: "ربع كيلو", price: 160 },
            { name: "نص كيلو", price: 310 },
            { name: "كيلو", price: 600 }
        ]
    },
    {
        id: 6,
        category: "الوجبات الرئيسية",
        name: "وجبة السلام الملكية",
        description: "نصف دجاجة مشوية مع أرز بسمتي فاخر، سلطة، وخبز وخلطة الصوصات",
        image: "item6.jpg",
        sizes: [
            { name: "فردي", price: 220 },
            { name: "عائلي", price: 420 }
        ]
    }
];

const categories = ["الكل", ...new Set(menuData.map(item => item.category))];
let currentCategory = "الكل";
let activeItem = null;
let activeSizeIndex = 0;

const categoriesBar = document.getElementById("categories-bar");
const itemsGrid = document.getElementById("items-grid");
const itemModal = document.getElementById("item-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalSizesContainer = document.getElementById("modal-sizes-container");
const modalPrice = document.getElementById("modal-price");
const orderNowBtn = document.getElementById("order-now-btn");

function renderCategories() {
    categoriesBar.innerHTML = "";
    categories.forEach(cat => {
        const pill = document.createElement("button");
        pill.className = `cat-pill ${cat === currentCategory ? "active" : ""}`;
        pill.textContent = cat;
        pill.onclick = () => {
            currentCategory = cat;
            renderCategories();
            renderItems();
        };
        categoriesBar.appendChild(pill);
    });
}

function renderItems() {
    itemsGrid.innerHTML = "";
    
    const filteredItems = currentCategory === "الكل" 
        ? menuData 
        : menuData.filter(item => item.category === currentCategory);

    if (filteredItems.length === 0) {
        itemsGrid.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 30px;">لا توجد أصناف في هذا القسم حالياً</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement("div");
        card.className = "item-card";
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div class="item-img-box">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='logo.png'">
            </div>
            <div class="item-info">
                <h3 class="item-name">${item.name}</h3>
                <span class="item-action-hint">اختار الحجم</span>
            </div>
        `;
        itemsGrid.appendChild(card);
    });
}

function openModal(item) {
    activeItem = item;
    activeSizeIndex = 0;

    modalImg.src = item.image;
    modalTitle.textContent = item.name;
    modalDesc.textContent = item.description;

    renderSizes();
    updateModalPrice();

    itemModal.classList.add("active");
}

function renderSizes() {
    modalSizesContainer.innerHTML = "";
    activeItem.sizes.forEach((sizeObj, index) => {
        const sizePill = document.createElement("button");
        sizePill.className = `size-pill ${index === activeSizeIndex ? "active" : ""}`;
        sizePill.textContent = sizeObj.name;
        sizePill.onclick = () => {
            activeSizeIndex = index;
            renderSizes();
            updateModalPrice();
        };
        modalSizesContainer.appendChild(sizePill);
    });
}

function updateModalPrice() {
    if (activeItem && activeItem.sizes[activeSizeIndex]) {
        modalPrice.textContent = activeItem.sizes[activeSizeIndex].price;
    }
}

function closeModal() {
    itemModal.classList.remove("active");
}

closeModalBtn.onclick = closeModal;
itemModal.onclick = (e) => {
    if (e.target === itemModal) closeModal();
};

orderNowBtn.onclick = () => {
    if (!activeItem) return;
    const selectedSize = activeItem.sizes[activeSizeIndex];
    const message = `مرحباً، أريد طلب: ${activeItem.name} - الحجم: ${selectedSize.name} - السعر: ${selectedSize.price} جنيه`;
    const whatsappUrl = `https://wa.me/20100638288?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

renderCategories();
renderItems();
