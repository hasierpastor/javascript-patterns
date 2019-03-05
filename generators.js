//a generator return object with method nex
//the keyword automatically exits you out of function

//async await from scratch:

function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  //yield gets you out of function and allows you to carry on with other code
  //this is what the await keyword does
  const data = yield fetch('url');
  console.log(data);
}

const returnNextElement = createFlow();
//response from fetch will be assigned to futureData
//fetch returns a promise object
const futureData = returnNextElement.next();
//data inside generator will now be assigned to futureValue
futureData.then(doWhenDataReceived);
