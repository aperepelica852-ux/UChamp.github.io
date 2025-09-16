// Отримуємо ID товару з URL (наприклад: ?id=2)
function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id')); // перетворюємо на число
}

// 🔧 Функція оновлення лічильників у хедері
function updateHeaderCounts() {
  const likes = Object.keys(localStorage).filter(key => key.startsWith('liked-')).length;
  const cart = Object.keys(localStorage).filter(key => key.startsWith('cart-')).length;

  const likeCountEl = document.querySelector('.like-count');
  const cartCountEl = document.querySelector('.cart-count');

  if (likeCountEl) likeCountEl.textContent = likes;
  if (cartCountEl) cartCountEl.textContent = cart;
}

// 🔧 Виводимо товар на сторінку + кнопки
function renderProduct(product) {
  if (!product) {
    document.body.innerHTML = "<h2 style='text-align:center;'>Товар не знайдено</h2>";
    return;
  }

  document.getElementById('product-title').textContent = product.name;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-image').alt = product.name;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-price').textContent = product.price;

  // 🔧 Додаємо кнопки ❤️ і 🛒
  const likeKey = `liked-${product.id}`;
  const cartKey = `cart-${product.id}`;
  const isLiked = localStorage.getItem(likeKey);
  const isInCart = localStorage.getItem(cartKey);

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.style.textAlign = "center";
  actions.style.marginTop = "20px";

  const likeBtn = document.createElement("button");
  likeBtn.className = "like-btn";
  likeBtn.textContent = isLiked ? "💖" : "🖤";
  likeBtn.style.marginRight = "10px";

  likeBtn.addEventListener("click", () => {
    if (localStorage.getItem(likeKey)) {
      localStorage.removeItem(likeKey);
      likeBtn.textContent = "🖤";
    } else {
      localStorage.setItem(likeKey, "true");
      likeBtn.textContent = "💖";
    }
    updateHeaderCounts();
  });

  const cartBtn = document.createElement("button");
  cartBtn.className = "cart-btn";
  cartBtn.textContent = isInCart ? "✅" : "🛒";

  cartBtn.addEventListener("click", () => {
    if (localStorage.getItem(cartKey)) {
      localStorage.removeItem(cartKey);
      cartBtn.textContent = "🛒";
    } else {
      localStorage.setItem(cartKey, "true");
      cartBtn.textContent = "✅";
    }
    updateHeaderCounts();
  });

  actions.appendChild(likeBtn);
  actions.appendChild(cartBtn);

  const main = document.querySelector(".product-page");
  main.appendChild(actions);
}

// Основна логіка
document.addEventListener('DOMContentLoaded', () => {
  const productId = getProductIdFromURL();
  const product = products.find(p => p.id === productId);
  renderProduct(product);
  updateHeaderCounts(); // ✅ Оновлюємо лічильники при завантаженні
});
