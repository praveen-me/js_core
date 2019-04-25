
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
    const array1 = [names[0], names[1]]
    
    if(names.length === 0) {
        return "no one likes this"
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if(names.length <= 3) {
        return `${names.length === 2 ? array1.join(' and ') : array1.join(', ') } ${names.length === 2 ? '' : `and ${names[names.length - 1]} `}like this`;
    } else if(names.length >= 4) {
    console.log(names.length)
        return `${array1.join(', ')} and ${names.length - 2} others like this`;
    }
}