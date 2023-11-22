document.addEventListener("scroll", function() {
    var topHeader = document.getElementById("TH");
    var saibaMais = document.getElementById("more")
    var navHeader = document.getElementById("navH")

    if (window.scrollY > 50) {
        topHeader.classList.remove('top-reader');
        topHeader.classList.add('scroll-header');
        saibaMais.classList.remove('sumiu')

    } else if (window.scrollY < 50) {
        topHeader.classList.add('top-reader');
        topHeader.classList.remove('scroll-header');
        saibaMais.classList.add('sumiu')

    }
}); 