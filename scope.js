// const talk = function() {
//   var name = "Daniel";
//   console.log("My name is " + name);
// }
// talk();
// console.log("trying to access result " + name);
//
// const walk = function() {
//   console.log(name + " is walking");
// }
//
// walk();

const name = "Daniel"

const talk = function(){
  const name = "Alan"
  console.log("My name is " + name);
}

talk();
console.log("The global name is " + name);

var globalVariable = 99;
// this is seen everywhere
var separateFunction = function() {
  var separateA = 2;
};
// this is only seen in this function
var outerFunction = function() {
  var outerA = 1;
  var innerFunction = function() {
    console.log('outerA ', outerA);
    // this will print 'outerA and the number1'
    console.log('globalVariable', globalVariable);
    // this will print out globalVariable as a string and the number 99 OR fail as there is no semi-colon
    console.log('separateA ', separateA);
    // this will print out "separateA" and not defined as it cannot see the method separateFunction
  };
  innerFunction();
  // this will fail as it is missing a semi-colon
};
outerFunction();
// this method here makes it all happen
