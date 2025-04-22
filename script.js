if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; // Prevents scrolling to the previous position
}
// Select the motorcycle
const motorcycle = document.getElementById('motorcycle');
const motorcycle2 = document.getElementById('motorcycle2');

// Initial position and speed
let posX = 0; // Initial X position
let posY = 500; // Initial Y position
let speedX = 1; // Speed along X-axis
let speedY = 1; // Speed along Y-axis
let posX2 = 200, posY2 = 10, speedX2 = 1.5, speedY2 = 1.5;

// Get screen dimensions
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;

// Function to move the motorcycle
function moveMotorcycle() {
    posX += speedX;
    posY += speedY;

    // Collision detection with right or left wall
    if (posX + motorcycle.clientWidth >= screenWidth || posX <= 0) {
        speedX *= -1; // Reverse X direction
    }

    // Collision detection with top or bottom wall
    if (posY + motorcycle.clientHeight >= screenHeight || posY <= 0) {
        speedY *= -1; // Reverse Y direction
    }

    // Update motorcycle position
    motorcycle.style.left = posX + 'px';
    motorcycle.style.top = posY + 'px';

    // Motorcycle 2 movement
    posX2 += speedX2;
    posY2 += speedY2;

    if (posX2 + motorcycle2.clientWidth >= screenWidth || posX2 <= 0) speedX2 *= -1;
    if (posY2 + motorcycle2.clientHeight >= screenHeight || posY2 <= 0) speedY2 *= -1;

    motorcycle2.style.left = posX2 + 'px';
    motorcycle2.style.top = posY2 + 'px';

    // Call the animation again
    requestAnimationFrame(moveMotorcycle);
}

// Start the animation
moveMotorcycle();

// Update dimensions when window is resized
window.addEventListener('resize', () => {
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
});
