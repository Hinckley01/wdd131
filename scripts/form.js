// ===== Product Array =====
const products = [
    { id: "gp-001", name: "Gaming Mouse", averagerating: 4.5 },
    { id: "gp-002", name: "Mechanical Keyboard", averagerating: 4.7 },
    { id: "gp-003", name: "VR Headset", averagerating: 4.3 },
    { id: "gp-004", name: "Wireless Earbuds", averagerating: 4.1 },
    { id: "gp-005", name: "RGB Gaming Chair", averagerating: 4.6 },
    { id: "gp-006", name: "4K Monitor", averagerating: 4.8 },
    { id: "gp-007", name: "Graphics Tablet", averagerating: 4.2 },
    { id: "gp-008", name: "Portable SSD", averagerating: 4.4 },
    { id: "gp-009", name: "Gaming Controller", averagerating: 4.0 },
    { id: "gp-010", name: "Streaming Microphone", averagerating: 4.3 }
  ];
  
  // ===== Populate Product Dropdown =====
  window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById('productName');
  
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    // Display current year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  
    // Handle form submit
    const form = document.getElementById("reviewForm");
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent actual submission
  
      // Track number of reviews in localStorage
      let reviewsCompleted = parseInt(localStorage.getItem("reviewsCompleted") || "0");
      reviewsCompleted += 1;
      localStorage.setItem("reviewsCompleted", reviewsCompleted.toString());
  
      alert(`Review submitted! Total reviews completed: ${reviewsCompleted}`);
  
      form.reset(); // reset form after submission
    });
  });
  