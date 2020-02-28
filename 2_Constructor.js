// Constructor Person;
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// Assigning method inside of the prototype of a constructor;
Person.prototype.dream = function() {
  console.log(`${this.firstName} ${this.lastName} has ${this.age} years`);
};
