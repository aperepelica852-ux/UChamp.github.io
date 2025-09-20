console.log("Скрипт підключено");

//Оновлення лічильників у шапці
function updateHeaderCounts() {
  const likes = Object.keys(localStorage).filter(key => key.startsWith('liked-')).length;
  const cart = Object.keys(localStorage).filter(key => key.startsWith('cart-')).length;

  const likeCountEl = document.querySelector('.like-count');
  const cartCountEl = document.querySelector('.cart-count');

  if (likeCountEl) likeCountEl.textContent = likes;
  if (cartCountEl) cartCountEl.textContent = cart;
}

//Авторизація через Google
window.signInWithGoogle = function () {
  console.log("Функція викликана");

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      alert(`Привіт, ${user.displayName}!`);
      console.log("Email:", user.email);
      console.log("UID:", user.uid);

      // Зберігаємо ім’я
      localStorage.setItem("userName", user.displayName);

      // Виводимо в шапці
      const nameEl = document.getElementById("user-name");
      if (nameEl) {
        nameEl.textContent = `Привіт, ${user.displayName}`;
        nameEl.style.display = "inline-block";
      }
    })
    .catch(error => {
      console.error("Помилка входу:", error);
    });
};


// Пошук → перенаправлення на search.html
function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim();
  if (!query) return;
  window.location.href = `search.html?q=${encodeURIComponent(query)}`;
}

// Відкриття/закриття фільтра
function toggleMenu() {
  document.getElementById("filterMenu").classList.toggle("active");
}

//  Оновлення ціни при русі повзунка
function updatePrice(value) {
  document.getElementById("priceValue").textContent = value;
}

//  Застосування фільтра
function applyFilter() {
  const minPrice = document.getElementById("price").value;
  const maxPrice = document.getElementById("priceInput").value;

  const checkboxes = document.querySelectorAll('.size-options input[type="checkbox"]');

  const ounces = Array.from(checkboxes)
    .filter(el => el.checked && el.parentElement.textContent.includes('унцій'))
    .map(el => el.parentElement.textContent.trim());

  const clothingSizes = Array.from(checkboxes)
    .filter(el => el.checked && !el.parentElement.textContent.includes('унцій'))
    .map(el => el.parentElement.textContent.trim());

  console.log("Ціна від:", minPrice);
  console.log("Ціна до:", maxPrice);
  console.log("Унції:", ounces);
  console.log("Розміри одягу:", clothingSizes);

  document.getElementById("filterMenu").classList.remove("active");
  alert("Фільтр застосовано!");
}

//DOM готовий
document.addEventListener("DOMContentLoaded", () => {
  updateHeaderCounts();

  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", handleSearch);
  }
  const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");

const synonymMap = {
  "рукавички": ["перчатки", "перчата", "gloves"],
  "груша": ["мішок", "heavy bag", "боксерський мішок"],
  "шолом": ["каска", "захист голови", "headgear"],
  "форма": ["одяг", "екіпірування", "комплект"],
  "сумка": ["баул", "рюкзак", "спортивна сумка"],
  "бинти": ["обмотки", "wraps"],
  "капа": ["mouthguard", "захист зубів"],
  "лапи": ["pads", "мішені"],
  "тренажер": ["рефлекс", "тренер", "машина"],
  "боксерки": ["взуття", "черевики", "кросівки"],
  "скакалка": ["jump rope", "трос"]
};

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  suggestionsBox.innerHTML = "";

  if (!query) return;

  let matches = [];

  for (const key in synonymMap) {
    if (key.includes(query) || synonymMap[key].some(s => s.includes(query))) {
      matches.push(key, ...synonymMap[key]);
    }
  }

  matches = [...new Set(matches)].slice(0, 5);

  matches.forEach(term => {
    const div = document.createElement("div");
    div.className = "suggestion-item";
    div.textContent = term;
    div.addEventListener("click", () => {
      searchInput.value = term;
      suggestionsBox.innerHTML = "";
      window.location.href = `search.html?q=${encodeURIComponent(term)}`;
    });
    suggestionsBox.appendChild(div);
  });
});

});
