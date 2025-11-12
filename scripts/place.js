// ✅ Display the current year
const currentYear = document.querySelector("#currentYear");
currentYear.textContent = new Date().getFullYear();

// ✅ Display the last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

// ✅ Wind Chill Calculation
const temperature = parseFloat(document.querySelector("#temperature").textContent);
const windSpeed = parseFloat(document.querySelector("#wind-speed").textContent);
const windChillValue = document.querySelector("#windChillValue");

function calculateWindChill(temp, speed) {
  // Wind chill only applies if temp <= 10°C and wind speed > 4.8 km/h
  if (temp <= 10 && speed > 4.8) {
    const chill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
    return `${chill.toFixed(1)} °C`;
  } else {
    return "N/A";
  }
}

// ✅ Update the wind chill value
windChillValue.textContent = calculateWindChill(temperature, windSpeed);
