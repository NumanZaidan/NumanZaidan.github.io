// Function to show a section based on the hash value
function showSectionFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
}

function showSection(sectionId) {
    window.location.hash = sectionId;
    document.querySelectorAll('.content-section').forEach(section => {
        if (section.id === sectionId) {
            gsap.to(section, {duration: 1, autoAlpha: 1, display: 'block'});
        } else {
            gsap.to(section, {duration: 1, autoAlpha: 0, display: 'none'});
        }
    });
}

function playMovie(videoSrc) {
    document.querySelectorAll('.content-section').forEach(section => {
        gsap.to(section, {duration: 1, autoAlpha: 0, display: 'none'});
    });
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = videoSrc;
    gsap.to('#player', {duration: 1, autoAlpha: 1, display: 'flex'});
}

function closePlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Clear the source to stop the video
    gsap.to('#player', {duration: 1, autoAlpha: 0, display: 'none'});
    showSection('movies');
}

// Check hash on page load
window.addEventListener('load', showSectionFromHash);
// Check hash on hash change
window.addEventListener('hashchange', showSectionFromHash);