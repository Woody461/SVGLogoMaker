class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error("The render() method must be implemented by the child class.");
    }
  }
  
  module.exports = Shape;
  