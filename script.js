document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navigation');
    
    window.addEventListener('scroll', function() {
        if (window.scroll > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });
});
