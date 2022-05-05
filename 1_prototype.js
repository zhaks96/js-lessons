const person = new Object({
  name: 'Maxim',
  age: 36,
  greet: function () {
    console.log('Greet')
  }
});

// Создание prototype
Object.prototype.sayHello = function () {
  console.log('Hello')
}

Object.prototype.sayHello2 = ()=>{
  console.log('Hello2')
}

// Создание prototype create
const lena = Object.create(person);
