// Define a constructor function called Person which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

function Person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}


// Define a function name calculateAge which returns the age of the person
Person.prototype.calculateAge = function(){
  let now = new Date().getFullYear();
  let age = now - this.yearOfBirth;
  return age;
}


// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')
let person = new Person('John', 1990, 'teacher');
let person1 = new Person('Jack', 1992, 'coder');
let person2 = new Person('Andrew', 1993, 'designer');


// call the calculateAge function on each object
console.log(person.calculateAge());
console.log(person1.calculateAge());
console.log(person2.calculateAge());

