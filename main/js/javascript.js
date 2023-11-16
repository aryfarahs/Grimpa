document.addEventListener("scroll", function() {
    var topHeader = document.querySelector(".top-header");
    var scrollHeader = document.querySelector(".scroll-header");

    if (window.scrollY > 50) {
        topHeader.style.display = 'none';
        scrollHeader.style.display = 'block';
    } else {
        topHeader.style.display = 'block';
        scrollHeader.style.display = 'none'
    }
}); 