// Practice for scope and closure
// Write 'global' or 'local' infront of the line based on scope.

// const dob = 2001; 'global'
// const countAge = (name) => { 'global'
//   const x = 2018; 'local'
//   return x - dob; 'local'
// } 'global'
// var name = true; 'global'


//What's the output?

const x = 100;
const countValue = (num) => {
  const x = 10;
  return num * x;
}

console.log(x); //1000



// Output of the following
let a = 100;

const changer = () => {
  a++;
}

console.log(a); //100
changer();
console.log(a); //101


// Output

let a = 5;
let b = 10;

const sum = () => {
  let a = 100;
  return a + b;
}

sum(); //110

// Output

const makeBook = () => {
  const name = "The perks of being a wallflower.";

  const printName = () => {
    console.log(name);
  }

  return printName;
}

const myBook = makeBook();
myBook(); // "The perks of being a wallflower."

// Output
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter1 = makeCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter1()); 
console.log(counter1());  

