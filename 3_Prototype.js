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

//Instantiated the constructor into an object;
const personRe = new Person('Ren', 'Bao', '3');

// Person2 Constructor inheritance;
function Person2(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
}

// Creating a PROTOTYPE Inheritance;
Person2.prototype = Object.create(Person.prototype);

// Instantiate object;
const personRog = new Person2('Roge', 'Brr', '3');
