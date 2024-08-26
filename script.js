// create array add 10 Values
var arrValues = ["Value>1", "Value>2", "Value>3", "Value>4", "Value>5", "Value>6", "Value>7", "Value>8", "Value>9", "Value>10"];
console.log("Check Total value> ", arrValues);

// remove 5th and 6th value
var removedElements = arrValues.splice(4, 2);

// add new values
arrValues.splice(4, 0, "New--Value>1", "New--Value>2", "New--Value>3", "New--Value>4");
// console.log("Array Adding new Values:", arrValues);

// create a new array with removed Values
var newArray = removedElements.slice(0, 2);
console.log("Removed new array Values:", newArray);

// Adding new values
newArray.push("Removed--Values>5", "Removed--Values>6");
console.log("New array adding two new values:", newArray);

// Adding value using Sift Method
arrValues.shift();
arrValues.shift();

// remove last value || newArray
newArray.pop(); // Remove The Value-Number>6
console.log("New array removing the last Value>6:", newArray);
console.log("Final view =====>", arrValues);
console.log("New Array:", newArray);