function setup() {
  createCanvas(windowWidth, windowHeight);
}

let angle = 0;

function draw() {
  background(0);
  translate(width / 2, height / 2); // this makes the center of the canvas (0,0)
  rectMode(CENTER);

  let offset = 0;

  for (let x = 0; x < width; x += 50) {
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 100);
    fill(255);
    rect(x - width / 2, 0, 9, h);

    offset += 0.1;
  }

  angle += 0.1;
}
