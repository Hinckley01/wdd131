// ------------------------------
// Temple Album - JavaScript
// ------------------------------

// ✅ Responsive Navigation (Hamburger Menu)
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("nav ul");

// Set initial hamburger icon
menuButton.textContent = "☰"; 

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Toggle icon between ☰ (hamburger) and ✖ (close)
  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});

// ✅ Dynamic Copyright Year
const yearSpan = document.querySelector("#currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✅ Display Last Modified Date
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  const modifiedDate = new Date(document.lastModified);
  lastModified.innerHTML = `<span class="highlight">Last Modified:</span> ${modifiedDate.toLocaleString()}`;
}

// ✅ Optional hover animation (nice touch)
menuButton.addEventListener("mouseenter", () => {
  menuButton.style.transform = "scale(1.2)";
  menuButton.style.transition = "transform 0.2s ease";
});
menuButton.addEventListener("mouseleave", () => {
  menuButton.style.transform = "scale(1)";
});
