// function House(bedrooms, bathrooms, numSqft) {
//   this.bedrooms = bedrooms;
//   this.bathrooms = bathrooms;
//   this.numSqft = numSqft;
// }

// var firstHouse = new House(2, 2, 1000);

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
//   this.bark = function() {
//     console.log(`${this.name} just barked!`);
//   };
// }

// var rusty = new Dog('Rusty', 3);
// var fido = new Dog('Fido', 3);

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   // we can also set properties on the keyword this
//   // that are preset values
//   this.numWheels = 4;
// }

// function Motorcycle(make, model, year) {
//   // using call
//   Car.call(this, make, model, year);
//   this.numWheels = 2;
// }
// function Motorcycle(make, model, year) {
//   // using call
//   Car.apply(this, [make, model, year]);
//   this.numWheels = 2;
// }
// function Motorcycle(make, model, year) {
//   // using call
//   Car.apply(this, arguments);
//   this.numWheels = 2;
// }

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  return 'Hi ' + this.name;
};

var elie = new Person('Elie');
var colt = new Person('Colt');

elie.__proto__ === Person.prototype;
colt.__proto__ === Person.prototype;

Person.prototype.isInstructor = true;

elie.isInstructor;
colt.isInstructor;

function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
  this.isRunning = true;
};

Vehicle.prototype.turnOff = function() {
  this.isRunning = false;
};

Vehicle.prototype.honk = function() {
  if (this.isRunning) {
    return 'beep!';
  }
};

function counter() {
  var count = 0;
  return function() {
    return ++count;
  };
}
