var currentVideo = 0;
var infoVideo = document.querySelectorAll('.infoVideo');
var explorarBackground = document.getElementById('explorarBackground');
var explorarInfo = document.getElementById('explorarInfo');
var videos = document.querySelectorAll('.exploreVideo');

function showVideo(index) {
    videos.forEach((video, i) => {
        video.style.display = i === index ? 'flex' : 'none';
    });
}

explorarInfo.addEventListener('click', () => {
    currentVideo = (currentVideo + 1) % videos.length;
    showVideo(currentVideo);

    explorarBackground.style.transition = 'background-color 1s ease';
    infoVideo.forEach((element) => {
        element.style.transition = 'background-color 1s ease';
    });

    if (currentVideo < 1) {
        explorarBackground.style.backgroundColor = "#57BEC6";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#57BEC6";
        });
    } else if (currentVideo == 2 || currentVideo == 3) {
        explorarBackground.style.backgroundColor = "#55B184";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#55B184";
        });
    } else if (currentVideo == 4 || currentVideo == 5 || currentVideo == 6 || currentVideo == 7) {
        explorarBackground.style.backgroundColor = "#8ED2C8";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#8ED2C8";
        });
    } else if (currentVideo >= 8 && currentVideo <= 13) {
        explorarBackground.style.backgroundColor = "#EA6060";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#EA6060";
        });
    } else if (currentVideo == 14) {
        explorarBackground.style.backgroundColor = "#E26BA9";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#E26BA9";
        });
    } else if (currentVideo == 15) {
        explorarBackground.style.backgroundColor = "#E7A7CA";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#E7A7CA";
        });
    } else if (currentVideo == 16) {
        explorarBackground.style.backgroundColor = "#EFBF33";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#EFBF33";
        });
    } else if (currentVideo == 17) {
        explorarBackground.style.backgroundColor = "#F3B1B4";
        infoVideo.forEach((element) => {
            element.style.backgroundColor = "#F3B1B4";
        });
    }
});

showVideo(currentVideo);
