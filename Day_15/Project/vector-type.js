class Vec{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.length = Math.sqrt( (Math.pow(this.x, 2)) + Math.pow(this.y, 2) );
  };

  plus(vec) {
    return vec = {
      x : this.x + vec.x,
      y : this.y + vec.y
    }
  };

  minus(vec) {
    return vec = {
      x : this.x - vec.x,
      y : this.y - vec.y
    }
  }
}

console.log("Vec->",new Vec(1, 2).plus(new Vec(2, 3)));
console.log("Vec->",new Vec(1, 2).minus(new Vec(2, 3)));
console.log("Length:",new Vec(3, 4).length);
