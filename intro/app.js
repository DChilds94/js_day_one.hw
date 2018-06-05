var myName = "Daniel"

if (myName === "Daniel") {
  console.log("Hello " + myName);
}

var  counter = 0;

if (counter > 0) {
  console.log("The counter is greater than zero");
} else if (counter < 0) {
  console.log("counter is less than zero");
}
else {
  console.log("The counter is less than or equal to zero ");
}

var pet = "Cat"

switch (pet) {
  case "Cat":
  console.log("Soft Kitty warm kitty little ball of fur");
  break;
  case "Dog":
  console.log("Who let the dogs out?");
  break
  default:
  console.log("No pet");
}

1 + 2 === 2 ? console.log("yay, maths") : console.log("no bad maths");

var pets = ["dog", "cat", "hamster"];
for (var i = 0; i < pets.length; i++){
  console.log(pets[i]);
}

for (var pet of pets){
  console.log(pet);
}

var obj = {paul: 1, andrew: 2, liam: 3, }
console.log(typeof obj.paul);

for (var key in obj){
  console.log(obj[key]);
}

var counter = 0;

while (counter < 10) {
  console.log("loop" + counter);
  // counter = counter + 1;
  counter++
}
