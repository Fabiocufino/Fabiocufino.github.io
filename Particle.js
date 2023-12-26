class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-2,2), random(-2, 2));
        this.acc = createVector(0, 0);
        this.mass = random(1, 5);
        this.maxSpeed = 22

        this.width = windowWidth-10;
        this.height = windowHeight-10;

        this.radius = this.mass * 2;
    }

    show() {
        strokeWeight(1);

        this.update();
        this.edges();

        // Change color of ellipse
        fill(255, 255, 255);
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
}
