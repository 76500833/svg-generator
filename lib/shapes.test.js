const { Triangle, Square, Circle } = require('./shapes.js');

//? create a function with parameters of the shape class, its color, and the expectation
const testShapeRender = (ShapeClass, fillColor, expectedSvg) => {
  test(`${ShapeClass.name} render method`, () => {
    const shape = new ShapeClass('Sample Text', fillColor);
  
    expect(shape.render()).toEqual(expectedSvg);
    expect(shape.text).toEqual('Sample Text');
  });
};

// Triangle
//? test triangle, given a color. and an expectation
testShapeRender(Triangle, 'blue', '<polygon points="150,20 230,150 70,150" fill="blue" />');

// Square
testShapeRender(Square, 'purple', '<rect x="70" y="20" width="160" height="160" fill="purple" />');

// Circle
testShapeRender(Circle, 'red', '<circle cx="150" cy="100" r="80" fill="red" />');

//! credit to chat gpt for the cleannes of this code. my previous code worked but this is prettier.