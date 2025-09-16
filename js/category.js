const params = new URLSearchParams(window.location.search);
const category = params.get("cat") || params.get("category");



const container = document.getElementById("product-list");
document.getElementById("category-title").textContent = `Товари: ${category}`;

//Функція для оновлення лічильників у шапці
function updateHeaderCounts() {
  const likes = Object.keys(localStorage).filter(key => key.startsWith('liked-')).length;
  const cart = Object.keys(localStorage).filter(key => key.startsWith('cart-')).length;

  const likeCountEl = document.querySelector('.like-count');
  const cartCountEl = document.querySelector('.cart-count');

  if (likeCountEl) likeCountEl.textContent = likes;
  if (cartCountEl) cartCountEl.textContent = cart;
}

function renderProducts(list) {
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = "<p>Товарів не знайдено</p>";
    return;
  }

  list.forEach(product => {
    if (product.category === category) {
      const card = document.createElement("div");
      card.className = "product-card";

      // 🔧 Перевірка стану з localStorage
      const cartKey = `cart-${product.id}`;
      const likeKey = `liked-${product.id}`;
      const isInCart = localStorage.getItem(cartKey);
      const isLiked = localStorage.getItem(likeKey);

      // 🔧 HTML з динамічними кнопками
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <div class="actions">
          <button class="like-btn" data-id="${product.id}">${isLiked ? '💖' : '🖤'}</button>
          <button class="cart-btn" data-id="${product.id}">${isInCart ? '✅' : '🛒'}</button>
        </div>
        <a href="product.html?id=${product.id}&cat=${category}" class="next">Детальніше</a>

      `;

      // 🔧 Обробка кліку на ❤️
      const likeBtn = card.querySelector('.like-btn');
      likeBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const key = `liked-${id}`;
        if (localStorage.getItem(key)) {
          localStorage.removeItem(key);
          e.target.textContent = '🖤';
        } else {
          localStorage.setItem(key, 'true');
          e.target.textContent = '💖';
        }
        updateHeaderCounts();
      });

      // 🔧 Обробка кліку на 🛒
      const cartBtn = card.querySelector('.cart-btn');
      cartBtn.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const key = `cart-${id}`;
        if (localStorage.getItem(key)) {
          localStorage.removeItem(key);
          e.target.textContent = '🛒';
        } else {
          localStorage.setItem(key, 'true');
          e.target.textContent = '✅';
        }
        updateHeaderCounts();
      });

      container.appendChild(card);
    }
  });
}

renderProducts(products);
updateHeaderCounts(); //виклик після рендеру
