document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");

  // Витягуємо всі ID товарів, які додані в корзину
  const cartKeys = Object.keys(localStorage).filter(key => key.startsWith("cart-"));
  const cartIds = cartKeys.map(key => parseInt(key.split("-")[1]));

  // Фільтруємо товари з data.js
  const selectedProducts = products.filter(p => cartIds.includes(p.id));

  // Якщо корзина порожня
  if (selectedProducts.length === 0) {
    cartList.innerHTML = "<p>Корзина порожня.</p>";
    return;
  }

  let total = 0;

  // Рендер товарів
  selectedProducts.forEach(product => {
    total += Number(product.price); // гарантуємо, що це число

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

  // Показ суми
  const summary = document.createElement("div");
  summary.id = "cart-summary";
  summary.innerHTML = `<h3>Сума до оплати: ${total} грн</h3>`;
  cartList.after(summary);

  // Кнопка "Оплатити"
  const payButton = document.createElement("button");
  payButton.id = "pay-button";
  payButton.className = "next";
  payButton.textContent = "Оплатити";
  summary.after(payButton);

  // Видалення товару
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      localStorage.removeItem(`cart-${id}`);
      location.reload(); // оновлюємо сторінку
    });
  });

  // Обробка кнопки "Оплатити"
  payButton.addEventListener("click", () => {
    alert(`Оплата ${total} грн — тут буде реальна інтеграція з платіжною системою`);
    // 🔐 Тут можна вставити API-інтеграцію з LiqPay, Fondy або Stripe
    // Наприклад: window.location.href = `https://www.liqpay.ua/api/checkout?...`;
  });
  payButton.addEventListener("click", () => {
  window.location.href = `pay.html?amount=${total}`;
});
});
