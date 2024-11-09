function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function playMovie(videoSrc) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    document.getElementById('player').style.display = 'flex';
}

function closePlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Clear the source to stop the video
    document.getElementById('player').style.display = 'none';
    showSection('movies');
}
