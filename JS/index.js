var backgroundIndex = document.getElementById("backgroundIndex");
var mainLanding = document.getElementById("mainLanding");
var landingIntro = document.getElementById("landingIntro");
var mainIndex = document.getElementById("mainIndex");
var iconsIntroTitle = document.getElementById("iconsIntroTitle");
var footerSuport = document.getElementById("footerSuport");
var footerPartnership = document.getElementById("footerPartnership");


// List of predefined colors
var colors = [
    "#EA6060", // salmon
    "#8ED2C8", // lightBlue
    "#57BEC6", // blue
    "#55B184", // green
    "#E26BA9", // pink
    "#E7A7CA", // lightPink
    "#F3B1B4", // lighLightPink
    "#EFBF33", // toastedYellow
];

// Function to get a random color
function getRandomColor() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

var randomColor = getRandomColor();
backgroundIndex.style.backgroundColor = randomColor;
mainLanding.style.backgroundColor = randomColor;
landingIntro.style.backgroundColor = randomColor;
mainIndex.style.backgroundColor = randomColor;
iconsIntroTitle.style.backgroundColor = randomColor;
footerSuport.style.backgroundColor = randomColor;
footerPartnership.style.backgroundColor = randomColor;