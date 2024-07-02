var currentVideo = 0;
var videoMain = document.getElementById('videoMain');
var explorarBackground = document.getElementById('explorarBackground');
var infoVideo = document.querySelectorAll('.exploreInfo');
var exploreVideo = document.querySelectorAll('.video_plus_info video');
var videos = document.querySelectorAll('.exploreInfo');
var arrow = document.querySelectorAll('.arrow');

var arrowLeft = document.getElementById('arrowLeft');
var arrowRight = document.getElementById('arrowRight');
var arrowLeftMobile = document.getElementById('arrowLeftMobile');
var arrowRightMobile = document.getElementById('arrowRightMobile');

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

    // Verificar se estamos no primeiro ou no último vídeo
    if (index === 0) {
        arrowLeft.style.display = 'none';
        arrowLeftMobile.style.display = 'none';
    } else {
        arrowLeft.style.display = 'block';
        arrowLeftMobile.style.display = 'block';
    }

    if (index === videos.length - 1) {
        arrowRight.style.display = 'none';
        arrowRightMobile.style.display = 'none';
    } else {
        arrowRight.style.display = 'block';
        arrowRightMobile.style.display = 'block';
    }
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
    arrowMobile.style.transition = 'background-color 1s ease';
    arrowMobile.style.backgroundColor = backgroundColor;

    arrow.forEach(arw => {
        arw.style.transition = 'background-color 1s ease';
        arw.style.backgroundColor = backgroundColor;
    });
}

function handleArrowRightClick() {
    if (currentVideo < videos.length - 1) {
        currentVideo++;
        showVideo(currentVideo);
        changeBackgroundColor(currentVideo);
    }
}

function handleArrowLeftClick() {
    if (currentVideo > 0) {
        currentVideo--;
        showVideo(currentVideo);
        changeBackgroundColor(currentVideo);
    }
}

arrowRight.addEventListener('click', handleArrowRightClick);
arrowLeft.addEventListener('click', handleArrowLeftClick);

arrowRightMobile.addEventListener('click', handleArrowRightClick);
arrowLeftMobile.addEventListener('click', handleArrowLeftClick);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && currentVideo < videos.length - 1) {
        handleArrowRightClick();
    } else if (event.key === 'ArrowLeft' && currentVideo > 0) {
        handleArrowLeftClick();
    }
});

// Exibição inicial
showVideo(currentVideo);
