// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const addTwoNumbers = (a,b)=>{
  return function(){
  let initial = a + b;
  console.log(initial)
  }
}
const newAddTwoNumbers  = addTwoNumbers (3,4);
newAddTwoNumbers ();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let initial = 0;
  return function() {
    initial += 1;
    console.log(initial);
  };
};
// Example usage: const newCounter = counter();

const newCounter = counter();
newCounter();
newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const counterFactory = () => {
  let initial = 0;
  const factoryObj = {
    increment: function() {
      initial += 1;
      console.log(initial);
    },
    decrement: function() {
      initial -= 1;
      console.log(initial);
    }
  };
  return factoryObj;
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const newCounterFactory = counterFactory();




