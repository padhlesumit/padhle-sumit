// Function to redirect to the Free Content page
function redirectToFreeContent() {
    document.querySelector('.content').style.display = 'none';
    document.getElementById('video-page').style.display = 'block';
}

// Function to play a selected video
function playVideo(videoSrc) {
    // Hide the video list page
    document.getElementById('video-page').style.display = 'none';

    // Show the video player page
    document.getElementById('video-settings').style.display = 'block';

    // Update the video source and reload the video
    const videoElement = document.getElementById('video-source');
    videoElement.src = videoSrc;
    document.querySelector('.video-player').load();
}
