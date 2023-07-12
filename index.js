const fs = require('fs');
const SVGDOM = require('svgdom');
const { SVG, registerWindow } = require('@svgdotjs/svg.js');

// Create an SVG document using svgdom
const window = SVGDOM.createSVGWindow();
const document = window.document;
registerWindow(window, document);
const canvas = SVG(document.documentElement);

// Generate the logo
function generateLogo(text, textColor, shape, shapeColor) {
  const svg = canvas.size(300, 200); // Set the size of the SVG canvas

  // Draw the shape
  let shapeElement;
  if (shape === 'circle') {
    shapeElement = svg.circle(100).move(100, 50);
  } else if (shape === 'triangle') {
    shapeElement = svg.polygon('0,100 50,0 100,100');
  } else if (shape === 'square') {
    shapeElement = svg.rect(100, 100);
  }

  // Apply the shape color
  shapeElement.fill(shapeColor);

  // Add the text
  svg.text(text).fill(textColor).move(100, 125).font({ size: 48 });

  return svg.svg(); // Return the SVG document as a string
}

// Get user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the text (up to three characters): ', (text) => {
  readline.question('Enter the text color (keyword or hexadecimal number): ', (textColor) => {
    readline.question('Choose a shape (circle, triangle, square): ', (shape) => {
      readline.question('Enter the shape color (keyword or hexadecimal number): ', (shapeColor) => {
        // Generate the logo
        const logo = generateLogo(text, textColor, shape, shapeColor);

        // Save the logo as an SVG file
        fs.writeFileSync('logo.svg', logo);

        console.log('Generated logo.svg');

        readline.close();
      });
    });
  });
});