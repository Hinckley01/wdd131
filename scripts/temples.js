// =======================
// TEMPLE DATA (Required 10)
// =======================
const temples = [
  {
    name: "Billings Montana Temple",
    location: "Billings, Montana, USA",
    dedicated: "1999-11-20",
    area: 33800,
    imageUrl: "image/billings-montana-temple.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Abia State, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "image/aba-nigeria-temple.jpg"
  },
  {
    name: "Albuquerque New Mexico Temple",
    location: "Albuquerque, New Mexico, USA",
    dedicated: "2000-03-05",
    area: 34245,
    imageUrl: "image/albuquerque-temple.jpg"
  },
  {
    name: "Belém Brazil Temple",
    location: "Belém, Pará, Brazil",
    dedicated: "2022-11-20",
    area: 28000,
    imageUrl: "image/belem_brazil_temple.jpg"
  },
  {
    name: "Chicago Illinois Temple",
    location: "Chicago, Illinois, USA",
    dedicated: "1985-08-09",
    area: 37062,
    imageUrl: "image/chicago's-temple.jpg"
  },
  {
    name: "Columbia River Washington Temple",
    location: "Richland, Washington, USA",
    dedicated: "2001-11-18",
    area: 16000,
    imageUrl: "image/columbia-river-temple.jpg"
  },
  {
    name: "Durban South Africa Temple",
    location: "Durban, KwaZulu-Natal, South Africa",
    dedicated: "2020-02-16",
    area: 19000,
    imageUrl: "image/durban-southafrica-temple.jpg"
  },
  {
    name: "Kona Hawaii Temple",
    location: "Kailua-Kona, Hawaii, USA",
    dedicated: "2000-01-23",
    area: 10700,
    imageUrl: "image/kona-hawaii-temple.jpg"
  },
  {
    name: "Newport Beach California Temple",
    location: "Newport Beach, California, USA",
    dedicated: "2005-08-28",
    area: 17000,
    imageUrl: "image/newport-beach-temple.jpg"
  },
  {
    name: "London England Temple",
    location: "London, England",
    dedicated: "1958-09-07",
    area: 42000,
    imageUrl: "image/london-temple.jpg"
  }
];

// =======================
// RENDER FUNCTION
// =======================
function renderTemples(list) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // clear old content

  list.forEach(t => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
      <img src="${t.imageUrl}" alt="${t.name}" loading="lazy">
      <figcaption>
        <h3>${t.name}</h3>
        <p><strong>Location:</strong> ${t.location}</p>
        <p><strong>Dedicated:</strong> ${t.dedicated}</p>
        <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;

    container.appendChild(figure);
  });
}

// =======================
// FILTER BUTTONS
// =======================
document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples); // default (Home)

  document.querySelector("a[href='#Old']").addEventListener("click", () => {
    const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    renderTemples(oldTemples);
  });

  document.querySelector("a[href='#New']").addEventListener("click", () => {
    const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    renderTemples(newTemples);
  });

  document.querySelector("a[href='#Large']").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
  });

  document.querySelector("a[href='#Small']").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
  });

  document.querySelector("a[href='#Home']").addEventListener("click", () => {
    renderTemples(temples);
  });
});

// =======================
// HAMBURGER MENU
// =======================
const menuBtn = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// =======================
// FOOTER DATES
// =======================
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("modifiedDate").textContent = document.lastModified;
