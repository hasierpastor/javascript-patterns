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
