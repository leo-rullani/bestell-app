// init app
function initializeApp() {
  renderAccordion(products);
  setupEventHandlers();
}

let cart = [];

function addToCart(product) {
  const existingProduct = cart.find((item) => item.name === product.name);
  existingProduct ? incrementQuantity(existingProduct) : addNewProduct(product);
  updateCart();
}

function incrementQuantity(product) {
  product.quantity += 1;
}

function addNewProduct(product) {
  cart.push({
    name: product.name,
    price: parseFloat(product.price.replace("CHF ", "")),
    quantity: 1,
  });
}

function removeFromCart(productName) {
  cart = cart.filter((item) => item.name !== productName);
  updateCart();
}

function updateProductQuantity(productName, amount) {
  const product = cart.find((item) => item.name === productName);
  if (product) adjustQuantity(product, amount);
  updateCart();
}

function adjustQuantity(product, amount) {
  product.quantity += amount;
  if (product.quantity <= 0) removeFromCart(product.name);
}

function calculateTotal() {
  return cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);
}

function updateCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  const menuBadge = document.getElementById("menu-badge");

  // Calculate total number of items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  menuBadge.textContent = totalItems > 0 ? totalItems : "0";
  menuBadge.classList.toggle("d-none", totalItems <= 0);

  clearCartDisplay();
  cart.length === 0 ? displayEmptyCart() : updateFilledCart();
  updateTotalPrice();
}

function clearCartDisplay() {
  const cartContainer = document.getElementById("cart-items");
  while (cartContainer.firstChild) cartContainer.removeChild(cartContainer.firstChild);
}

function displayEmptyCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  cartContainer.innerHTML = '<p>Dein Warenkorb ist leer!</p>';
  totalPriceElement.textContent = "CHF 0.00";
}

function updateFilledCart() {
  displayCartItems();
}

function displayCartItems() {
  const cartContainer = document.getElementById("cart-items");
  cart.forEach((item) => cartContainer.appendChild(createCartItem(item)));
}

function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item d-flex justify-content-between align-items-center mb-3";
  cartItem.appendChild(createProductInfo(item));
  cartItem.appendChild(createActionButtons(item));
  return cartItem;
}

function createProductInfo(item) {
  const productInfo = document.createElement("div");
  const productName = document.createElement("strong");
  const productDetails = document.createElement("div");
  productName.textContent = item.name;
  productDetails.className = "text-muted";
  productDetails.textContent = `CHF ${item.price.toFixed(2)} x ${item.quantity}`;
  productInfo.appendChild(productName);
  productInfo.appendChild(productDetails);
  return productInfo;
}

function createActionButtons(item) {
  const actionButtons = document.createElement("div");
  actionButtons.className = "d-flex align-items-center";
  actionButtons.appendChild(createButton("-", "btn-outline-danger", () => updateProductQuantityWithDisplay(item, -1)));
  actionButtons.appendChild(createButton("+", "btn-outline-success", () => updateProductQuantityWithDisplay(item, 1)));
  actionButtons.appendChild(createButton("🗑️", "btn-outline-secondary", () => removeFromCart(item.name)));
  return actionButtons;
}

function createButton(text, className, onClick) {
  const button = document.createElement("button");
  button.className = `btn ${className} btn-sm me-2`;
  button.textContent = text;
  button.onclick = onClick;
  return button;
}

function updateProductQuantityWithDisplay(item, amount) {
  updateProductQuantity(item.name, amount);
  const productCard = document.querySelector(`[data-name="${item.name}"]`).closest(".card");
  const quantitySpan = productCard.querySelector("span");
  const product = cart.find((cartItem) => cartItem.name === item.name);
  if (quantitySpan) {
    quantitySpan.textContent = product ? product.quantity : 0;
  }
}

function updateTotalPrice() {
  const totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = `CHF ${calculateTotal()}`;
}

function renderAccordion(categories) {
  const accordion = document.getElementById("categoriesAccordion");
  clearAccordion(accordion);
  categories.forEach((category, index) => accordion.appendChild(createAccordionItem(category, index)));
}

function clearAccordion(accordion) {
  while (accordion.firstChild) accordion.removeChild(accordion.firstChild);
}

function createAccordionItem(category, index) {
  const accordionItem = document.createElement("div");
  accordionItem.className = "accordion-item";
  accordionItem.appendChild(createAccordionHeader(category, index));
  accordionItem.appendChild(createAccordionCollapse(category, index));
  return accordionItem;
}

function createAccordionHeader(category, index) {
  const header = document.createElement("h2");
  header.className = "accordion-header";
  header.id = `heading${index}`;
  const button = document.createElement("button");
  button.className = `accordion-button ${index > 0 ? "collapsed" : ""}`;
  button.type = "button";
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", `#collapse${index}`);
  button.setAttribute("aria-expanded", index === 0);
  button.setAttribute("aria-controls", `collapse${index}`);
  button.textContent = category.category;
  header.appendChild(button);
  return header;
}

function createAccordionCollapse(category, index) {
  const collapse = document.createElement("div");
  collapse.id = `collapse${index}`;
  collapse.className = `accordion-collapse collapse ${index === 0 ? "show" : ""}`;
  collapse.setAttribute("aria-labelledby", `heading${index}`);
  collapse.setAttribute("data-bs-parent", "#categoriesAccordion");
  collapse.appendChild(createAccordionBody(category));
  return collapse;
}

function createAccordionBody(category) {
  const body = document.createElement("div");
  body.className = "accordion-body";
  category.items.forEach((item) => body.appendChild(createProductCard(item)));
  return body;
}

function createProductCard(item) {
  const card = document.createElement("div");
  card.className = "card shadow-sm border-0 mb-4";
  const cardBody = document.createElement("div");
  cardBody.className = "card-body d-flex align-items-center";
  cardBody.appendChild(createProductImage(item));
  cardBody.appendChild(createProductDetails(item));
  card.appendChild(cardBody);
  return card;
}

function createProductImage(item) {
  const image = document.createElement("img");
  image.className = "rounded product-img me-3";
  image.src = item.image;
  image.alt = item.name;
  return image;
}

function createProductDetails(item) {
  const details = document.createElement("div");
  const title = document.createElement("h6");
  title.className = "card-title mb-1";
  title.textContent = item.name;
  const price = document.createElement("p");
  price.className = "card-text text-muted mb-2";
  price.textContent = item.price;
  const quantitySpan = document.createElement("span");
  quantitySpan.textContent = 0;
  quantitySpan.style.marginLeft = "8px";
  details.appendChild(title);
  details.appendChild(price);
  details.appendChild(quantitySpan);
  details.appendChild(createButton("+", "btn-outline-success", () => addToCart(item)));
  return details;
}

function setupEventHandlers() {
  const cartToggle = document.getElementById("cart-toggle");
  const mobileCart = document.getElementById("mobile-cart");
  cartToggle.addEventListener("click", () => {
    mobileCart.classList.toggle("visible");
  });
}

document.querySelector('.quantity').textContent = 0;

document.querySelectorAll('.add-quantity').forEach(button => {
  button.addEventListener('click', function() {
      const quantityElement = this.closest('.card').querySelector('.quantity');
      let currentQuantity = parseInt(quantityElement.textContent, 10);
      quantityElement.textContent = currentQuantity + 1;

      // Falls der Warenkorb aktualisiert werden muss:
      updateCart();
  });
});

document.querySelectorAll('.subtract-quantity').forEach(button => {
  button.addEventListener('click', function() {
      const quantityElement = this.closest('.card').querySelector('.quantity');
      let currentQuantity = parseInt(quantityElement.textContent, 10);
      if (currentQuantity > 0) {
          quantityElement.textContent = currentQuantity - 1;
      }

      // Falls der Warenkorb aktualisiert werden muss:
      updateCart();
  });
});


initializeApp();