function promptDirection(question) {
  let result = prompt(question);
  if(result.toLowerCase() === "left") return "L";
  if(result.toLowerCase() === "right") return "R";
  throw new Error("Invalid Direction "+result);
}

function look() {
  if(promptDirection("Which Way?") == "L") {
    return 'a house.';
  } else {
    return 'two angry bears.';
  }
}

try{
  console.log("You see",look());
} catch(error) {
  console.error("Something went wrong "+error);
}