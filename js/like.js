document.addEventListener("DOMContentLoaded", () => {
  const likeList = document.getElementById("like-list");

  // Витягуємо всі ID товарів, які додані в обране
  const likeKeys = Object.keys(localStorage).filter(key => key.startsWith("liked-"));
  const likeIds = likeKeys.map(key => parseInt(key.split("-")[1]));

  // Фільтруємо товари з data.js
  const selectedProducts = products.filter(p => likeIds.includes(p.id));

  // Рендер
  if (selectedProducts.length === 0) {
    likeList.innerHTML = "<p>Товар не додано.</p>";
    return;
  }

  selectedProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "like-item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="like-image">
      <div class="like-info">
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <button data-id="${product.id}" class="remove-btn back-button">Видалити</button>
      </div>
    `;
    likeList.appendChild(div);
  });

  // Видалення
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      localStorage.removeItem(`liked-${id}`);
      location.reload(); // оновлюємо сторінку
    });
  });
});
