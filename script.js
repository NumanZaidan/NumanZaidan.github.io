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
    
    // Save video state to Local Storage
    localStorage.setItem('currentVideoSrc', videoSrc);
}

function closePlayer() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = ''; // Clear the source to stop the video
    gsap.to('#player', {duration: 1, autoAlpha: 0, display: 'none'});
    showSection('movies');
    
    // Clear video state from Local Storage
    localStorage.removeItem('currentVideoSrc');
}

// Check hash on page load
window.addEventListener('load', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    showSection(hash);

    // Restore video state from Local Storage
    const currentVideoSrc = localStorage.getItem('currentVideoSrc');
    if (currentVideoSrc && hash === 'player') {
        playMovie(currentVideoSrc);
    }
});

// Check hash on hash change
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    showSection(hash);

    // Restore video state from Local Storage if on player section
    if (hash === 'player') {
        const currentVideoSrc = localStorage.getItem('currentVideoSrc');
        if (currentVideoSrc) {
            playMovie(currentVideoSrc);
        }
    }
});