//Functions

//What is a function declaration?
//R= A function declaration is a function that is bound to an identifier or name.
function sumD(a, b) {
  return a + b;
}

//What is a function expression?
//R= A function expression is similar to and has the same syntax as a function declaration.
//But is when you store the function in a variable. (anonymous function)
const sum = function(a, b) {
  return a + b;
}
sum(1, 2); // 3

//What are First-class functions?
//R= First-class functions are functions that can be assigned to variables,
// passed as arguments, and returned from other functions.
function sumF(fn) {
  return fn(1, 2);
}
sumF(sum); // 3


//What is IIFE (Immediately Invoked Function Expression)?
//R= An IIFE is a JavaScript function that runs as soon as it is defined.
(function() {
  console.log('Hello World');
})();

//What is closure?
//R= A closure is the combination of a function bundled together
// (enclosed) with references to its surrounding state
// (the lexical environment).
//In summary, a closure gives you access to an outer function’s scope
(function(a, b) {
  return (function (c,d) {
    console.log(a+b+c+d);
  })(3,4)
})(1, 2);

//What is a function scope?
//R= A function scope is a scope created by a function.
// It is a local scope that is only accessible within the function.
function scope() {
  var a = 1;
  console.log(a);
}
scope(); // 1

//Function hoisting
//R= Function hoisting is a JavaScript mechanism where functions
// and variable declarations are moved to the top of their containing scope.
hoisted(); // 'foo'
function hoisted() {
  console.log('foo');
}

console.log(x); // undefined
var x = 1;
console.log(x); // 1

//Params vs Args
//R= Parameters are variables in a function definition.
// Arguments are the actual values passed to the function.
function params(a, b) { // parameters
  console.log(a, b);
}
params(1, 2); // 1 2 (arguments)

//Rest parameters
//R= The rest parameter syntax allows a function to accept
// an indefinite number of arguments as an array. (rest must be the last parameter)
//Spread operator in other hand is used to expand an array.
function rest(...args) {
  console.log(args);
}
const spread = [1, 2, 3];
rest(...spread); // [1, 2, 3] (spread)

function restLast(a, ...args) {
  console.log(a, args);
}
restLast(1, 2, 3, 4); // 1 [2, 3, 4]

// what is a callback function?
//R= A callback function is a function that is passed to another function
// as an argument and is executed after some operation has been completed.
function callback(fn) {
  fn();
}
callback(function() {
  console.log('Hello World');
});

//What are arrow functions?
//R= Arrow functions are a more concise way to write function expressions.
//(sugar syntax)
//The difference is that arrow functions do not have their own this.
//They are not well suited for defining object methods.
//They don't have hoisting.
const arrow = (a, b) => a + b;
console.log(arrow(1, 2)); // 3

//Ways to define a function
//R= Function declaration, function expression, arrow function, IIFE, and method.

//What it means This keyword?
//R= The this keyword refers to the object it belongs to.
// It has different values depending on where it is used.
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.

//Lexical scope
//R= Lexical scope is a convention used in programming languages
// in which the scope of a variable is defined by its position in the source code.
// Lexical scope is also known as static scope.

//What is a higher-order function?
//R= A higher-order function is a function that takes another function as an argument,
// or returns a function. (callback functions)
function higher(fn) {
  return fn;
}
const callback = function() {
  console.log('Hello World');
}
higher(callback)(); // 'Hello World'

//What is a pure function?
//R= A pure function is a function where the return value is determined
// by its input values, without observable side effects.
// This is how functions should operate in JavaScript.
function pure(a, b) {
  return a + b;
}
console.log(pure(1, 2)); // 3

//What is a clousure scope chain?
//R= A closure is the combination of a function bundled together
// (enclosed) with references to its surrounding state
// (the lexical environment).
// In other words, a closure gives you access to an outer function’s scope
function closure(a) {
  return function(b) {
    return a + b;
  }
}
const inner = closure(1)(2);
console.log(inner); // 3

// What will be logged to the console?
let count = 0;
(function printCount(){
  if(count === 0){
    let count = 1; //shadowing, because it's a new variable in the block scope
    console.log(count); // 1
  }
  console.log(count); // 0
})()
//R= 1, 0

//Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
function createBase(base) { //base is equals to 6
  return function(num) { //num is equals to 10 or 21
    return base + num; //6 + 10 = 16 | 6 + 21 = 27
  }
}

// Time optimization with closures
//R= Closures can be used to optimize time complexity by storing the results of expensive operations.
function heavyOperation() {
  let result;
  return function() {
    if(result) return result;
    result = 'expensive operation';
    return result;
  }
}
const optimized = heavyOperation();

//Settimeout with closures
//R= Closures can be used to store the state of a function.
// This is useful when working with asynchronous code.
function delay(message) {
  for (let i = 0; i < 5; i++) { //with var i will be 5 in all the setTimeouts, because var is hoisted
    setTimeout(function() {
      console.log(message, i); // 'Hello World', 0-4 (5 times)
    }, i * 1000)
  }
}
delay('Hello World');

//Same but using var and fix the issue
function delay(message) {
  for (var i = 0; i < 5; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(message, i); // 'Hello World', 0-4 (5 times)
      }, i * 1000)
    })(i)
  }
}

//How to use clouse to create private counter in JavaScript?
//R= Closures can be used to create private variables.
// This is useful for creating encapsulated modules.
function counter() {
  var _counter = 0;
   function add() {
     _counter += 1;
     return _counter;
   }

   function remove() {
     _counter -= 1;
     return _counter;
   }
    return {
     add,
      remove
    };

}

const count = counter();
console.log(count.add()); // 1
console.log(count.add()); // 2
console.log(count.remove()); // 1


//What is module pattern?
//R= The module pattern is a design pattern used to create
// encapsulated modules with private and public methods.
// It is useful for creating self-contained objects with private variables.
var Module = (function() {
  var private = 'private';
  function privateMethod() {
    console.log(private);
  }
  return {
    publicMethod: function() {
      privateMethod();
    }
  }
})();
Module.publicMethod(); // 'private'
Module.private; // undefined

//How to call only one time a function?
//R= Closures can be used to create functions that are only called once.
// This is useful for initialization functions.
function once(fn) {
  let called = false;
  return function() {
    if(called) return;
    called = true;
    return fn();
  }
}
const init = once(function() {
  console.log('initialized');
});
init(); // 'initialized'
init(); // undefined


//Currying
//What is currying?
//R= Currying is the process of converting a function that takes multiple arguments
// into a sequence of functions that each take a single argument.
// Currying is useful for creating higher-order functions.
function curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    }
  }
}
const curried = curry(function(a, b) {
  return a + b;
});
console.log(curried(1)(2)); // 3

//Why we should use currying?
//R= Currying is useful for creating higher-order functions.
// It allows you to create reusable functions with partial application.
// This is useful for creating functions that can be used in multiple contexts.
const currySum = (a) => {
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}
console.log(currySum(1)(2)(3)) //6

function evaluate(operation){
  return function(a){
    return function(b){
      if(operation === 'sum')
        return a+b;
      if(operation === 'sub')
        return a-b;
      if(operation === 'mul')
        return a*b;
      if(operation === 'div')
        return a/b;
    }
  }
}
console.log(evaluate('sum')(1)(2)) //3
console.log(evaluate('sub')(1)(2)) //-1
console.log(evaluate('mul')(1)(2)) //2
console.log(evaluate('div')(1)(2)) //0.5


//Infinite currying
//R= Currying can be used to create functions that take an indefinite number of arguments.
// This is useful for creating flexible functions.
function infiniteCurry(fn) {
  return function curried(...args) {
    if(args.length === 0) return fn;
    return curried.bind(null, ...args);
  }
}
const sum = infiniteCurry(function(a, b) {
  return a + b;
});
console.log(sum(1)(2)()); // 3
console.log(sum(1)(2)(3)()); // 6

//Partial application
//R= Partial application is the process of fixing a number of arguments to a function,
// producing another function of smaller arity.
// This is useful for creating reusable functions with default arguments.
function partial(fn, ...args) {
  return function(...newArgs) {
    return fn(...args, ...newArgs);
  }
}
function sum(a, b, c) {
  return a + b + c;
}
const partialSum = partial(sum, 1, 2);
console.log(partialSum(3)); // 6

//Compose
//R= Compose is a higher-order function that takes two functions as arguments
// and returns a new function that combines them.
// This is useful for creating reusable functions with multiple operations.
function compose(fn1, fn2) {
  return function(a) {
    return fn1(fn2(a));
  }
}
function double(a) {
  return a * 2;
}
function square(a) {
  return a * a;
}
const composed = compose(double, square);
console.log(composed(2)); // 8

