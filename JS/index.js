var backgroundIndex = document.getElementById("backgroundIndex");
var mainLanding = document.getElementById("mainLanding");
var landingIntro = document.getElementById("landingIntro");
var iconsIntro = document.getElementById("iconsIntro");
var iconsIntroTitle = document.getElementById("iconsIntroTitle");
var footerSuport = document.getElementById("footerSuport");
var footerPartnership = document.getElementById("footerPartnership");


// List of predefined colors
var colors = [
    "#DD6A65", // salmon
    "#9ECFC7", // lightBlue
    "#72BEC3", // blue
    "#67AF88", // green
    "#D473A6", // pink
    "#E0AACA", // lightPink
    "#EBB6B4", // lighLightPink
    "#EFBE2E", // toastedYellow
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
    iconsIntro.style.backgroundColor = randomColor;
    iconsIntroTitle.style.backgroundColor = randomColor;
    footerSuport.style.backgroundColor = randomColor;
    footerPartnership.style.backgroundColor = randomColor;