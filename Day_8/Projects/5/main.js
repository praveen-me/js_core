
var screen = document.querySelector(".window");
var equationArray = [];

document.body.addEventListener('click', e => {
  if(e.target.nodeName === 'BUTTON') {
    if(e.target.textContent === "AC") {
      equationArray = [];
      screen.innerHTML = equationArray;
    } else {
      if(e.target.textContent === 'CE') {
        equationArray.pop();
        screen.innerHTML = equationArray.join('');
      } else {
        if(e.target.textContent === '=') {
          let replaceOperator = equationArray.join('');
          replaceOperator = replaceOperator.replace(/÷/g ,'/');
          replaceOperator.replace(/×/g ,'*');
          screen.innerHTML = eval(replaceOperator);
        } else {
          equationArray.push(e.target.textContent);
          screen.innerHTML = equationArray.join('');
        }
      }
    }
  }
})