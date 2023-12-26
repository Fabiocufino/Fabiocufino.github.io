//create an array
let particle; // Fix variable name (from "particl" to "particle")

function gravitationalForce(centerX, centerY, a, b) {
    let force = createVector(b.pos.x - a.pos.x, b.pos.y - a.pos.y); // Fix force calculation
    let distance = force.mag();

    if (distance < 10){
        force.setMag(0);
    }
    force.setMag((a.mass * b.mass) / (distance * distance));

    a.acc.add(force); // Fix the reference to acceleration (from "this.acc" to "a.acc")
    b.acc.sub(force); // Subtract force from b to satisfy Newton's third law
}

function mousePressed() {
    for (let i = 0; i < particle.length; i++) {
        particle[i].pos.x = random(0, windowWidth -50);
        particle[i].pos.y = random(0, windowHeight -50);

        particle[i].vel.x = 0;
        particle[i].vel.y = 0;
    }
}

function setup() {
    createCanvas(windowWidth-10, windowHeight-10);


    particle = new Array(101); // Fix variable name (from "particle" to "particle")
    for (let i = 0; i < particle.length; i++) {
        let x_in = random(0, windowWidth -50);
        let y_in = random(0, windowHeight -50);
        particle[i] = new Particle(x_in, y_in);
    }
    particle[101] = new Particle((windowWidth-10) /2, (windowHeight-10)/2);
}

function draw() {
    background(0, 0, 0);

    //show the center particle 
    particle[101].pos.x = (windowWidth-10) /2;
    particle[101].pos.y = (windowHeight-10) /2;
    particle[101].mass = 200;
    particle[101].show();


    //show the 100 particles
    for (let i = 0; i < particle.length; i++) {
        particle[i].show();
    }


    //compute the gravitational force between the particles
    for (let i = 0; i < particle.length; i++) {
        for (let j = 0; j < particle.length; j++) {
            if (i != j) {
                gravitationalForce(
                    windowWidth * 0.7 / 2,
                    windowHeight * 0.7 / 2,
                    particle[i],
                    particle[j]
                );
            }
        }
    }

    //partice 101 does not move
    particle[101].acc.mult(0);
    particle[101].vel.mult(0);

    //draw tnis particle as red
    fill(255, 0, 0);
    ellipse((windowWidth-10) /2, (windowHeight-10) /2, 10, 10);
        

    textFont('Monospace');

    //draw the text
    fill(255, 255, 255);
    textSize(20);
    text("Particles", 10, 40);
    textSize(15);
    text("By: @Fabiocufino", 10, 60);
    fill(255, 0, 0);
    text("Click to reset", 10, 80);


    //text on the bottom right
    fill(255, 0, 0);
    textSize(15);
    text("M: " + particle[101].mass, windowWidth - 130, windowHeight - 45);

    fill(255, 255, 255);
    textSize(15);
    text("m: rand(1,5)", windowWidth - 130, windowHeight - 30);
    
}
