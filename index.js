const inquirer = require('inquirer');
const { readFile, writeFile } = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes.js');

const { colorChoices } = require('./color.js');

// Destructure the exported classes

//? prompt for 3 charactors that will be the text of the svg
// const chosenTextColor = process.argv[2]
// const chosenShape = process.argv[3]
// const chosenShapeColor = process.argv[4]
const text = process.argv
inquirer
  .prompt([
    {
      type: 'input',
      message: 'text color: ',
      name: 'chosenTextColor',
    },
    {
      type: 'input',
      message: 'shape color: ',
      name: 'chosenShapeColor',
    },
    {
      type: 'input',
      message: 'text: ',
      name: 'chosenText',
    },
    {
      type: 'input',
      message: 'shape (circle, triangle, or square): ',
      name: 'chosenShape',
    },
    
    
  ])
  .then((answers) => {
    console.log('Chosen Text:', answers.chosenText);
    console.log('Chosen Shape Color:', answers.chosenShapeColor);
  let shapeElement;

  switch (answers.chosenShape.toLowerCase()) {
    case 'circle':
      shapeElement = new Circle(answers.chosenText, answers.chosenShapeColor).render();
      break;
    case 'triangle':
      shapeElement = new Triangle(answers.chosenText, answers.chosenShapeColor).render();
      break;
    case 'square':
      shapeElement = new Square(answers.chosenText, answers.chosenShapeColor).render();
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  const svgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.chosenTextColor}">${answers.chosenText}</text>
  </svg>`;

  // write the SVG code to a file named logo.svg
  writeFile('logo.svg', svgCode, (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
})
.catch((error) => {
  console.error('Error:', error);
});

//prompt for text color in the form of keyword or hex
//give op[tions for shape. circle, triangle, or square
//prompt for shapes color
//save svg file named logo.svg and output the text "generated 'logo.svg"

//use jest for unit tests.
//The application must include Triangle, Circle, and Square classes, as 
//well as tests for each of these classes using Jest.


