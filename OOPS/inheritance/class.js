class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log('walk');
  }
}

class Mammal extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;    
  }

  talk() {
    console.log('talk')
  }
}

let mammal = new Mammal('Praveen', 18, 'pata nhi');

console.log(mammal.talk)

