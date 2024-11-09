function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function playMovie(movieSrc) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('videoSource').src = movieSrc;
    document.getElementById('videoPlayer').load();
    document.getElementById('player').style.display = 'flex';
    document.getElementById('videoPlayer').play();
}

function closePlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.pause();
    videoPlayer.removeAttribute('src'); // Remove the video source
    videoPlayer.load(); // Reset the video player
    document.getElementById('player').style.display = 'none';
    showSection('movies');
}
