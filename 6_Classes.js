//Class
class Person {
  constructor(firstName, lastName, age) {
    (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
  }

  dream() {
    console.log(`${this.firstName} ${this.lastName} has ${this.age} years`);
  }

  static topComment() {
    return 'We have already won';
  }
}

const personRen = new Person('Ren', 'Ber', '3');

//SubClass
class Person2 extends Person {
  constructor(firstName, lastName, age, size) {
    super(firstName, lastName, age);
    this.size = size;
  }

  sizing() {
    return `${this.firstName} ${this.lastName} has ${this.age} years and is ${this.size}`;
  }
}

const person2Rog = new Person2('Rog', 'Bar', '3', 'taller');

// static method allows you to use without instantiation
Person.topComment();
