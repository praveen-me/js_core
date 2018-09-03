/* *********************************    Arrays inside objects      ********************************* */

let myPenguin = {
	name : 'Whiteblack',
	origin : 'Whiteblack the Penguin Sees the World',
	author : ['H. A. Rey', 'Margret Rey']	
}


// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.
myPenguin.favouriteFoods = ['apple', 'banana', 'orange'];

// 2. Access your penguin's second favorite food and print it to the console using console.log()
console.log(myPenguin.favouriteFoods[1]);

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.
let firstFavFood = myPenguin.favouriteFoods[0];

// 4. Add another food to the end of the list.
myPenguin.favouriteFoods.push('bread');

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()
console.log('\n'+myPenguin.favouriteFoods.length);


// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).
myPenguin.favouriteFoods[myPenguin.favouriteFoods.length - 1] = 'pineapples';

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list. (Hint: this is essentially the same problem as step 18 from above.)
let lastFavFood = myPenguin.favouriteFoods.length - 1;

//8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)
console.log('\nList of Fav Foods')
for(let favFood of myPenguin.favouriteFoods) {
    console.log(favFood);
}