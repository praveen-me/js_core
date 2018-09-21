let user = {
  firstName : "John",
  lastName : "Snow",
  // get fullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // },
  // set fullName(value) {
  //   let name = value.split(' ');
  //   this.firstName = name[0];
  //   this.lastName = name [1];
  // }
}

Object.defineProperty(user, 'fullname', {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    let name = value.split(' ');
    this.firstName = name[0];
    this.lastName = name [1];
  }
});

user.fullName = "Jon Haz";

console.log(user.fullName); 


// <-----------------Symbol.iterator----------------->

let range = {
  from : 1, 
  to : 5,
  // // call for...of initally calls this
  // [Symbol.iterator]() {
  //   // 2. it returns the itertor
  //   return {
  //     current : this.from,
  //     last : this.to,

  //     // call the next method to the object
  //     next() {
  //       if(this.current <= this.last) {
  //         return {done : false , value : this.current++};
  //       } else {
  //         return {done : true, value : undefined};
  //       }
  //     }
  //   }
  // }
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {
    if(this.current <= this.to) {
      return {done : false , value : this.current++};
    } else {
      return {done : true, value : undefined};
    }
  }
}

for(let num of range) {
  console.log(num);
}

// Iterate a count 
let count = {
  from : 1,
  to : 10,
  [Symbol.iterator]() {
    return {
      current : this.from,
      last : this.to,
      next() {
        if(this.current <= this.last) {
          return {done : false , value : this.current++};
        } else {
          return {done : true, value : undefined};
        }
      }
    }
  }
}

for(let num of count) {
  console.log(num);
}

let arr2 = Array.from(count, n => n * n);
console.log(arr2);

// Iterate Array
let arr = [1,2,3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Iterate String

let str = "Praveen";
let iterate = str[Symbol.iterator]();

while(true) {
  let result = iterate.next();
  if(result.done) break;
  console.log(result.value);
}
