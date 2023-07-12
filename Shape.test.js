const Triangle = require('./Triangle');
const Square = require('./square');
const Circle = require('./Circle');

describe('Shape classes', () => {
  test('Triangle render', () => {
    const triangle = new Triangle('red', 100, 100);
    const expectedPattern = /<svg width="100" height="100">\s+<polygon points="0,0 100,0 50,100" fill="red" \/>\s+<\/svg>/;
    expect(triangle.render().trim()).toMatch(expectedPattern);
  });

  test('Square render', () => {
    const square = new Square('blue', 100);
    const expectedPattern = /<svg width="100" height="100">\s+<rect width="100" height="100" fill="blue" \/>\s+<\/svg>/;
    expect(square.render().trim()).toMatch(expectedPattern);
  });

  test('Circle render', () => {
    const circle = new Circle('green', 50);
    const expectedPattern = /<svg width="100" height="100">\s+<circle cx="50" cy="50" r="50" fill="green" \/>\s+<\/svg>/;
    expect(circle.render().trim()).toMatch(expectedPattern);
  });
});
