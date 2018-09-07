let changeColor = document.querySelector('#background-color');

let colorArray = ['red', 'blue', 'green', 'yellow','grey', 'orange', 'skyblue', 'lime'];

function generateRandomNumber(colorList) {
  return Math.floor( Math.random() *  colorList.length);
}

changeColor.addEventListener('click', () => {
  let colorValue = generateRandomNumber(colorArray);
  changeColor.style.backgroundColor = colorArray[colorValue];
});