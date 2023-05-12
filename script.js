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
const videoFile1 = document.getElementById('video-file'),
      videoFile2 = document.getElementById('blurred'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

videoFile2.volume=0;      

function playPause(){ 
    if (videoFile1.paused){
        // Play video
        videoFile1.play()
        videoFile2.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile1.pause(); 
        videoFile2.pause();
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

video1.addEventListener('seeked', function() {
    videoFile2.currentTime = videoFile1.currentTime;
});

video2.addEventListener('seeked', function() {
    videoFile1.currentTime = videoFile2.currentTime;
});
// ended, when the video ends

videoFile.addEventListener('ended', finalVideo)
  
