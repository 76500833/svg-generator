
class Shape {
  constructor (shape, text, color) {
    this.text = text
    this.color = color
  }
  render () {

  }
}
class Triangle extends Shape{
    constructor (text, color){
    super (text, color)
    }
}
class Circle extends Shape{
    constructor (text, color){
    super (text, color)
    }
}
class Square extends Shape{
    constructor (text, color){
    super (text, color)
    }
}

module.exports = {
  Triangle: Triangle,
  Circle: Circle,
  Square: Square
};
