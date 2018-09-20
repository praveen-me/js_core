function Rect(h, w) {
  this.h = h;
  this.w = w;
}

Rect.prototype.area = function() {
  return this.h * this.w;
}

let rec1 = new Rect(5,2);

function Square(length) {
  this.w = this.h = length;
}

// Object.setPrototypeOf(Square.prototype, Rect.prototype);

Square.prototype = Object.create(Rect.prototype);

let sq1 = new Square(6);

console.log("Area of Square:",sq1.area());

console.log("Area of Reactangle:",rec1.area());