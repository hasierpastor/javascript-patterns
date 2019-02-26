// The Prototype design pattern relies on the JavaScript prototypical inheritance. The prototype model is used mainly for creating objects in performance-intensive situations.

let Dog = function() {
  this.breed = 'Pitbull';
  this.name = 'Leo';
  this.color = 'Black';
};

Dog.prototype = {
  speak: function() {
    // bark
  },
  eat: function() {
    // eat
  }
};

//Prototype inheritance (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain):
// When it comes to inheritance, JavaScript only has one construct: objects.
//Each object has a private property which holds a link to another object called its prototype.
//That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
// By definition, null has no prototype, and acts as the final link in this prototype chain.
// Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain.

//Inheritance in ES5:
function Vehicle(name, type) {
  this.name = name;
  this.type = type;
}

Vehicle.prototype.getName = function getName() {
  return this.name;
};

Vehicle.prototype.getType = function getType() {
  return this.type;
};
function MotorCycle(name) {
  Vehicle.call(this, name, 'motorcycle');
}
MotorCycle.prototype = Object.create(Vehicle.prototype);
MotorCycle.prototype.constructor = MotorCycle;
MotorCycle.parent = Vehicle.prototype;
MotorCycle.prototype.getName = function() {
  return 'It is a motorcycle: ' + this.name;
};
var car = new MotorCycle('Honda');
console.log(car.getName()); // It is a car: Honda
console.log(car.getType()); // motorcycle

//Of course inheritance has been simplified in ES6 by the use of extends

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
class Lion extends Animal {
  constructor(name) {
    super(name, 'lion');
  }

  getName() {
    return 'It is a lion: ' + super.getName();
  }
}

let lion = new Lion('Simba');
console.log(lion.getName()); //It is a lion: Simba
console.log(lion.getType()); //lion
