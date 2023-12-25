class Particle {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(random(0, 0), random(0, 0));
        this.mass = random(1, 3);
        this.maxSpeed = 22

        // Uncomment the next two lines if you want to use updatePrev
        this.width = windowWidth-10;
        this.height = windowHeight-10;
    }

    show() {
        strokeWeight(1);

        this.update();
        this.edges();

        // Change color of ellipse
        fill(255, 255, 255);
        ellipse(this.pos.x, this.pos.y, 10, 10);

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
            this.vel.x *= -1; // Reverse x velocity to bounce
        }
        if (this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x *= -1; // Reverse x velocity to bounce
        }
        if (this.pos.y > this.height) {
            this.pos.y = this.height;
            this.vel.y *= -1; // Reverse y velocity to bounce
        }
        if (this.pos.y < 0) {
            this.pos.y = 0;
            this.vel.y *= -1; // Reverse y velocity to bounce
        }
    }
}
