// Output in the right sequence

try {
  console.log('First');
  
  helloFirst;

  console.log('Second'); 

} catch(err) {

  console.log('Third' + err); 

} finally {
  console.log('Fourth'); 
}

console.log('Fifth');

// 'First'
// 'Third' RefernceError 'helloFirst' is not defined
// 'Fourth'
// 'Fifth'


// Output in the right sequence


// try {
//   {
//   console.log('First');
  
//   helloFirst;

//   console.log('Second'); 

// } catch(err) {

//   console.log('Third' + err); 

// } finally {
//   console.log('Fourth'); 
// }

// console.log('Fifth');



//Use the following Data and do the following

var json = {name:"Steve Jobs",job:"Founder"};
// Write a program using try catch
// check if the json object doesn't have a agr property throw an arror saying "Incomplete Data"
// If you have age you can console.log age
// in catch statement console.log error message and name

var json = {name:"Steve Jobs",job:"Founder", age: 42};

// Execute your program using this data

function checkError() {
  if(json.age) {
    console.log(json.age);
  }
  if(json.agr === undefined) {
    throw new SyntaxError("Incomplete Data");
  }
}

try {
  checkError();
} catch (error) {
  console.error(`${error.name} : ${error.message}`);
}
