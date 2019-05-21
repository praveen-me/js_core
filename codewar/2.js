// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// Solution 1
// var moveZeros = function (arr) {
//   // TODO: Program me
//   // 1 - Make a custom array
//   // 2 - loop through the array
//   // 3 - it finds and array just splice it from the string
//   const zeroIndexes = [];

//   for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] === 0 ) {
//       zeroIndexes.push(i);
//     }  
//   }
  
//   let firstDeleted = false;
  
//   for (let i = 0; i < zeroIndexes.length; i++) {
//     if ( firstDeleted ) {
//       arr.splice(zeroIndexes[i] - i, 1);  
//     } else {
//       arr.splice(zeroIndexes[i], 1);
//       firstDeleted = true;
//     }
//     arr.push(0)
//   }
//   return [...arr];
// }

// Solution 2 
const moveZeros = (arr) => {
  return [...arr.filter(x => x !== 0), ...arr.filter(x => x === 0)];
}

moveZeros([1,2,0,1,0,1,0,3,0,1])