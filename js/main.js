let btnIcon = document.getElementById('btnIcon');
let overLay = document.querySelector('header .overlay');
let cloceIcon = document.querySelector('header .top-nav-container .close-icon');
let overLayMenu = document.querySelector('header .overlay-menu ');
let nav = document.querySelector('header nav');
let navUL = document.querySelectorAll("header .overlay-menu ul li a");

// navFn =بتظهر ال ناف ف الرسبونسف
let navFun = () => {
    overLay.classList.remove("none");
    cloceIcon.classList.remove("none");
    overLayMenu.classList.remove("none");

}
btnIcon.addEventListener('click', navFun);
//  end navFun=================================================

// closeFun = بتقفل الناف ف الرسبونسف
let closeFun = () => {
    overLay.classList.add("none");
    cloceIcon.classList.add("none");
    overLayMenu.classList.add("none");

}
cloceIcon.addEventListener("click", closeFun);
// end closeFun =========================================================

//  closeNav =بتخفي الناف ف الرسبونسف بعد م اختار 
let addActive = () => {
    closeFun()

}

navUL[0].addEventListener('click', addActive);
navUL[1].addEventListener('click', addActive);
navUL[2].addEventListener('click', addActive);
navUL[3].addEventListener('click', addActive);
navUL[4].addEventListener('click', addActive);
navUL[5].addEventListener('click', addActive);
navUL[6].addEventListener('click', addActive);
navUL[7].addEventListener('click', addActive);

// end addactive ===================================================================

// btn go up 
$(window).scroll(function () {
    x = $(window).scrollTop();
    if (x > 500) {
        $('.top-icon').css("display", "block")
    } else {
        $('.top-icon').css("display", "none")

    }
});
//  end go up =========================================================
// smoth scroll 
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});
// end smoth scroll ========================

// nicd scroll
$(function () {
    $("body").niceScroll({
        cursorwidth: "10px",
        zindex: "25625" 
    });
});
//  end nice scroll ======================================================

//  wow =======
new WOW().init();
document.documentElement.style.setProperty('--animate-duration', '.5s');
// end wow ===================================================================



// funny txt
$(document).ready(function() {
	$('.mySelector').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector1').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector2').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector3').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector4').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector5').funnyText({
		speed: 300});
});
$(document).ready(function() {
	$('.mySelector6').funnyText({
		speed: 300});
});

// end fuuny text =======================================

