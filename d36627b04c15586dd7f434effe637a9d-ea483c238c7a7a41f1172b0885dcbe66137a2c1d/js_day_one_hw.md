# JS Day 1 Homework WHODUNNIT?

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();
// this will print "My name is bob"
```

### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// this will print 3
```

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// this will print the number 3 as it is counting how many animals
```

### Episode 4

```js
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// this method will print out Ally, Alan, Colin, and Alistair;
```

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};
// object being constructed

var printName = function(detective) {
  return detective.name
};
// takes in the detective object

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};
// this method is overriding the dective name and setting it to Poirot
console.log(detectiveInfo());
// it will print out Poirot - Monkey
```


### Episode 6
```js
var murderer = 'Rick';
// defines it was rick
var outerFunction = function() {
  var murderer = 'Morty';
// defines a local scope of the murdered
  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
// this method will return that Jerry did it

console.log('the murderer is ', murderer);
```

### Episode 7 - Make up your own episode/s!

Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
