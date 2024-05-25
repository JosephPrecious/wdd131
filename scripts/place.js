// Function to display current year and last modified date in the footer
function updateFooter() {
    const yearElement = document.querySelector('footer p:nth-of-type(1)');
    const lastModifiedElement = document.querySelector('#lastModified');

    const currentYear = new Date().getFullYear();
    yearElement.textContent = `©${currentYear} Okoroji Precious Nigeria`;

    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = lastModifiedDate;
}

// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill factor in Celsius
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
}

// Function to update the wind chill factor in the weather section
function updateWindChill() {
    const tempValue = 26; // Static temperature value in Celsius
    const windSpeed = 5; // Static wind speed value in km/h

    const windChillElement = document.getElementById('windchill-factor');
    if (tempValue <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(tempValue, windSpeed)}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
    updateWindChill();
});
