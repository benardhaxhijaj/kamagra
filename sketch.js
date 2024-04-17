let a = 3,
  k = 10,
  m = 0.2;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  normalMaterial();
  b =
    ((a * (abs(exp(2 * m * PI)) - 1)) / (exp(2 * m * PI) + 1)) *
    sqrt(1 + k * k);
}

function draw() {
  background(20); // Darker background
  t = frameCount / 200;
  orbitControl();
  shell1();
}

function shell1() {
  let step = 0.3; // Adjust step size for performance
  for (let v = 0; v < 2 * PI; v += step) {
    for (let u = 0; u < 9 * PI; u += step) {
      let x = a + b * cos(v + t) * exp(m * u) * cos(u + t) + 3 * sin(t + u);
      let y = a + b * cos(v + t) * exp(m * u) * sin(u + t / 2) + 3 * sin(t + u);
      let z = (k * a * u) / 1.5 + b * sin(v + t) * exp(m * u) + 30 * sin(t);

      // Color each sphere based on its position
      fill((x + width) % 255, (y + height) % 255, (z + width) % 255);

      push();
      translate(x, z, y);
      sphere(1, 3, 3); // Reduced detail for performance
      pop();
    }
  }
}
