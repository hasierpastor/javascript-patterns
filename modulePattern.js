//The Module pattern encapsulates “privacy” state and organization using closures.
//It provides a way of wrapping a mix of public and private methods and variables, protecting pieces from leaking into the global scope and accidentally colliding with another developer’s interface.
//With this pattern, only a public API is returned, keeping everything else within the closure private.
//Module pattern imitates the functionality of a class, including private/public methods, and variables inside an object, shielding them from the global scope.
//Very similar to an immediately-invoked functional expression, except that an object is returned rather than a function.
//Used to separate logic and concerns.

//Definition from Learning JavaScript Design Patterns by Addy Osmani - Published by O'Reilly Media, Inc., 2012

let uniqueId = (function() {
  //private variable
  let id = 0;
  //could add a private method here

  //return an object exposed to the public
  return {
    //public method to increment id
    incrementId: function() {
      return ++id;
    },
    //public method to reset id
    resetId: function() {
      console.log(`id val before resetting: ${id}`);
      id = 0;
    }
  };
})();

console.log(uniqueId.incrementId());
console.log(uniqueId.incrementId());
console.log(uniqueId.resetId());

let boardGameCollection = (function() {
  let boardGames = [];

  return {
    addBoardGame: function(boardGame) {
      boardGames.push(boardGame);
      return 'Board game added';
    },
    numOfBoardGames: function() {
      return boardGames.length;
    }
  };
})();

console.log(
  boardGameCollection.addBoardGame({
    name: 'Near And Far',
    designer: 'Ryan Laukat'
  })
);

console.log(
  boardGameCollection.addBoardGame({
    name: 'Brass Birmingham',
    designer: 'Martin Wallace'
  })
);

console.log(boardGameCollection.numOfBoardGames()); //2

console.log(boardGames); //should return reference error cause it does not exist in our returned public object
