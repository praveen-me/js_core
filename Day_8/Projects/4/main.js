let playSound = function(e) {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if(!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');
}

let keys = document.querySelectorAll('.key');

let removeTransition = function(e) {
  if(!e.propertyName === 'transform') return;

  this.classList.remove('playing');
}

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
})

window.addEventListener('keydown', playSound);