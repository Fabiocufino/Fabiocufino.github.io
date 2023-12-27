class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        // this.vel = createVector(random(-2,2), random(-2, 2));
        this.vel = createVector(random(-1,1), random(-1,1));

        this.acc = createVector(0, 0);
        this.mass = random(1, 5);


        this.color = color(255, 255, 255);
        

        this.maxSpeed = 22

        this.width = windowWidth-10;
        this.height = windowHeight-10;



        this.radius = this.mass * 2;

        this.history = [];
    }

    show() {
        strokeWeight(1);

        this.update();
        this.edges();

        // Change color of ellipse
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

    }

    updatePrev() {
        this.prevPos = this.pos.copy();
    }


    update() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel);
        this.acc.mult(0); // Reset the acceleration

        //stor the history of last 100 steps
        let v = createVector(this.pos.x, this.pos.y);
        this.history.push(v);
        if (this.history.length > 100) {
            this.history.splice(0, 1);
        }
    }

    edges() {
        if (this.pos.x > this.width) {
            this.pos.x = this.width;
            this.vel.x *= -0.5; // Reverse x velocity to bounce
        }
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -0.5; // Reverse x velocity to bounce
        }
        if (this.pos.y > this.height) {
            this.pos.y = this.height;
            this.vel.y *= -0.5; // Reverse y velocity to bounce
        }
        if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -0.5; // Reverse y velocity to bounce
        }
    }

    showHistory() {
        noFill();
        strokeWeight(1);
        stroke(255, 255, 255, 50);
        beginShape();
        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i];
            vertex(pos.x, pos.y);
        }
        endShape();
    }
}
