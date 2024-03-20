// Function to handle scroll event
function handleScroll() {
    var projectBoxes = document.querySelectorAll('.project-box');
    
    projectBoxes.forEach(function(box) {
        var bounding = box.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        // Calculate the distance of the box from the top of the viewport
        var distanceFromTop = bounding.top - viewportHeight / 2;
        // Calculate the scale factor based on the distance from the top
        // Adjust the scaleFactor value to control the popping-out effect
        var scaleFactor = Math.min(Math.max(1 - Math.abs(distanceFromTop) / (viewportHeight / 1), 0.5), 1);
        // Adjust the maximum scale of the box
        var maxScale = 0.9; // Adjust this value as needed
        scaleFactor = Math.min(scaleFactor, maxScale);
        // Apply the scale to the box with smooth transition
        box.style.transform = 'scale(' + scaleFactor + ')';
    });
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);