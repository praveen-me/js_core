var listItems = document.querySelectorAll('.list-item');

function handleDragStart(e) {
  this.classList.add('dragging');

  dragSrc = this;
  console.log(dragSrc);
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', dragSrc.innerHTML);
}

// function handleDragEnter(e) {
//   this.classList.add('dragover');
// }

function handleDragOver(e) {
  if(e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';
  return false;
}

// function handleDragLeave(e) {
//   this.classList.remove('dragging');
// }

function handleDrop(e) {
  if(e.stopPropagation) {
    e.stopPropagation();
  }

  if(dragSrc != this) {
    // dragToPrevious = this.innerHTML;
    dragSrc.innerHTML = this.innerHTML;
    // dragSrc.innerHTML = dragToPrevious;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDropEnd(e) {
  this.classList.remove('dragover');
  dragSrc.classList.remove('dragging');
}

listItems.forEach(item => {
  item.addEventListener('dragstart', handleDragStart, false);
  // item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  // item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDropEnd, false);
})