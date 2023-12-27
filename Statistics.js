let particles = [];
let startTime;

function Particle(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.mass = random(1, 5);
}

Particle.prototype.update = function () {
    this.pos.add(this.vel);
}

function computeEnergy() {
    let energy = 0;

    for (let i = 0; i < particles.length; i++) {
        energy += particles[i].mass * particles[i].vel.magSq() / 2;
    }

    return energy;
}

function drawEnergyGraph(time) {
    let energy = computeEnergy();
    let energyY = map(energy, 0, 100000, 0, windowHeight - 10);

    stroke(255);
    line(time, windowHeight - 10, time, windowHeight - 10 - energyY);
}

function setup() {
    createCanvas(windowWidth - 10, windowHeight - 10);

    // Create some particles
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle(random(width), random(height)));
    }

    startTime = millis(); // Record the start time
}

function draw() {
    background(0);

    let currentTime = millis() - startTime; // Calculate elapsed time


    drawEnergyGraph(currentTime);
}
