import React from 'react'
const _ = require('lodash')
import { Employee } from '../OOP/DemoClass'
import { Button, Divider, Card } from 'antd'
const OOP = () => (
  <Card>
    <Divider>ES5</Divider>
    <Button onClick={case1}>getter, setter</Button>
    <Button onClick={case2}>constructor</Button>
    <Button onClick={case3_add_additional_properties_by_constructor}>add additional properties by constructor</Button>
    <Divider>ES6</Divider>
    <Button onClick={case4}>Declare Methods in Class</Button>
    <Button onClick={case5}>getter, setter</Button>
    <Button onClick={case6_Private_propertie}>Private propertie</Button>
    <Divider>Class</Divider>
    <Button onClick={case7}>Static method</Button>
    <Divider>Prototypal Inheritance </Divider>
    <Button onClick={case10_Prototype_Chain_with_Constructor}>Prototype Chain with Constructor</Button>
    <Button onClick={case11_Prototype_Shadowing}>Prototype Shadowing</Button>
    <Divider>Class-based Inheritance</Divider>
    <Button onClick={class_based_inheritance_in_ES5}>ES5</Button>
    <Button onClick={class_based_inheritance_in_ES6}>ES6</Button>
    <Divider>overriding</Divider>
    <Button onClick={overriding_es5}>ES5</Button>
    <Button onClick={overriding_es6}>ES6</Button>
  </Card>
)

export default OOP

/* cases */
const case1 = () => {
  console.log('====== object getter, setter ========')
  var employee = {
    name: 'Joe',
    age: 28,
    _designation: 'developer',
    set designation(desig) {
      this._designation = desig
    },
    get designation() {
      return this._designation
    },
  }
  console.log('designation originally is:', employee.designation)
  employee.designation = 'engineer'
  console.log('new designation is:', employee.designation)
}

/*
let’s discuss how to create objects using the constructor function.
*/
const case2 = () => {
  function Employee_c2(_name, _age, _designation) {
    this.name = _name
    this.age = _age
    this.designation = _designation
  }
  //creating an object called employeeObj1
  var employeeObj1 = new Employee_c2('Joe', 22, 'Developer')
  var employeeObj2 = new Employee_c2('Amy', 28, 'Engineer')
  console.log({ employeeObj1, employeeObj2 })
}

/*
We learned how to add additional properties in objects in the previous chapter. 
Now, let’s see how new properties can be added to constructor functions. The method to do so is different from that of object literals.
*/
const case3_add_additional_properties_by_constructor = () => {
  // 1 For object literals, we used the following approach to add properties.
  var employee = { name: 'Joe', age: 20 }
  employee.designation = 'Developer'
  console.log('Designation is:', employee.designation) // Designation is: Developer

  // 2 However, doing the same when using constructor functions will give undefined as a result.
  function Employee_c3_1(_name, _age, _designation) {
    this.name = _name
    this.age = _age
    this.designation = _designation
  }
  var employeeObj = new Employee_c3_1('Joe', 22, 'Developer')

  Employee_c3_1.sex = 'male'
  console.log('Sex is:', employeeObj.sex) // Sex is: undefined

  // 3. In order to add properties to constructor functions, the new property needs to be defined inside the constructor function.
  function Employee_c3_2(_name, _age, _designation) {
    this.name = _name
    this.age = _age
    this.designation = _designation
    this.company = '' // empty as default value
  }
}

const case4 = () => {
  const employee = new Employee('Joe', 22, 'Developer')
  console.log(employee)
}

const case5 = () => {
  //creating a class named employee
  class EmployeeDemoForGetterSetter {
    constructor(name, age, designation) {
      this._name = name
      this.age = age
      this.designation = designation
      this.printDesignation = () => console.log(designation)
    }
    get name() {
      return this._name
    }
    set name(val) {
      this._name = val
    }
  }
  //creating an object instance named "employeeObj"
  var employeeObj = new EmployeeDemoForGetterSetter('Joe', 22, 'Developer')
  console.log(employeeObj)
  //displaying the properties of employeeObj
  console.log('Name is:', employeeObj.name)
  console.log('Designation is:', employeeObj.designation)
  console.log('Age is:', employeeObj.age)
  employeeObj.name = 'Ted'
  console.log('Name is:', employeeObj.name)
}

const case6_Private_propertie = () => {
  class Student {
    constructor(name, age, sex, grade) {
      //properties hidden
      var _name = name
      var _age = age
      this._sex = sex
      var _sex = sex
      var _grade = grade

      this.getName = function () {
        return _name
      }
      this.getAge = function () {
        return _age
      }
      this.getSex = function () {
        return _sex
      }
      this.getGrade = function () {
        return _grade
      }
    }
    displayGender() {
      return this._sex
    }
  }
  var student1 = new Student('Kate', 15, 'F', 8)
  console.log('Name:', student1.getName())
  console.log('Age:', student1.getAge())
  console.log('Sex:', student1.getSex())
  console.log('Sex:', student1.displayGender())
  console.log('Grade:', student1.getGrade())
}

const case7 = () => {
  class Student {
    constructor(name, age, sex, marks) {
      this.name = name
      this.age = age
      this.sex = sex
      this.marks = marks
    }
    //defining a static method called "compareMarks"
    //it compares marks of two students
    static compareMarks(s1, s2) {
      const diff = s1.marks - s2.marks
      if (diff == 0) return console.log(`Both students scored ${s1.marks}`)

      return diff > 0
        ? console.log(`${s1.name} scored ${diff} marks more than ${s2.name}`)
        : console.log(`${s2.name} scored ${-1 * diff} marks more than ${s1.name}`)
    }
  }
  //change values of marks of both students to execute different if conditions in the function above
  var student1 = new Student('Kate', 15, 'F', 25)
  console.log("Kate's marks are", student1.marks)
  var student2 = new Student('Joe', 15, 'M', 20)
  console.log("Joe's marks are", student2.marks)
  //calling the static function
  Student.compareMarks(student1, student2)
}

const case8_Practice_Product = () => {
  class Product {
    constructor(name, price, amount, madeIn) {
      let _name = name
      let _price = price
      let _amount = amount
      let _madeIn = madeIn

      this.getName = () => _name
      this.getPrice = () => _price
      this.getAmount = () => _amount
      this.getMadeIn = () => _madeIn

      this.setAmount = (num) => (_amount = num)
      this.canSell = (num) => _amount >= num
      /*
      the method is used to sell num amount of a product. 
      It should return the updated amount of product left after selling. 
      
      If the amount of product available is less than num, it should restock the product by adding twice the amount requested to the previously available amount of product and should return this updated value.

      // sounds like "If the amount of product available is less than num", it doesn't sell after restocking.
      */
      this.sell = (num) => {
        if (this.canSell(num)) {
          const newAmount = _amount - num
          this.setAmount(newAmount)
          return newAmount
        } else {
          const newAmount = num * 2 + _amount // restock the product by adding twice the amount requested to the previously available amount of product
          this.setAmount(newAmount)
          return newAmount
        }
      }
    }
  }
}

const case9_Practice_Product = () => {
  class Product {
    constructor(name, price, amount, madeIn, expiryDate, brand) {
      this.name = name
      this.price = price
      this.amount = amount
      this.madeIn = madeIn
      this.expiryDate = expiryDate
      this.brand = brand
    }
    static checkExpiry(p1, p2) {
      const currentDate = new Date()
      const expired1 = p1.expiryDate < currentDate
      const expired2 = p2.expiryDate < currentDate

      if (expired1 && expired2) return 'Neither'
      if (!expired1 && expired2) return p1.brand
      if (expired1 && !expired2) return p2.brand

      // for those match !expired1 && !expired2

      if (p1.expiryDate.toString() == p2.expiryDate.toString()) return 'Either'
      else if (p1.expiryDate > p2.expiryDate) return p1.brand
      else return p2.brand
    }
  }
}

const case10_Prototype_Chain_with_Constructor = () => {
  function Employee(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  var employeeObj = new Employee('Joe', 20, 'M')
  console.log(employeeObj.__proto__)
  console.log('Name:', employeeObj.name)
  console.log('Age:', employeeObj.age)
  console.log('Sex:', employeeObj.sex)

  Employee.prototype.designation = 'Chef'
  console.log(employeeObj.__proto__)
  console.log('Designation:', employeeObj.designation)
}
const case11_Prototype_Shadowing = () => {
  function Employee(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }
  var employeeObj = new Employee('Joe', 20, 'M')
  console.log(employeeObj.__proto__)
  console.log('Name:', employeeObj.name)
  console.log('Age:', employeeObj.age)
  console.log('Sex:', employeeObj.sex)

  Employee.prototype.age = 30
  console.log(employeeObj.__proto__)
  //accessing "age" from employee1
  //the prototype chain will be start to be traversed
  //first it will search employeeObj
  //the property "age" will be found which will be returned
  //it will not search employeeObj.[[Prototype]]
  //hence the age displayed will be 20 instead of 30
  console.log('Age:', employeeObj.age)
}

// it sucks. quite complected and not so rewarding.
const class_based_inheritance_in_ES5 = () => {
  function Shape(shapeName, shapeSides) {
    this.name = shapeName
    this.sides = shapeSides
  }

  Shape.prototype.equalSides = 'yes'
  // this is typical foo-bar example. The meaning is lost,
  // only boring and unfriendly syntax left.
  console.log(Shape.prototype)

  function Rectangle(shapeName, shapeSides, length, width) {
    // call function invoked to inherit and initialize the properites of Shape for Rectangle
    // commonly done by `super` in other languages
    Shape.call(this, shapeName, shapeSides)

    //properties of rectangle
    this.length = length
    this.width = width
  }

  //Setting Shape object to be the prototype of Rectangle
  //so Rectangle can inherit Shape prototype properties
  //through the new object created
  Rectangle.prototype = Object.create(Shape.prototype)
  //setting Rectangle's prototype constructor so that it points to itself ?
  Rectangle.prototype.constructor = Rectangle
  Rectangle.prototype.getArea = function () {
    return this.length * this.width
  }
  //displaying Rectangle.prototype
  //it will show getArea that is defined on its prototype
  //and constructor function pointing to Rectangle itself
  console.log(Rectangle.prototype)
  var obj = new Rectangle('Rectangle', 4, 3, 5)

  //displaying properties
  console.log('Name:', obj.name)
  console.log('Sides:', obj.sides)
  console.log('All sides are equal:', obj.equalSides)
  console.log('Length:', obj.length)
  console.log('Width', obj.width)
  console.log('Area:', obj.getArea())
}
// this feels quite the same as Java
const class_based_inheritance_in_ES6 = () => {
  class Shape {
    constructor(shapeName, shapeSides) {
      this.name = shapeName
      this.sides = shapeSides
    }
  }
  class Rectangle extends Shape {
    constructor(length, width) {
      super('Rectangle', 4)
      this.length = length
      this.width = width
    }
    getArea() {
      return this.length * this.width
    }
  }
  var rec = new Rectangle(3, 5)
  console.log(rec)
}

// this is effectively prototype chain shadowing
const overriding_es5 = () => {
  function Shape(shapeName, shapeSides) {
    this.name = shapeName
    this.sides = shapeSides
  }
  Shape.prototype.displayInfo = function () {
    console.log(`Shape is ${this.name}`)
  }
  Shape.prototype.equalSides = 'no'

  function Rectangle(shapeName, shapeSides, shapeLength, shapeWidth) {
    Shape.call(this, shapeName, shapeSides)
    this.length = shapeLength
    this.width = shapeWidth
  }

  Rectangle.prototype = Object.create(Shape.prototype)
  Rectangle.prototype.constructor = Rectangle

  //overriding the value of "equalsides" property
  Rectangle.prototype.equalSides = 'yes'
  console.log(Rectangle.prototype.equalSides)

  //overriding the displayInfo method
  Rectangle.prototype.displayInfo = function () {
    return this.sides
  }
  var rec = new Rectangle('Rectangle', 4, 3, 5)
  //shows sides instead of name
  console.log(rec.displayInfo())
}
const overriding_es6 = () => {
  class Shape {
    constructor(shapeName, shapeSides) {
      this.name = shapeName
      this.sides = shapeSides
    }
    getArea() {
      return 0
    }
  }

  class Rectangle extends Shape {
    constructor(shapeName, shapeSides, shapeLength, shapeWidth) {
      super(shapeName, shapeSides)
      this.length = shapeLength
      this.width = shapeWidth
    }
    //method calculating the area of rectangle
    calculateArea() {
      console.log('Area:', this.length * this.width)
    }
    //overriding the getArea() method from parent class
    getArea() {
      // On overriding, if we don't call super's method, we might skip some important behaviour.
      super.getArea()
      //calculateArea called
      this.calculateArea()
    }
  }

  var rec = new Rectangle('Rectangle', 4, 3, 5)
  console.log('Name:', rec.name)
  console.log('Sides:', rec.sides)
  console.log('Length', rec.length)
  console.log('Width', rec.width)
  rec.getArea()
}

const demo_mixin = () => {
  //creating a mixin
  var mixin = {
    getName() {
      console.log(`Name is ${this.name}`)
    },
    getSides() {
      console.log(`Sides are ${this.sides}`)
    },
  }

  //creating a class Shape
  class Shape {
    constructor(shapeName, shapeSides) {
      this.name = shapeName
      this.sides = shapeSides
    }
  }

  //setting mixin to be the prototype of Shape
  Shape.prototype = mixin
  //setting constructor of prototype equal to Shape
  Shape.prototype.constructor = Shape

  //creating a new Shape
  var rectangle = new Shape('Rectangle', 4)
  rectangle.getName()
  rectangle.getSides()
}
