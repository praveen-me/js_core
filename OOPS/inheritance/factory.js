let animalFunction = {
  walk : function() {
    console.log('walk')
  }
}

function animalFactory(name, age) {
  let obj = Object.create(animalFunction);
  obj.name = name;
  obj.age = age;
  return obj;
}

let mammalFunction = {
  talk : function() {
    console.log('talk')
  }
}

function mammalFactory(name, age, color) {
  let obj = animalFactory(name, age)
  obj.color = color;
  Object.setPrototypeOf(obj, mammalFunction)
  return obj;
}

Object.setPrototypeOf(mammalFunction, animalFunction)

const mammal = mammalFactory('Pochi', 2, 'black');

console.log(mammal.age)