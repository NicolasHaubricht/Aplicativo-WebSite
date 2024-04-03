function openFullScreen(url) {
    window.open(url, 'fullscreen=yes');
}

window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
    header.classList.add('scrolled');
    } else {
    header.classList.remove('scrolled');
    }
});
