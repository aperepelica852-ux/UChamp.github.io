document.addEventListener("DOMContentLoaded", () => {
  const resultsContainer = document.getElementById("search-results");

  const params = new URLSearchParams(window.location.search);
  const query = params.get("q")?.toLowerCase() || "";

  const matchedProducts = products.filter(p =>
    p.name.toLowerCase().includes(query)
  );

  if (matchedProducts.length === 0) {
    resultsContainer.innerHTML = "<p>Нічого не знайдено. Спробуйте інший запит.</p>";
    return;
  }

  matchedProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "search-item";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="search-image">
      <div class="search-info">
        <h3>${product.name}</h3>
        <p>${product.price} грн</p>
        <a href="product.html?id=${product.id}" class="back-button">Переглянути</a>
      </div>
    `;
    resultsContainer.appendChild(div);
  });
});
