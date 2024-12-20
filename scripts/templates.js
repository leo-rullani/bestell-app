// templates.js

// Template für ein Akkordeon-Item
    export function createAccordionItem(category, index) {
    const isExpanded = index === 0 ? "true" : "false";
    const isCollapsed = index > 0 ? "collapsed" : "";
    const showClass = index === 0 ? "show" : "";
  
    return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button ${isCollapsed}" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapse${index}" aria-expanded="${isExpanded}" 
                  aria-controls="collapse${index}">
            ${category.category}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse ${showClass}" 
             aria-labelledby="heading${index}" data-bs-parent="#categoriesAccordion">
          <div class="accordion-body">
            ${category.items.map(createProductCard).join("")}
          </div>
        </div>
      </div>`;
  }
  
  // Template für ein Produkt-Card
    export function createProductCard(item) {
    return `
      <div class="card shadow-sm border-0 mb-4">
        <div class="card-body d-flex align-items-center">
          <img class="rounded product-img me-3" src="${item.image}" alt="${item.name}">
          <div>
            <h6 class="card-title mb-1">${item.name}</h6>
            <p class="card-text text-muted mb-2">${item.price}</p>
            <button class="btn btn-outline-success btn-sm" onclick="addToCart({name: '${item.name}', price: '${item.price}'})">+</button>
          </div>
        </div>
      </div>`;
  }
  
  // Template für ein Warenkorb-Element
    export function createCartItem(item) {
    return `
      <div class="cart-item d-flex justify-content-between align-items-center mb-3">
        <div>
          <strong>${item.name}</strong>
          <div class="text-muted">CHF ${item.price.toFixed(2)} x ${item.quantity}</div>
        </div>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-danger btn-sm me-2" onclick="updateProductQuantity('${item.name}', -1)">-</button>
          <button class="btn btn-outline-success btn-sm me-2" onclick="updateProductQuantity('${item.name}', 1)">+</button>
          <button class="btn btn-outline-secondary btn-sm" onclick="removeFromCart('${item.name}')">🗑️</button>
        </div>
      </div>`;
  }  