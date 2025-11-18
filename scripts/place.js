// ✅ Display the current year
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// ✅ Display the last modified date
document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

// -------------------------------
// ✅ Wind Chill Calculation (Rubric Requirements)
// -------------------------------
const temp = parseFloat(document.querySelector("#temperature").textContent);
const speed = parseFloat(document.querySelector("#wind-speed").textContent);
const windChillValue = document.querySelector("#windChillValue");

// ❗ Function with ONE line of code only (rubric requirement)
function calculateWindChill(t, s) { return (13.12 + 0.6215*t - 11.37*Math.pow(s,0.16) + 0.3965*t*Math.pow(s,0.16)).toFixed(1); }

// ❗ Only calculate wind chill if conditions are met
if (temp <= 10 && speed > 4.8) {
    windChillValue.textContent = calculateWindChill(temp, speed) + " °C";
} else {
    windChillValue.textContent = "N/A";
}
