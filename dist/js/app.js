var hideshow = document.querySelector(".nav_m_menu_btn");
var menu = document.querySelector(".nav_m_menu_b");

hideshow.addEventListener("click",
    function(e) {
        $("div.nav_m_menu_btn-in-box").toggleClass("is-active");
        $("aside.nav_m_menu_b").toggleClass("is-active");
        $("main.fullPageWrapper").toggleClass("blur");
    } , false);

var navvv = document.querySelector(".nav")
var prevScroll = window.pageYOffset;
window.onscroll = function() {
    var currentScrool = window.pageYOffset;
    if (window.pageYOffset <= 0) {
        navvv.className = "nav"
    }
    else if(prevScroll > currentScrool) {
        navvv.className = "nav scrollUp"
    } else{
        navvv.className = "nav scrollDown"
    }
    prevScroll = currentScrool;
}

$(function() {
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});