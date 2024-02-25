class Sensor{
    constructor(car){
        this.car = car; // The car object
        this.rayCount = 3; // Number of rays
        this.rayLength = 100; // Length of the rays
        this.raySpread = Math.PI/4; // Angle between the rays
        
        this.rays=[]; // Array to store the rays
    }

    update(){
        this.rays = []; // Clear the rays array
        for(let i = 0; i < this.rayCount; i++){ 
            // Create a new ray for each angle
           const rayAngle = lerp(
            this.raySpread/2, // Start angle
            -this.raySpread/2, // End angle
            this.rayCount===1? 0.5 : i/(this.rayCount-1) // check if there is just one and add tho the middle, if not spread
           ) + this.car.angle; // The rays will follow car postion

              // Calculate the ray position
              const start = {x:this.car.x, y:this.car.y};
              const end = {
                  x: this.car.x - Math.sin(rayAngle)*this.rayLength,
                  y: this.car.y - Math.cos(rayAngle)*this.rayLength
              };
                this.rays.push([start, end]); // Add the ray to the array
        }
    
    }

    draw(ctx){
        for(let i = 0; i < this.rayCount; i++){
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "yellow";
            ctx.moveTo(
                this.rays[i][0].x, 
                this.rays[i][0].y
                );
            ctx.lineTo(
                this.rays[i][1].x, 
                this.rays[i][1].y
                );
            ctx.stroke();
        }
    }
}