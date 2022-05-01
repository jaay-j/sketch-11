let x = 0;

function setup() {
    createCanvas(1000, 1000);
    background(134, 170, 200);
    noLoop();
}

function draw() {
    push();
    x = x + 0.5;
    if (x > width) {
        x = 0;
    }
    line(x, 0, 100, height);
    pop();

    push();
    x = x + 0.5;
    if (x > width) {
        x = 0;
    }
    line(x, 0, 1000, height);
    pop();

    push();
    noFill();
    strokeWeight(10);
    stroke(255, 204, 0);
    rect(915, 3, 80, 994);
    pop();
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}

function keyPressed(){
    if (key == 's'){
        saveCanvas("sketch-11", "png");
    }
}