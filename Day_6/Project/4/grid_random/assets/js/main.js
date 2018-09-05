let grid = document.getElementById('grid');
let rows = 10;
let columns = 10;

let arr = [];                                                  
// Function for shuffling array 
function shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }

    return array;
}

// Function for making grid
function makeGrid() {
    for(let i = 1; i <= rows; i++) {
        for(let j = 1; j <= columns; j++) {
            let gridItem = '';

            if(j % 2 === 1) {
                gridItem = `<div class="grid_item active"></div>`;
            } else {
                gridItem = `<div class="grid_item not_active"></div>`;   
            }

            arr.push(gridItem);
        }
    }
}

// Randomize the grid
function randomizeGrid() {
    grid.innerHTML = '';
    shuffle(arr);
    grid.innerHTML = arr.join('');
}

// Intializing function
function init() {
    makeGrid();
    setInterval(randomizeGrid, 500);
}

init();