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
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);
});
// Check hash on hash change
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    showSection(hash);
});