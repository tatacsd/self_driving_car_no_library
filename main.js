// Get the ui canva element
const canvas = document.getElementById("myCanvas");

// Set the canvas to the size of the window
canvas.width = 200;


// Draw the car in the canvas context
const ctx = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

animate();



function animate() {
    car.update();
    
    canvas.height = window.innerHeight;
    car.draw(ctx); // Draw the car in the canvas context
    requestAnimationFrame(animate);
}


