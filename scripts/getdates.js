document.addEventListener("DOMContentLoaded", () => {
    const currentDateTime = document.getElementById("currentDateTime");
    const lastModified = document.getElementById("lastModified");
  
    // Show current date and time
    const now = new Date();
    currentDateTime.textContent = now.toLocaleString();
  
    // Show last modified date of the document
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  });
  