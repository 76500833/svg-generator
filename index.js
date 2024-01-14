// prompt for 3 charactors that will be the text of the svg
//prompt for text color in the form of keyword or hex
//give op[tions for shape. circle, triangle, or square
//prompt for shapes color
//save svg file named logo.svg and output the text "generated 'logo.svg"

//use jest for unit tests.
//The application must include Triangle, Circle, and Square classes, as 
//well as tests for each of these classes using Jest.
//While not a requirement, it is recommended that you place any common 
//functionality and properties shared by the Triangle, Circle, and 
//Square classes in a parent Shape class and use inheritance to reuse 
//the code in the child classes.

class Shape {
  constructor (text, color) {
    this.text = text
    this.color = color
  }
}
class triangle extends Shape{
    constructor (text, color){
    super (text, color)
    }
}
class circle extends Shape{
    constructor (text, color){
    super (text, color)
    }
}
class square extends Shape{
    constructor (text, color){
    super (text, color)
    }
}