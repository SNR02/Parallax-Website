let dubaiText = document.getElementById('dubaitext');
let burjkhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll',() =>{
    let value = window.scrollY;

    if (value < 600) { // set a maximum value for the scroll animation
        dubaiText.style.left = value * -2 + 'px';
        burjkhalifa.style.top = value * 1 + 'px';
        stars.style.top = value * 1 + 'px';
    }
})

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

function checkOrientation() {
    var overlay = document.getElementById('overlay');
    var app = document.getElementById('app');
    if (window.matchMedia("(orientation: portrait)").matches) {
        // Portrait orientation
        overlay.style.display = 'block';
        app.style.display = 'none';
    } else {
        // Landscape orientation
        overlay.style.display = 'none';
        app.style.display = 'block';
    }
}

window.addEventListener('load', checkOrientation, false);
window.addEventListener('resize', checkOrientation, false);
window.addEventListener('orientationchange', checkOrientation, false);
