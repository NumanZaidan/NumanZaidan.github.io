function showSection(sectionId) {
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