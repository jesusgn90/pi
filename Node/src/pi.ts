/*
 * Approximate the number pi using polygons
 *
 * Procedure:
 * Sweep the first quarter of the circumference.
 * Iterate over Y axis and calculate the corresponding X using the Pythagorean theorem.
 * Calculate and accumulate the distance between the current point and the previous point.
 *
 * circumference = quarter * 4
 * pi = circumference / diameter
 *
 * Jesús Ángel González Novez
 * Dec 11, 2018
 */
const DEF_DIAMETER: number = 100000;
export class Pi {
  _diameter: number;
  constructor(d: number = DEF_DIAMETER) {
    this._diameter = d;
  }

  get diameter(): number {
    return this._diameter;
  }

  set diameter(d: number) {
    this._diameter = d;
  }

  distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }

  leg(l: number, h: number): number {
    return Math.sqrt(h * h - l * l);
  }

  calculatePi(): number {
    const radius: number = this.diameter / 2;
    let quarter: number = 0;
    let x: number;
    let y: number = 1;
    let prev_x: number = radius;
    let prev_y: number = 0;

    // First point: (radius, 0)
    // Sweep first quarter

    while (y <= radius) {
      x = this.leg(y, radius);
      quarter += this.distance(x, y, prev_x, prev_y);
      prev_x = x;
      prev_y = y++;
    }

    // pi = circumference / diameter
    return (quarter * 2) / radius;
  }

  help(): void {
    console.log(`Usage: node ./dist/index.js [ diameter ]`);
    console.log(
      `    diameter    Diameter of the circumference. Default: ${DEF_DIAMETER}`
    );
    console.log('The larger the diameter, the better the accuracy.');
  }
}


