function receivesAFunction(callBack) {
    callBack();
    return "{ Spy }";
}

function returnsANamedFunction() {
    return function namedFunction() {
        const myFunction = returnsANamedFunction();
        myFunction();
    }
}

function returnsAnAnonymousFunction() {
    return function() {
      return ''; 
    }
  }