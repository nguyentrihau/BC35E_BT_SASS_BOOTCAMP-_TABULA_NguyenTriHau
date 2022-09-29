function scrollFunction() {
    if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
        document.getElementById("site-header").classList.add("headerOnScroll");
    } else {
        document.getElementById("site-header").classList.remove("headerOnScroll");
    }
}
window.onscroll = function() {scrollFunction()};