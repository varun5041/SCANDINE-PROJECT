// Basic SPA router & data for ScanDine demo

const $ = (sel) => {
  if (!sel) return null;
  try {
    return document.querySelector(sel);
  } catch (e) {
    console.error("Selector error:", sel, e);
    return null;
  }
};
const $$ = (sel) => {
  if (!sel) return [];
  try {
    return Array.from(document.querySelectorAll(sel));
  } catch (e) {
    console.error("Selector error:", sel, e);
    return [];
  }
};

// Mock restaurant + menu data
const RESTAURANTS = [
  {
    id: "urban-grill",
    name: "Urban Grill & Bar",
    tagline: "Wood-fired grills & craft cocktails",
    cuisine: "North Indian, Continental",
    rating: 4.7,
    ratingCount: 320,
    distance: "1.2 km",
    vegOnly: false,
    type: "restaurant",
    location: "Bandra West, Mumbai",
    image:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    banner:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Trending", "Outdoor seating"],
    menu: {
      Starters: [
        {
          name: "Peri Peri Fries",
          price: 220,
          description: "Crispy fries tossed in house peri peri spice mix.",
          image:
            "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Bestseller"],
        },
        {
          name: "Smoked Chicken Skewers",
          price: 360,
          description: "Chargrilled skewers with chimichurri drizzle.",
          image:
            "https://images.pexels.com/photos/4109133/pexels-photo-4109133.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Today’s Special", "Chef’s Choice"],
        },
      ],
      "Main Course": [
        {
          name: "Truffle Alfredo Pasta",
          price: 640,
          description: "Creamy alfredo with wild mushrooms and truffle oil.",
          image:
            "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Chef’s Choice"],
        },
        {
          name: "Wood-fired Margherita Pizza",
          price: 520,
          description: "San Marzano tomatoes, fresh basil, buffalo mozzarella.",
          image:
            "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Bestseller"],
        },
      ],
      Desserts: [
        {
          name: "Nutella Lava Cake",
          price: 290,
          description: "Warm chocolate cake with gooey Nutella centre.",
          image:
            "https://images.pexels.com/photos/4109993/pexels-photo-4109993.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Today’s Special"],
        },
      ],
      Beverages: [
        {
          name: "Smoked Old Fashioned",
          price: 480,
          description: "House blend bitters & orange, smoked tableside.",
          image:
            "https://images.pexels.com/photos/5531529/pexels-photo-5531529.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: [],
        },
      ],
    },
  },
  {
    id: "brew-lab",
    name: "Brew Lab Café",
    tagline: "Single-origin coffee & all-day brunch",
    cuisine: "Cafe, Continental",
    rating: 4.6,
    ratingCount: 210,
    distance: "850 m",
    vegOnly: true,
    type: "cafe",
    location: "Khar, Mumbai",
    image:
      "https://images.pexels.com/photos/373095/pexels-photo-373095.jpeg?auto=compress&cs=tinysrgb&w=800",
    banner:
      "https://images.pexels.com/photos/373095/pexels-photo-373095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Work friendly", "All-day breakfast"],
    menu: {
      Starters: [
        {
          name: "Avocado Toast",
          price: 320,
          description: "Sourdough, smashed avo, cherry tomatoes, feta.",
          image:
            "https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Our Speciality"],
        },
      ],
      "Main Course": [
        {
          name: "Sourdough Grilled Cheese",
          price: 380,
          description: "Three-cheese blend, caramelised onions.",
          image:
            "https://images.pexels.com/photos/4109131/pexels-photo-4109131.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Bestseller"],
        },
      ],
      Desserts: [
        {
          name: "Basque Cheesecake Slice",
          price: 260,
          description: "Burnt top, creamy centre, seasonal berry compote.",
          image:
            "https://images.pexels.com/photos/4109994/pexels-photo-4109994.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["New Item"],
        },
      ],
      Beverages: [
        {
          name: "Iced Vanilla Latte",
          price: 210,
          description: "Double shot espresso, vanilla, cold milk.",
          image:
            "https://images.pexels.com/photos/302901/pexels-photo-302901.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: [],
        },
      ],
    },
  },
  {
    id: "spice-route",
    name: "Spice Route Kitchen",
    tagline: "Pan-Asian flavours, curated",
    cuisine: "Chinese, Thai, Asian",
    rating: 4.4,
    ratingCount: 180,
    distance: "2.0 km",
    vegOnly: false,
    type: "restaurant",
    location: "Lower Parel, Mumbai",
    image:
      "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=800",
    banner:
      "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1200",
    tags: ["Family friendly"],
    menu: {
      Starters: [
        {
          name: "Crispy Lotus Stem",
          price: 340,
          description: "Honey chilli glaze with sesame seeds.",
          image:
            "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Bestseller"],
        },
      ],
      "Main Course": [
        {
          name: "Thai Green Curry Bowl",
          price: 520,
          description: "Served with jasmine rice, veg or chicken.",
          image:
            "https://images.pexels.com/photos/1438675/pexels-photo-1438675.jpeg?auto=compress&cs=tinysrgb&w=800",
          tags: ["Chef’s Choice"],
        },
      ],
      Desserts: [],
      Beverages: [],
    },
  },
];

// Admin-side state
let createdRestaurant = null;
let menuCategories = [];
let selectedCategoryId = null;
let qrTableCount = 0;

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => toast.classList.add("hidden"), 2400);
}

// Routing
function goToView(viewId) {
  if (!viewId) {
    console.error("goToView called without viewId");
    return;
  }
  
  // Hide all views
  $$(".view").forEach((v) => v.classList.remove("view--active"));
  
  // Show target view
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add("view--active");
    console.log(`Navigated to view: ${viewId}`);
  } else {
    console.error(`View not found: view-${viewId}`);
  }

  // Update navbar active state for main routes
  $$(".nav-link").forEach((btn) => {
    const route = btn.dataset.route;
    btn.classList.toggle(
      "nav-link--active",
      (route === "home" && viewId === "home") ||
        (route === "restaurants" && viewId === "restaurants")
    );
  });
}

// Home sections
function renderHomeSections() {
  const nearby = $("#nearby-restaurants");
  const cafes = $("#popular-cafes");
  const specials = $("#todays-specials");

  if (!nearby || !cafes || !specials) return;

  // Nearby = all restaurants
  nearby.innerHTML = "";
  RESTAURANTS.forEach((r) => {
    const card = document.createElement("article");
    card.className = "restaurant-card";
    card.dataset.restaurantId = r.id;
    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}" />
      <div class="restaurant-card-body">
        <div class="restaurant-card-title-row">
          <div>
            <div class="restaurant-name">${r.name}</div>
            <div class="restaurant-tagline">${r.tagline}</div>
          </div>
          <div class="rating-badge">${r.rating.toFixed(1)} ★</div>
        </div>
        <div class="restaurant-meta-row">
          <span>${r.cuisine}</span>
          <span>${r.distance}</span>
        </div>
      </div>
    `;
    nearby.appendChild(card);
  });

  // Popular cafes
  cafes.innerHTML = "";
  RESTAURANTS.filter((r) => r.type === "cafe").forEach((r) => {
    const card = document.createElement("article");
    card.className = "cafe-card restaurant-card";
    card.dataset.restaurantId = r.id;
    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}" />
      <div class="restaurant-card-body">
        <div class="restaurant-card-title-row">
          <div>
            <div class="restaurant-name">${r.name}</div>
            <div class="restaurant-tagline">${r.tagline}</div>
          </div>
          <div class="rating-badge">${r.rating.toFixed(1)} ★</div>
        </div>
        <div class="restaurant-meta-row">
          <span>${r.cuisine}</span>
          <span>${r.distance}</span>
        </div>
      </div>
    `;
    card.dataset.restaurantId = r.id;
    cafes.appendChild(card);
  });

  // Today's specials (sample dishes from each)
  specials.innerHTML = "";
  RESTAURANTS.forEach((r) => {
    const specialsCategory = r.menu["Main Course"] || r.menu.Starters;
    if (!specialsCategory || !specialsCategory.length) return;
    const dish = specialsCategory[0];
    const card = document.createElement("article");
    card.className = "special-card";
    card.innerHTML = `
      <div class="special-card-main">
        <h4>${dish.name}</h4>
        <p>${r.name} • ${dish.price ? "₹" + dish.price : ""}</p>
        <div class="special-tag-row">
          <span class="tag-chip tag-chip--gold">Today’s Special</span>
          <span class="tag-chip">${r.cuisine}</span>
        </div>
      </div>
      <img src="${dish.image}" alt="${dish.name}" />
    `;
    specials.appendChild(card);
  });
}

// Restaurant listing page
function renderRestaurantList(filter = "all") {
  const grid = $("#restaurant-grid");
  if (!grid) return;
  
  const searchInput = $("#restaurant-search");
  const sortSelect = $("#restaurant-sort");
  const searchTerm = (searchInput?.value || "").toLowerCase();
  const sortBy = sortSelect?.value || "relevance";

  let list = RESTAURANTS.slice();

  if (filter === "veg") {
    list = list.filter((r) => r.vegOnly);
  } else if (filter === "nonveg") {
    list = list.filter((r) => !r.vegOnly);
  } else if (filter === "rating4") {
    list = list.filter((r) => r.rating >= 4.0);
  } else if (filter === "cafe") {
    list = list.filter((r) => r.type === "cafe");
  }

  if (searchTerm) {
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(searchTerm) ||
        r.cuisine.toLowerCase().includes(searchTerm)
    );
  }

  if (sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  }

  grid.innerHTML = "";
  if (!list.length) {
    grid.innerHTML =
      '<p style="color:#6b7280;font-size:13px;">No restaurants match your filters.</p>';
    return;
  }

  list.forEach((r) => {
    const card = document.createElement("article");
    card.className = "restaurant-card";
    card.dataset.restaurantId = r.id;
    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}" />
      <div class="restaurant-card-body">
        <div class="restaurant-card-title-row">
          <div>
            <div class="restaurant-name">${r.name}</div>
            <div class="restaurant-tagline">${r.tagline}</div>
          </div>
          <div class="rating-badge">${r.rating.toFixed(1)} ★</div>
        </div>
        <div class="restaurant-meta-row">
          <span>${r.cuisine}</span>
          <span>${r.distance}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

let currentRestaurantFilter = "all";

function setRestaurantFilter(filter) {
  currentRestaurantFilter = filter;
  $$(".filter-pill").forEach((pill) =>
    pill.classList.toggle("filter-pill--active", pill.dataset.filter === filter)
  );
  renderRestaurantList(filter);
}

// Restaurant detail page
let currentRestaurantId = null;

function openRestaurantDetail(id) {
  const restaurant = RESTAURANTS.find((r) => r.id === id);
  if (!restaurant) return;
  currentRestaurantId = id;

  const detailName = $("#detail-name");
  const detailTagline = $("#detail-tagline");
  const detailCuisine = $("#detail-cuisine");
  const detailLocation = $("#detail-location");
  const detailRating = $("#detail-rating");
  const detailRatingCount = $("#detail-rating-count");
  const banner = $("#restaurant-banner");

  if (detailName) detailName.textContent = restaurant.name;
  if (detailTagline) detailTagline.textContent = restaurant.tagline;
  if (detailCuisine) detailCuisine.textContent = restaurant.cuisine;
  if (detailLocation) detailLocation.textContent = restaurant.location;
  if (detailRating) detailRating.textContent = restaurant.rating.toFixed(1);
  if (detailRatingCount) detailRatingCount.textContent = `${restaurant.ratingCount}+ ratings`;
  if (banner) banner.style.backgroundImage = `url("${restaurant.banner}")`;

  renderMenuTabs(restaurant);
  const firstCategory = Object.keys(restaurant.menu)[0];
  if (firstCategory) {
    renderMenuItems(restaurant, firstCategory);
  }

  goToView("restaurant-detail");
}

function renderMenuTabs(restaurant) {
  const tabsContainer = $("#menu-tabs");
  if (!tabsContainer) return;
  tabsContainer.innerHTML = "";
  const categories = Object.keys(restaurant.menu);

  categories.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = "menu-tab" + (index === 0 ? " menu-tab--active" : "");
    btn.textContent = cat;
    btn.addEventListener("click", () => {
      $$(".menu-tab").forEach((t) =>
        t.classList.toggle("menu-tab--active", t === btn)
      );
      renderMenuItems(restaurant, cat);
    });
    tabsContainer.appendChild(btn);
  });
}

function renderMenuItems(restaurant, categoryName) {
  const section = $("#menu-items");
  if (!section) return;
  section.innerHTML = "";
  const dishes = restaurant.menu[categoryName] || [];

  if (!dishes.length) {
    section.innerHTML =
      '<p style="color:#6b7280;font-size:13px;">No dishes in this category yet.</p>';
    return;
  }

  dishes.forEach((dish) => {
    const card = document.createElement("article");
    card.className = "dish-card";
    const tagsHtml = (dish.tags || [])
      .map((t) => {
        if (t === "Today’s Special") return '<span class="dish-tag">Today’s Special</span>';
        if (t === "Bestseller") return '<span class="dish-tag">Bestseller</span>';
        if (t === "Chef’s Choice") return '<span class="dish-tag dish-tag--chef">Chef’s Choice</span>';
        if (t === "Our Speciality") return '<span class="dish-tag dish-tag--special">Our Speciality</span>';
        if (t === "New Item") return '<span class="dish-tag dish-tag--special">New</span>';
        return `<span class="dish-tag">${t}</span>`;
      })
      .join("");

    card.innerHTML = `
      <div class="dish-main">
        <h4>${dish.name}</h4>
        <p>${dish.description}</p>
        <div class="dish-price">₹${dish.price}</div>
        <div class="dish-tags">${tagsHtml}</div>
      </div>
      <div class="dish-media">
        <img src="${dish.image}" alt="${dish.name}" />
      </div>
    `;

    section.appendChild(card);
  });
}

// Add Restaurant form
function handleAddRestaurant(e) {
  e.preventDefault();

  const nameInput = $("#r-name");
  const taglineInput = $("#r-tagline");
  const cuisineInput = $("#r-cuisine");
  const addressInput = $("#r-address");
  const contactInput = $("#r-contact");

  if (!nameInput) {
    showToast("Form elements not found.");
    return;
  }

  const name = nameInput.value.trim();
  const tagline = taglineInput?.value.trim() || "";
  const cuisine = cuisineInput?.value.trim() || "";
  const address = addressInput?.value.trim() || "";
  const contact = contactInput?.value.trim() || "";

  if (!name) {
    showToast("Please add a restaurant name.");
    return;
  }

  createdRestaurant = {
    name,
    tagline,
    cuisine,
    address,
    contact,
  };

  showToast("Restaurant saved. Now create your menu.");
  goToView("menu-dashboard");
}

// Menu dashboard
function addCategory(name) {
  const id = name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
  const category = { id, name, dishes: [] };
  menuCategories.push(category);
  selectedCategoryId = id;
  renderCategoryList();
  renderCategoryEditor();
}

function renderCategoryList() {
  const list = $("#category-list");
  if (!list) return;
  list.innerHTML = "";

  if (!menuCategories.length) {
    const li = document.createElement("li");
    li.style.fontSize = "12px";
    li.style.color = "#6b7280";
    li.textContent = "No categories yet. Click “Add Category” to start.";
    list.appendChild(li);
    return;
  }

  menuCategories.forEach((cat) => {
    const li = document.createElement("li");
    li.className = "category-list-item" +
      (cat.id === selectedCategoryId ? " category-list-item--active" : "");
    li.innerHTML = `
      <span>${cat.name}</span>
      <small>${cat.dishes.length} items</small>
    `;
    li.addEventListener("click", () => {
      selectedCategoryId = cat.id;
      renderCategoryList();
      renderCategoryEditor();
    });
    list.appendChild(li);
  });
}

function renderCategoryEditor() {
  const empty = $("#empty-category-message");
  const editor = $("#category-editor");
  if (!empty || !editor) return;

  const selected = menuCategories.find((c) => c.id === selectedCategoryId);
  if (!selected) {
    empty.classList.remove("hidden");
    editor.classList.add("hidden");
    return;
  }

  empty.classList.add("hidden");
  editor.classList.remove("hidden");

  const editorName = $("#editor-category-name");
  const editorSubtitle = $("#editor-category-subtitle");
  if (editorName) editorName.textContent = selected.name;
  if (editorSubtitle) editorSubtitle.textContent =
    "Add dishes, pricing and highlight your bestsellers in " + selected.name + ".";

  renderDishList();
}

function handleDishSubmit(e) {
  e.preventDefault();
  const selected = menuCategories.find((c) => c.id === selectedCategoryId);
  if (!selected) {
    showToast("Please select a category first.");
    return;
  }

  const name = $("#dish-name").value.trim();
  const price = parseFloat($("#dish-price").value);
  const description = $("#dish-description").value.trim();
  const veg = $("#dish-veg-toggle").checked;
  const imageInput = $("#dish-image");
  let imageUrl = "";
  if (imageInput && imageInput.files && imageInput.files[0]) {
    imageUrl = URL.createObjectURL(imageInput.files[0]);
  }
  const tags = [];
  $$(".tag-checkbox input:checked").forEach((input) =>
    tags.push(input.parentElement.textContent.trim())
  );

  if (!name || isNaN(price)) {
    showToast("Dish name and price are required.");
    return;
  }

  selected.dishes.push({
    name,
    price,
    description,
    veg,
    tags,
    imageUrl,
  });

  $("#dish-name").value = "";
  $("#dish-price").value = "";
  $("#dish-description").value = "";
  if (imageInput) imageInput.value = "";
  $$(".tag-checkbox input").forEach((input) => (input.checked = false));

  renderCategoryList();
  renderDishList();
  showToast("Dish added to " + selected.name);
}

function renderDishList() {
  const container = $("#dish-list");
  if (!container) return;
  const selected = menuCategories.find((c) => c.id === selectedCategoryId);
  container.innerHTML = "";

  if (!selected || !selected.dishes.length) {
    container.innerHTML =
      '<p style="color:#6b7280;font-size:12px;margin:0;">No dishes added yet.</p>';
    return;
  }

  selected.dishes.forEach((dish) => {
    const row = document.createElement("div");
    row.className = "dish-row";
    const tagsText = (dish.tags || []).join(", ");

    row.innerHTML = `
      <div class="dish-row-main">
        <span>${dish.name}</span>
        <span>${tagsText || (dish.veg ? "Veg" : "Non-Veg")}</span>
      </div>
      <div class="dish-row-meta">
        <span>₹${dish.price}</span>
        <span>${dish.veg ? "Veg" : "Non-Veg"}</span>
      </div>
    `;
    container.appendChild(row);
  });
}

// Save menu -> go to QR setup
function saveMenu() {
  if (!menuCategories.length) {
    showToast("Add at least one category to save the menu.");
    return;
  }
  showToast("Menu saved. Next: review the guest view.");
  renderMenuPreview();
  goToView("menu-preview");
}

// Build preview menu from createdRestaurant + menuCategories
function renderMenuPreview() {
  if (!menuCategories.length) {
    showToast("Add at least one category and some dishes to preview.");
    return;
  }

  const name = createdRestaurant?.name || "Your Restaurant";
  const tagline =
    createdRestaurant?.tagline ||
    "Digital, QR-based menu experience powered by ScanDine.";

  const previewName = $("#preview-restaurant-name");
  const previewTagline = $("#preview-restaurant-tagline");
  const container = $("#preview-menu-container");

  if (!container) return;
  if (previewName) previewName.textContent = name + " · Menu preview";
  if (previewTagline) previewTagline.textContent = tagline;

  container.innerHTML = "";

  menuCategories.forEach((cat) => {
    const section = document.createElement("section");
    section.className = "card";
    section.innerHTML = `
      <h3 class="text-lg font-semibold text-slate-900 mb-1">${cat.name}</h3>
      <p class="text-sm text-slate-500 mb-4">
        ${cat.dishes.length || 0} item${
      cat.dishes.length === 1 ? "" : "s"
    } in this category.
      </p>
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-cat="${cat.id}"></div>
    `;
    const grid = section.querySelector("div[data-cat]");

    if (!cat.dishes.length) {
      const empty = document.createElement("p");
      empty.style.fontSize = "12px";
      empty.style.color = "#6b7280";
      empty.textContent = "No dishes added yet. Add items from the menu editor.";
      grid.appendChild(empty);
    } else {
      cat.dishes.forEach((dish) => {
        const card = document.createElement("article");
        card.className = "rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm";
        const imgSrc =
          dish.imageUrl ||
          "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600";
        const tagsHtml = (dish.tags || [])
          .map((t) => {
            if (t === "Today's Special") return '<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-orange-100 text-orange-700">Today\'s Special</span>';
            if (t === "Bestseller") return '<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-700">Bestseller</span>';
            if (t === "Chef's Choice") return '<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-700">Chef\'s Choice</span>';
            if (t === "Our Speciality") return '<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-emerald-100 text-emerald-700">Our Speciality</span>';
            if (t === "New Item") return '<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">New</span>';
            return `<span class="inline-block px-2 py-0.5 text-xs rounded-full bg-slate-100 text-slate-700">${t}</span>`;
          })
          .join("");
        card.innerHTML = `
          <div class="relative">
            <img src="${imgSrc}" alt="${dish.name}" class="w-full h-48 object-cover" />
            ${tagsHtml ? `<div class="absolute top-2 left-2 flex flex-wrap gap-1">${tagsHtml}</div>` : ""}
          </div>
          <div class="p-4">
            <div class="flex items-start justify-between gap-2 mb-1">
              <h4 class="text-base font-semibold text-slate-900">${dish.name}</h4>
              <span class="text-sm font-semibold text-slate-900 whitespace-nowrap">₹${dish.price}</span>
            </div>
            ${dish.description ? `<p class="text-sm text-slate-600 mt-1">${dish.description}</p>` : ""}
            <div class="mt-2 flex items-center gap-2">
              <span class="text-xs ${dish.veg ? 'text-emerald-600' : 'text-red-600'} font-medium">
                ${dish.veg ? "🟢 Veg" : "🔴 Non-Veg"}
              </span>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    container.appendChild(section);
  });
}

// QR setup & grid
function handleTableSetup(e) {
  e.preventDefault();
  const tableCountInput = $("#table-count");
  if (!tableCountInput) {
    showToast("Table count input not found.");
    return;
  }
  const count = parseInt(tableCountInput.value, 10);
  if (!count || count <= 0) {
    showToast("Please enter a valid table count.");
    return;
  }
  qrTableCount = Math.min(Math.max(count, 1), 100);
  renderQRGrid();
  showToast("QR codes generated for all tables.");
  goToView("qr-display");
}

function renderQRGrid() {
  const grid = $("#qr-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 1; i <= qrTableCount; i++) {
    const card = document.createElement("article");
    card.className = "qr-card";
    card.innerHTML = `
      <div class="qr-meta">Table ${i}</div>
      <div class="qr-canvas" data-table="${i}"></div>
      <div class="qr-actions">
        <button class="btn-ghost" data-action="download" data-table="${i}">
          Download
        </button>
        <button class="btn-ghost" data-action="print" data-table="${i}">
          Print
        </button>
      </div>
    `;
    grid.appendChild(card);
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    const table = btn.dataset.table;
    if (action === "download") {
      showToast(`Download started for Table ${table} QR (demo).`);
    } else if (action === "print") {
      showToast(`Print dialog will open for Table ${table} QR (demo).`);
      window.print();
    }
  });
}

function initNav() {
  // Universal event delegation for ALL buttons with data-route
  document.addEventListener("click", (e) => {
    // Find the closest button or element with data-route
    const target = e.target.closest("[data-route]");
    if (!target) return;

    const route = target.dataset.route;
    if (!route) return;

    // Prevent default for buttons and links
    if (target.tagName === "BUTTON" || target.tagName === "A") {
      e.preventDefault();
      e.stopPropagation();
    }

    console.log(`Navigation clicked: ${route}`);

    // Handle navigation routes
    if (route === "home") {
      goToView("home");
    } else if (route === "restaurants") {
      goToView("restaurants");
    } else if (route === "about") {
      goToView("about");
    } else if (route === "pricing") {
      goToView("pricing");
    } else if (route === "add-restaurant") {
      goToView("add-restaurant");
    } else if (route === "login") {
      goToView("login");
    } else if (route === "signup") {
      goToView("signup");
    } else if (route === "menu-dashboard") {
      goToView("menu-dashboard");
    } else if (route === "menu-preview") {
      goToView("menu-preview");
    } else if (route === "qr-setup") {
      goToView("qr-setup");
    } else {
      console.warn(`Unknown route: ${route}`);
    }
  });

  // Home search button
  const homeSearchBtn = $("#home-search-btn");
  if (homeSearchBtn) {
    homeSearchBtn.addEventListener("click", () => {
      const val = $("#home-search")?.value || "";
      const restaurantSearch = $("#restaurant-search");
      if (restaurantSearch) restaurantSearch.value = val;
      goToView("restaurants");
      renderRestaurantList(currentRestaurantFilter);
    });
  }
}

function initRestaurantListingEvents() {
  // Event delegation for filter pills (they might be dynamically added)
  document.addEventListener("click", (e) => {
    const filterPill = e.target.closest(".filter-pill");
    if (filterPill && filterPill.dataset.filter) {
      e.preventDefault();
      setRestaurantFilter(filterPill.dataset.filter);
    }
  });

  // Event delegation for restaurant cards (handles both .restaurant-card and .cafe-card)
  document.addEventListener("click", (e) => {
    const restaurantCard = e.target.closest(".restaurant-card, .cafe-card");
    if (restaurantCard && restaurantCard.dataset.restaurantId) {
      e.preventDefault();
      openRestaurantDetail(restaurantCard.dataset.restaurantId);
    }
  });

  const restaurantSearch = $("#restaurant-search");
  if (restaurantSearch) {
    restaurantSearch.addEventListener("input", () =>
      renderRestaurantList(currentRestaurantFilter)
    );
  }

  const restaurantSort = $("#restaurant-sort");
  if (restaurantSort) {
    restaurantSort.addEventListener("change", () =>
      renderRestaurantList(currentRestaurantFilter)
    );
  }
}

function initAdminEvents() {
  // Use event delegation for buttons that might be in hidden views
  document.addEventListener("click", (e) => {
    // Preview menu button
    if (e.target.closest("#preview-menu-btn")) {
      e.preventDefault();
      renderMenuPreview();
      goToView("menu-preview");
      return;
    }

    // Preview to tables button
    if (e.target.closest("#preview-to-tables-btn")) {
      e.preventDefault();
      goToView("qr-setup");
      return;
    }

    // Save menu button
    if (e.target.closest("#save-menu-btn")) {
      e.preventDefault();
      saveMenu();
      return;
    }

    // Add category button
    if (e.target.closest("#add-category-btn")) {
      e.preventDefault();
      const defaultNames = ["Starters", "Main Course", "Desserts", "Beverages"];
      const existingNames = menuCategories.map((c) => c.name);
      const nextDefault = defaultNames.find((n) => !existingNames.includes(n));
      const name = prompt(
        "Category name",
        nextDefault || "Category " + (menuCategories.length + 1)
      );
      if (!name) return;
      addCategory(name.trim());
      return;
    }

    // Rename category button
    if (e.target.closest("#rename-category")) {
      e.preventDefault();
      const selected = menuCategories.find((c) => c.id === selectedCategoryId);
      if (!selected) return;
      const name = prompt("Rename category", selected.name);
      if (!name) return;
      selected.name = name.trim();
      renderCategoryList();
      renderCategoryEditor();
      return;
    }
  });

  const addRestaurantForm = $("#add-restaurant-form");
  if (addRestaurantForm) {
    addRestaurantForm.addEventListener("submit", handleAddRestaurant);
  }

  const dishVegToggle = $("#dish-veg-toggle");
  if (dishVegToggle) {
    dishVegToggle.addEventListener("change", (e) => {
      const label = $("#dish-veg-label");
      if (label) label.textContent = e.target.checked ? "Veg" : "Non-Veg";
    });
  }

  const dishForm = $("#dish-form");
  if (dishForm) {
    dishForm.addEventListener("submit", handleDishSubmit);
  }

  const tableSetupForm = $("#table-setup-form");
  if (tableSetupForm) {
    tableSetupForm.addEventListener("submit", handleTableSetup);
  }

  // Login form
  const loginForm = $("#login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLogin);
  }

  // Signup form
  const signupForm = $("#signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", handleSignup);
  }
}

// Login handler
function handleLogin(e) {
  e.preventDefault();
  const email = $("#login-email")?.value.trim();
  const password = $("#login-password")?.value;

  if (!email || !password) {
    showToast("Please enter both email and password.");
    return;
  }

  // Demo: Simulate login success
  showToast("Login successful! Redirecting to dashboard...");
  setTimeout(() => {
    goToView("add-restaurant");
  }, 1500);
}

// Signup handler
function handleSignup(e) {
  e.preventDefault();
  const name = $("#signup-name")?.value.trim();
  const email = $("#signup-email")?.value.trim();
  const phone = $("#signup-phone")?.value.trim();
  const restaurantName = $("#signup-restaurant-name")?.value.trim();
  const password = $("#signup-password")?.value;
  const confirmPassword = $("#signup-confirm-password")?.value;
  const agreeTerms = $("#agree-terms")?.checked;

  if (!name || !email || !phone || !restaurantName || !password || !confirmPassword) {
    showToast("Please fill in all required fields.");
    return;
  }

  if (password.length < 8) {
    showToast("Password must be at least 8 characters long.");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Passwords do not match. Please try again.");
    return;
  }

  if (!agreeTerms) {
    showToast("Please agree to the Terms of Service and Privacy Policy.");
    return;
  }

  // Demo: Simulate signup success
  showToast("Account created successfully! Redirecting to restaurant setup...");
  setTimeout(() => {
    // Pre-fill restaurant name in add restaurant form
    const rNameInput = $("#r-name");
    if (rNameInput) rNameInput.value = restaurantName;
    goToView("add-restaurant");
  }, 1500);
}

function initMisc() {
  const yearSpan = $("#year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();
}

function init() {
  try {
    initNav();
    initRestaurantListingEvents();
    initAdminEvents();
    initMisc();
    renderHomeSections();
    renderRestaurantList(currentRestaurantFilter);
    console.log("ScanDine initialized successfully");
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  // DOM is already ready
  init();
}
