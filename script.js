// Function to show a section based on the hash value
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

// Function to play a movie
function playMovie(videoSrc) {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    document.getElementById('player').style.display = 'flex';
    document.getElementById('movies').style.display = 'none';

    // Save video state to Local Storage
    localStorage.setItem('currentVideoSrc', videoSrc);
}

// Function to close the player
function closePlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Clear the source to stop the video
    document.getElementById('player').style.display = 'none';
    showSection('movies');

    // Clear video state from Local Storage
    localStorage.removeItem('currentVideoSrc');
}

// Restore video state on page load
window.addEventListener('load', () => {
    const currentVideoSrc = localStorage.getItem('currentVideoSrc');
    if (currentVideoSrc) {
        playMovie(currentVideoSrc);
    } else {
        showSection('home');
    }
});