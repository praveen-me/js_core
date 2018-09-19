// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

  var Vehicle = function(driver) {
    this.driver = driver;
    this.speed = 0; 
  };

  Vehicle.prototype.drive = function(mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };


  // var Car = function(driver) {
  //   this.driver = driver;
  //   this.speed = 0;
  //   this.drive = function(mph) {
  //     this.speed = mph;
  //     return this.driver + ' driving at ' + mph + ' miles per hour';
  //   };
  // };

  var car = new Vehicle("David");
  // console.log(car.drive(25))

  // var Truck = function(driver) {
  //   this.driver = driver;
  //   this.speed = 0;
  //   this.cargo = [];
  //   this.drive = function(mph) {
  //     this.speed = mph;
  //     return this.driver + ' driving at ' + mph + ' miles per hour';
  //   };

  //   this.loadCargo = function(cargo) {
  //     this.cargo.push(cargo);
  //     return this;
  //   };

  //   this.unloadCargo = function() {
  //     return this.cargo.pop();
  //   };
  // };


  var truck = new Vehicle('truck');
  truck.cargo = [];

  truck.prototype.loadCargo =  function(cargo) {
    this.cargo.push(cargo);
    return this;
  };

  truck.prototype.unloadCargo = function() {
    return this.cargo.pop();
  }

  
// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out.
function Person(name) {
  this.name = name;
}

const teacher = new Person("Ankit");
teacher.teach = function(subject) {
  console.log(`${this.name} teaches ${subject}.`);
}

teacher.teach("JavaScript");
