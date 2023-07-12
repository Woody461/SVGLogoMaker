const Shape = require('./Shape');

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }

  render() {
    return `<svg width="${this.sideLength}" height="${this.sideLength}">
      <rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = Square;
