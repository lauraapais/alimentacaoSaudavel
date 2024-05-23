
//header absolute
var menuDiv = document.getElementById("menuDiv");
var openMenu = document.getElementById("openMenu");

openMenu.addEventListener("click", function () {
    menuDiv.classList.add("active");
});

var closeMenu = document.getElementById("closeMenu");
closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
});