//Very similar concept as modules but not wrapped in an IIFE
//Benefits vs classes:
//no refactoring worries
//don't have to worry about 'new' and 'this'
//easy to compose/inherit

//It can perform slower if using a lot of objects - also more memory use

const dog = () => {
  const speak = 'woof';
  return {
    talk: () => console.log(speak)
  };
};
