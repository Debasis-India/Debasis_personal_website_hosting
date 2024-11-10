const backgrounds = [
    'url("https://github.com/Debasis-India/Debasis-India/blob/main/pic%201.jpg")',
    'url("https://github.com/Debasis-India/Debasis-India/blob/main/pic%202.jpg")',
    'url("https://github.com/Debasis-India/Debasis-India/blob/main/pic%203.jpg")',
];


let currentIndex = 0;

function changeBackground() {
    const backgroundElement = document.querySelector('.background');
    
    // Change the background image based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > currentIndex * window.innerHeight) {
            currentIndex = (currentIndex + 1) % backgrounds.length; // Loop through images
            backgroundElement.style.backgroundImage = backgrounds[currentIndex];
        }
        
        // Optional: Change back when scrolling up
        if (scrollPosition < (currentIndex - 1) * window.innerHeight && currentIndex > 0) {
            currentIndex--;
            backgroundElement.style.backgroundImage = backgrounds[currentIndex];
        }
    });
}

// Initialize the background change
changeBackground();
