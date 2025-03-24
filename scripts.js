// Function to load external HTML files
function loadComponent(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Load Navbar and Footer
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('header.html', 'header-placeholder');
    loadComponent('navbar.html', 'nav-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});