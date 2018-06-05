// two ways to make an array see line 3 and line 5

// const guitars = new Array()

const guitars = ["fender", "gibson"]

// if you are costrusting an array you have to use .push to add to the array
guitars.push("gretsch")

console.log(guitars);
console.log(guitars[1]);
console.log(guitars[guitars.length - 1]);

const lastGuitar = guitars.pop();
console.log(guitars);
console.log(lastGuitar);

// this removes an item from an array -
// the first int tells js what index to start and then how many to remove
guitars.splice(1 , 1);
console.log(guitars);
// this adds an new object to an array
guitars.splice(1, 0, "ibanez");
console.log(guitars);
