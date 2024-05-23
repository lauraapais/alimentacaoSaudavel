
//header absolute
var menuDiv = document.getElementById("menuDiv");
var menuDesktop = document.getElementById("menuDesktop");

menuDesktop.addEventListener("click", function () {
    menuDiv.classList.add("active");
});

var closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
});




//header mobile
var menuDiv = document.getElementById("menuDiv");
var menuMobile = document.getElementById("menuMobile");

menuMobile.addEventListener("click", function () {
    menuDiv.classList.add("active");
});

var closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
});