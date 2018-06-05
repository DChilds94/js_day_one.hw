// const person = {
//   name: "Guybrush",
//   age: 32,
//   weapon: "Cutlass",
//   isAwesome: true,
//   talk: function() {
//     console.log("Shiver me timbers");
//   },
//   sayName: function() {
//     console.log("Hi my name is " + this.name);
//   }
// };
//
// console.log(person);
// person.talk();
// person.sayName();


const fish = "Tuna";

const bear = {
  name: "Whinne",
  type: "Pooh",
  belly: [],
  eat: function() {
    console.log(this.belly.push(fish));
  }
}

console.log(bear);
bear.eat();
console.log(bear.belly);
