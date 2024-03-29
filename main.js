// Get the ui canva element
const canvas = document.getElementById("myCanvas");

// Set the canvas to the size of the window
canvas.width = 200;


// Draw the car in the canvas context
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width / 2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50);

animate();

function animate() {
    car.update();

    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0, -car.y+canvas.height*0.7);
    road.draw(ctx); // Draw the road in the canvas context
    car.draw(ctx); // Draw the car in the canvas context

    ctx.restore();
    requestAnimationFrame(animate);
}


