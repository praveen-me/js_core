function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.walk = function () {
  console.log('walk');
}

function Mammal(name, age, color) {
  Animal.call(this, name, age);
  this.color = color;
}

Mammal.prototype.talk = function() {
  console.log('talk');
}

Mammal.prototype.__proto__ = Animal.prototype; 

let mammal = new Mammal('Pochi', 8, 'black');
