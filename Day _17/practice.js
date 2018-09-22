// 1. Make a function in the Array.prototype called suffle that suffles the given array
// eg: [1,3,6,7,9] => [3,7,6,1,9]


Array.prototype.shuffle = function() {
  let currenIndex = this.length, randomIndex, temporaryValue;
  while(currenIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currenIndex);
    currenIndex--;
    temporaryValue = this[currenIndex];
    this[currenIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}
let arr = [1,2,3,4];
console.log(arr.shuffle());
