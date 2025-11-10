// ===========================
// Temple Album JavaScript
// Author: Hinckley Ohaegbulem
// ===========================

// ----- Hamburger Menu -----
const menuButton = document.querySelector("#menu");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// ----- Footer Date and Time -----
const yearSpan = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

// Display current year
yearSpan.textContent = new Date().getFullYear();

// Display last modified date of the document
lastModified.innerHTML = `<span class="highlight">Last Modification:</span> ${document.lastModified}`;
