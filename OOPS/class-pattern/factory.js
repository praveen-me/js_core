let studFunctions = {
  percentage: function(p, c, m) { 
    let total = p + c + m;
    console.log((total / 3).toFixed(2))
  },
  result: function(p, c, m) {
    let total = p + c + m;
    total > 50 ? console.log("Pass") : console.log("Fail"); 
  }
}

function studFactory(p,c,m) {
  let obj = Object.create(studFunctions);
  obj.phy = p;
  obj.che = c;
  obj.math = m;
  return obj;
}

let stud1 = studFactory(50, 60, 80);
stud1.percentage(stud1.phy, stud1.che, stud1.math)
stud1.result(stud1.phy, stud1.che, stud1.math)

