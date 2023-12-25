// Planet.js
class Planet {
    constructor(r, d) {
        this.radius = r;
        this.distance = d;
        this.angle = 0;
        // Create an array of planets class
        this.planets = [];

        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
    }

    spawnMoons(total) {
        this.planets = new Array(total);
        for (let i = 0; i < this.planets.length; i++) {
            let moonRadius = this.radius / (i + 1);
            let moonDistance = random(50, 150);
            this.planets[i] = new Planet(moonRadius, moonDistance);
        }
    }

    show() {
        push(); // Save the current transformation state
        translate(this.distance, 0); // Translate to the distance of the planet
        rotate(this.angle); // Rotate the planet (radians)

        fill(this.r, this.g, this.b);

        ellipse(0, 0, this.radius * 2, this.radius * 2);

        // Show the planets
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].show();
        }

        pop(); // Restore the previous transformation state
    }

    //now create a function that randomly move the planets in all the space
    orbit() {
        this.angle += 0.01;
        this.distance = this.distance + random(-5, 5);
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].orbit();
        }
    }
}
