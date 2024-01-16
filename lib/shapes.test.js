const { Triangle } = require('./shapes.js');

test('Triangle render method', () => {
  const shape = new Triangle('Sample Text', 'blue');
  const expectedSvg = '<polygon points="150,20 230,150 70,150" fill="blue" />';
  
  expect(shape.render()).toEqual(expectedSvg);
  expect(shape.text).toEqual('Sample Text');
});