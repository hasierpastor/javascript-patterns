//decorators promote code reuse
//decorators allows us to dynamically add functionality and behavior to a class
//decorators extend functionality without using prototype inheritance

function Car() {
  this.cost = function() {
    return 20000;
  };
  this.make = function() {
    return 'Kia';
  };
}

function Insurance(car) {
  let costToAdd = car.cost();
  car.cost = function() {
    return costToAdd + 5000;
  };
}

function Paint(car) {
  let costToAdd = car.cost();
  car.cost = function() {
    return costToAdd + 1000;
  };
}

let newCar = new Car();
Insurance(newCar);
Paint(newCar);

console.log(newCar.cost());
console.log(newCar.make());
