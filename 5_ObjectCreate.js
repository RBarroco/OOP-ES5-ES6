// Object of Protos
const nameProtos = {
  show: function() {
    console.log(`${this.firstName} ${this.lastName} has ${this.age} years`);
  }
};

// Create Object;
const nameProtos2 = Object.create(nameProtos);
nameProtos2.firstName = 'Ren';
nameProtos2.lastName = 'Bar';
nameProtos2.age = '3';
// console.log(nameProtos2.show());

//----------------------------------------------
const nameProtos3 = Object.create(nameProtos, {
  firstName: { value: 'Ren' },
  lastName: { value: 'Bar' },
  age: { value: '3' }
});

console.log(nameProtos3.show());
