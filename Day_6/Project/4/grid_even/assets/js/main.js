document.addEventListener("DOMContentLoaded", function() {
	function makeGrid() {
		let grid = document.getElementById('grid');
		let rows = 10;
		let columns = 10;
	
			for(let i = 1; i <= rows; i++) {
				let row = document.createElement('div');
				row.classList.add('row');

				if(i % 2 === 1) {
						row.classList.add('row_odd');
				} else {
						row.classList.add('row_even');
				}
	
				for(let j = 1; j <= columns; j++) {
					let column = document.createElement('div');
					column.classList.add('grid_item');
					row.appendChild(column);

						if(row.getAttribute('class') === 'row row_odd') {
							if(j % 2 === 1) {
									column.classList.add('active');
							} else {
									column.classList.add('not_active');
							}
						} else if(row.getAttribute('class') === 'row row_even'){
							if(j % 2 === 1) {
									column.classList.add('not_active');
							} else {
									column.classList.add('active'); 
							}
						}
					}
					grid.appendChild(row);
			}	
	}

	// Changing color evenly
	function evenlyHide() {
		let columnItems = document.querySelectorAll('.grid_item');
		
		// Check the particular item and them add and remove class
		columnItems.forEach(function(item) {
			if(item.classList.contains('active')) {
			
				item.classList.remove('active');
				item.classList.add('not_active');	
			} else {
	
				item.classList.remove('not_active');
				item.classList.add('active');
			}
		});

	}
	
	// Initializing Function
	function init() {
		makeGrid();
		setInterval(evenlyHide, 500);
	}
	
	init();
});