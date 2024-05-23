//header absolute
var menuDiv = document.getElementById("menuDiv");
var menuDesktop = document.getElementById("menuDesktop");

menuDesktop.addEventListener("click", function () {
    menuDiv.classList.add("active");
    document.body.classList.add("overflow-hidden");
});

var closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});

//header mobile
var menuMobile = document.getElementById("menuMobile");

menuMobile.addEventListener("click", function () {
    menuDiv.classList.add("active");
    document.body.classList.add("overflow-hidden");
});

closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});
