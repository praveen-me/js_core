function mainVariables() {
	let grid = document.getElementById('grid');
}

function makeGrid() {
	mainVariables();

	for(let i = 1; i <= 100; i++) {
		let gridItem = document.createElement('div');
		gridItem.classList.add('grid_item');
		grid.appendChild(gridItem);
	}	
	
}

function init() {
	makeGrid();
}

init();