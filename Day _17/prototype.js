//2. Create the constructor function for a Video object. The function should take in arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.
function Video(title, uploader, seconds) {
  this.title = title;
  this.uploader = uploader;
  this.seconds = seconds;
}

//Create a method on the Video object called watch(). When that method is called, it should use console.log to output a string like "You watched all 60 seconds of Otters Holding Hands!"
Video.prototype.watch = function() {
  console.log(`You watched all ${this.seconds} seconds of ${this.title}!`);
}

//Instantiate a new Video object and call the watch() method on it.
const video1 = new Video("Otters Holding Hands", "Jordan", 80);
video1.watch(); 

//Instantiate another Video object with different constructor arguments.
const video2 = new Video("Otters Holding", "Jack", 90);

//Use an array of data and a for loop to instantiate 5 Video objects.
let videoarr = [
  ["Lysistrata", "Aristophenes", 55],
  ["Electra", "Sophocles", 70],
  ["Cyclops", "Euripides", 80],
  ["Agamemnon", "Aeschylus", 85],
  ["Uncle Vanya", "Anton Chekhov", 90]
]
for(let i = 0; i < videoarr.length; i++) {
  let vid = new Video(`${videoarr[i][0]}`, `${videoarr[i][1]}`, `${videoarr[i][3]}`);
}


//Make the watch method accept amounts of seconds to watch for, and call it with different amounts of seconds.



//Define a new class called MusicVideo that extends Video. Its constructor should also take in an artist argument.


//Instantiate a new MusicVideo object and call the watch() method on it.


//Add a method to MusicVideo called rockOut() that uses console.log to output a string like "You rocked out to La Bamba by Ritchie Valens!.


//Use an array of data and a for loop to instantiate 5 MusicVideo objects.


//Make an array of video data with both normal videos and music videos, loop through them, and decide on each one whether to make it a Video or MusicVideo object.


//Comment out the MusicVideo code, as you'll be working on changing Video first.

//Change the Video constructor function to accept a single object literal argument instead of multiple arguments.


//Create a new Video object and call watch() on it.


//Make the arguments optional by giving them default values if they're not specified.


//Change the MusicVideo constructor function to also accept a single object literal argument instead of multiple arguments. Test it by calling it at least once.



//make sure that if the object literal is missing some values, that default values are used instead of undefined
