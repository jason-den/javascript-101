class Polygon {
  constructor() {
    this.name = 'Polygon'
  }
}
const poly1 = new Polygon()
console.log(poly1.name) // expected output: "Polygon"

class Employee {
  constructor(name, age, designation) {
    this.name = name
    this.age = age
    this.designation = designation

    // 1. this one is method as a property
    this.displayName = function () {
      console.log('Name is:', this.name)
    }
  }
  // 2. this one is method in prototype
  getAge() {
    return this.age
  }
}

// example for getter setter

module.exports = { Polygon, Employee }
