// ---------- Footer Dynamic Date ----------
document.addEventListener("DOMContentLoaded", () => {
    // Current Year
    const currentYear = new Date().getFullYear();
    document.getElementById("current year").textContent = currentYear;
  
    // Last Modified Date
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = `
      <span class="highlight">Last Modification:</span> ${lastModified}
    `;
  });
  
  // ---------- Responsive Navigation ----------
  const menuButton = document.querySelector("#menu");
  const navList = document.querySelector("nav ul");
  
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
    menuButton.classList.toggle("active"); // toggle animation class
  });
  