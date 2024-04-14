// Function to handle scroll event
function handleScroll() {
    var projectBoxes = document.querySelectorAll('.project-box');
    
    projectBoxes.forEach(function(box) {
        var bounding = box.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        var distanceFromTop = bounding.top - viewportHeight / 2;
        
        // Calculate the scale factor based on the device width
        var scaleFactor = 1;
        if (window.innerWidth <= 600) { // Adjust threshold as needed
            scaleFactor = Math.min(Math.max(1 - Math.abs(distanceFromTop) / (viewportHeight / 0.7), 0.5), 1);
        } else {
            scaleFactor = Math.min(Math.max(1 - Math.abs(distanceFromTop) / (viewportHeight / 1), 0.5), 1);
        }
        
        var maxScale = 0.9; // Adjust this value as needed
        if (window.innerWidth <= 600) {
            var maxScale = 0.85;
        }
        scaleFactor = Math.min(scaleFactor, maxScale);
        
        box.style.transform = 'scale(' + scaleFactor + ')';
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
