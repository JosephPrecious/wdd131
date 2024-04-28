// getdates.js

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to get the last modified date of the document
function getLastModifiedDate() {
    return document.lastModified;
}

// Function to update the footer content
function updateFooter() {
    // Update current year
    document.getElementById('currentyear').innerText = getCurrentYear();

    // Update last modified date
    document.getElementById('lastModified').innerText = "Last modified: " + getLastModifiedDate();
}

// Call the updateFooter function when the page loads
window.onload = updateFooter;
