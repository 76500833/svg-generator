
class Shape {
  constructor (shape, text, color) {
    this.text = text
    this.color = color
  }
  render (color) {

  }
}
class Triangle extends Shape{
    constructor (text, color){
    super (text, color)
    }
    rendor() {
    return `<polygon points="150,20 230,150 70,150" fill="${this.color}" />`
    }
}
class Circle extends Shape{
    constructor (text, color){
    super (text, color)
    }
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}
}
class Square extends Shape{
    constructor (text, color){
    super (text, color)
    }
    render() {
      return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
}
}

module.exports = {
  Triangle: Triangle,
  Circle: Circle,
  Square: Square
};
