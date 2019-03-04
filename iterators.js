//Closures: an inner function that has access to variables defined
//in an outer function long after that outer function has returned
//When inner function is returned you attach a backpack of data => persistent lexical scope reference data
//This data is stored in [[scope]]

//Iterators use closure => for of loops

function returnIterator(arr) {
  let i = 0;
  function inner() {
    const element = arr[i];
    i++;
    return element;
  }
  return inner;
}

function nextIterator(arr) {
  let i = 0;
  return {
    next: function() {
      const element = arr[i];
      i++;
      return element;
    }
  };
}

function sumArray(arr) {
  let sum = 0;
  let iterator = nextIterator(arr);
  let next = iterator.next();
  while (next) {
    sum += next;
    next = iterator.next();
  }
  return sum;
}
