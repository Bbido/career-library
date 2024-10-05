// Smooth page transition effect
function smoothNavigate(url) {
    document.body.style.opacity = 0;
    setTimeout(function() {
        window.location.href = url;
    }, 500); // Adjust time for transition
}

// Add click event to career categories for smooth navigation
document.querySelectorAll('.categories div').forEach(function(category) {
    category.addEventListener('click', function() {
        let url = category.getAttribute('data-url');
        if (url) {
            smoothNavigate(url);
        }
    });
});
