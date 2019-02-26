//Adaption of module pattern created by Christian Heilmann
//Using the revealing module patter yuo define all functions and variables in the private scope and return an anonymous public object with pointers to the private functionality you wish to reveal as public.

//Adapt unique id to the revealing module pattern:

let uniqueId = (function() {
  let id = 0;

  //   let private = function() {
  //     ...
  // };

  let incrementId = function() {
    return ++id;
  };
  let resetId = function() {
    console.log(`id val before resetting: ${id}`);
    id = 0;
  };
  return {
    incrementId,
    resetId
  };
})();

console.log(uniqueId.incrementId());
console.log(uniqueId.incrementId());
console.log(uniqueId.resetId());
