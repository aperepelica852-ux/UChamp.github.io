document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");

  // Витягуємо всі ID товарів, які додані в корзину
  const cartKeys = Object.keys(localStorage).filter(key => key.startsWith("cart-"));
  const cartIds = cartKeys.map(key => parseInt(key.split("-")[1]));

  // Фільтруємо товари з data.js
  const selectedProducts = products.filter(p => cartIds.includes(p.id));

  // Рендер
  if (selectedProducts.length === 0) {
    cartList.innerHTML = "<p>Корзина порожня.</p>";
    return;
  }

  selectedProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-image">
      <div class="cart-info">
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <button data-id="${product.id}" class="remove-btn">Видалити</button>
      </div>
    `;
    cartList.appendChild(div);
  });

  // Видалення
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      localStorage.removeItem(`cart-${id}`);
      location.reload(); // оновлюємо сторінку
    });
  });
});
