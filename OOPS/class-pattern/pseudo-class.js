function Student (p, c, m) {
  this.phy = p;
  this.che = c;
  this.math = m;
}

Student.prototype.percentage = function() {
  let total =  this.phy + this.che + this.math;
  console.log((total / 3).toFixed(2))
}

Student.prototype.result = function() {
  let total =  this.phy + this.che + this.math;
  if(total > 200) {
    console.log('pass');
  } else {
    console.log('fail')
  }
}

let stud1 = new Student(60, 90, 80);
stud1.result();
stud1.percentage();
