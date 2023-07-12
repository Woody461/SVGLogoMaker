const Shape = require('./Shape');

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  render() {
    return `<svg width="${this.base}" height="${this.height}">
      <polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="${this.color}" />
    </svg>`;
  }
}

module.exports = Triangle;
