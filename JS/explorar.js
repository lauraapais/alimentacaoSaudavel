var currentVideo = 0;
var videoMain = document.getElementById('videoMain');
var explorarBackground = document.getElementById('explorarBackground');
var infoVideo = document.querySelectorAll('.exploreInfo');
var exploreVideo = document.querySelectorAll('.video_plus_info video');
var videos = document.querySelectorAll('.exploreInfo');
var arrow = document.querySelectorAll('.arrow');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');

function showVideo(index) {
    infoVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            video.style.opacity = 1;
        } else {
            video.style.opacity = 0;
            video.style.display = 'none';
        }
    });

    exploreVideo.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'flex';
            video.style.opacity = 1;
            video.play();
        } else {
            video.style.opacity = 0;
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
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
        case index >= 8 && index <= 12:
            backgroundColor = "#EC5F61";
            break;
        case index == 13:
            backgroundColor = "#CE6198";
            break;
        case index == 14:
            backgroundColor = "#EAB3D1";
            break;
        case index == 15:
            backgroundColor = "#F5B1B2";
            break;
        case index == 16:
            backgroundColor = "#ECBE2F";
            break;
    }

    explorarBackground.style.transition = 'background-color 1s ease';
    explorarBackground.style.backgroundColor = backgroundColor;

    arrow.forEach(arw => {
        arw.style.transition = 'background-color 1s ease';
        arw.style.backgroundColor = backgroundColor;
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


