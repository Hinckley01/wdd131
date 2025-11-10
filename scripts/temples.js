// ------------------------------
// Temple Album - JavaScript
// ------------------------------

// ✅ 1. Responsive Navigation (Hamburger Menu)
const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  // Optional: Change icon for open/close effect
  menuButton.classList.toggle("active");
});

// ✅ 2. Dynamic Copyright Year
const yearSpan = document.querySelector("#currentYear");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ✅ 3. Display Last Modified Date
const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  const modifiedDate = new Date(document.lastModified);
  lastModified.innerHTML = `<span class="highlight">Last Modified:</span> ${modifiedDate.toLocaleString()}`;
}

// ✅ 4. Optional: Add small animation to menu button (just for nice design)
if (menuButton) {
  menuButton.addEventListener("mouseenter", () => {
    menuButton.style.transform = "scale(1.1)";
  });
  menuButton.addEventListener("mouseleave", () => {
    menuButton.style.transform = "scale(1)";
  });
}
