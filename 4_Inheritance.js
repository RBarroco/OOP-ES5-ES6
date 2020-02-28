// Constructors;
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Assigning method inside of the prototype of a constructor;
Person.prototype.dream = function() {
  console.log(`${this.firstName} ${this.lastName} has ${this.age} years`);
};

// Constructor2 -> inheritance -> Super
function Person2(firstName, lastName, age, size) {
  Person.call(this, firstName, lastName, age);
  this.size = size;
}

//Inherit Prototype;
Person2.prototype = Object.create(Person.prototype);

//Use Person2 Constructor;
Person2.prototype.constructor = Person2;

const personExample = new Person2('Rogo', 'Baro', '3', 'Tar');
personExample.dream();
