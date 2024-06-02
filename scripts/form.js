document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', name: 'flux capacitor' },
        { id: 'fc-2050', name: 'power laces' },
        { id: 'fs-1987', name: 'time circuits' },
        { id: 'ac-2000', name: 'low voltage reactor' },
        { id: 'jj-1969', name: 'warp equalizer' }
    ];

    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Update footer date
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
