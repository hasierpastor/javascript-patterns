//the Singleton pattern instantiation of a class to a single object
//if a instance of that class exists it will just create reference that instance
//provide a single point of access for functions
//uses module pattern to create a series of public/private methods

//code from Learning JavaScript Design Patterns by Addy Osmani
let mySingleton = (function() {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton

    // Private methods and variables
    function privateMethod() {
      console.log('I am private');
    }

    let privateVariable = 'Im also private';

    let privateRandomNumber = Math.random();

    return {
      // Public methods and variables
      publicMethod: function() {
        console.log('The public can see me!');
      },

      publicProperty: 'I am also public',

      getRandomNumber: function() {
        return privateRandomNumber;
      }
    };
  }
  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
})();

//using ES6 JavaScript
class Singleton {
  constructor() {
    //get singleton instance if one exists, otherwise create a new one
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
  //Add properties (public/private) and methods
}

const instance = new Singleton();
//A frozen object can no longer be changed;
//freezing an object prevents new properties from being added to it,
//existing properties from being removed,
//prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed.
// In addition, freezing an object also prevents its prototype from being changed
Object.freeze(instance);
