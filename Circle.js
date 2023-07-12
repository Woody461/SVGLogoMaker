const Shape = require('./Shape');

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  render() {
    return `<svg width="${2 * this.radius}" height="${2 * this.radius}">
      <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = Circle;
