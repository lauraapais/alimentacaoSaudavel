var currentVideo = 0;

var infoVideos = document.querySelectorAll('.mainVideo');
var explorarBackground = document.getElementById('explorarBackground');
var infoVideo = document.querySelectorAll('.infoVideo');
var exploreVideo = document.querySelectorAll('.exploreVideo video');
var videos = document.querySelectorAll('.infoVideo');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');

function showVideo(index) {
    infoVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            setTimeout(() => {
                video.style.opacity = 1;
            }, 50);
        } else {
            video.style.opacity = 0;
            setTimeout(() => {
                video.style.display = 'none';
            }, 500);
        }
    });

    exploreVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            setTimeout(() => {
                video.style.opacity = 1;
            }, 50);
        } else {
            video.style.opacity = 0;
            setTimeout(() => {
                video.style.display = 'none';
            }, 500);
        }
    });
}

function changeBackgroundColor(index) {
    let backgroundColor;

    switch (true) {
        case index <= 1:
            backgroundColor = "#52BFC5";
            break;
        case index == 2 || index == 3:
            backgroundColor = "#4AB083";
            break;
        case index >= 4 && index <= 7:
            backgroundColor = "#89CCC5";
            break;
        case index >= 8 && index <= 13:
            backgroundColor = "#EC5F61";
            break;
        case index == 14:
            backgroundColor = "#CE6198";
            break;
        case index == 15:
            backgroundColor = "#EAB3D1";
            break;
        case index == 16:
            backgroundColor = "#F5B1B2";
            break;
        case index == 17:
            backgroundColor = "#ECBE2F";
            break;
    }

    explorarBackground.style.transition = 'background-color 1s ease';
    explorarBackground.style.backgroundColor = backgroundColor;

    infoVideos.forEach(infoVideo => {
        infoVideo.style.transition = 'background-color 1s ease';
        infoVideo.style.backgroundColor = backgroundColor;
    });
}

function handleArrowRightClick() {
    currentVideo = (currentVideo + 1) % videos.length;
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

function handleArrowLeftClick() {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    showVideo(currentVideo);
    changeBackgroundColor(currentVideo);
}

arrowRight.addEventListener('click', handleArrowRightClick);
arrowLeft.addEventListener('click', handleArrowLeftClick);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        handleArrowRightClick();
    } else if (event.key === 'ArrowLeft') {
        handleArrowLeftClick();
    }
});

showVideo(currentVideo);
