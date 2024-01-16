const { Triangle } = require('./shapes.js');

test('Triangle render method', () => {
  const shape = new Triangle('Sample Text', 'blue');
  const expectedSvg = '<polygon points="150,20 230,150 70,150" fill="blue" />';
  
  expect(shape.render()).toEqual(expectedSvg);
  expect(shape.text).toEqual('Sample Text');
});

const { Square } = require('./shapes.js');

test('Square render method', () => {
  const shape = new Square('Sample Text', 'purple');
  const expectedSvg = '<rect x="70" y="20" width="160" height="160" fill="purple" />';
  
  expect(shape.render()).toEqual(expectedSvg);
  expect(shape.text).toEqual('Sample Text');
});

const { Circle } = require('./shapes.js');

test('Circle render method', () => {
  const shape = new Circle('Sample Text', 'red');
  const expectedSvg = '<circle cx="150" cy="100" r="80" fill="red" />';
  
  expect(shape.render()).toEqual(expectedSvg);
  expect(shape.text).toEqual('Sample Text');
});

