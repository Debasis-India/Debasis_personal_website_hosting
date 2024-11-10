const backgrounds = [
    'url("https://raw.githubusercontent.com/username/repository/main/pic 1.jpg")',
    'url("https://raw.githubusercontent.com/username/repository/main/pic 2.jpg")',
    'url("https://raw.githubusercontent.com/username/repository/main/pic 3.jpg")',
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