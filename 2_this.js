function hello(){
  console.log(this)
}

const person = {
  name: 'John',
  age: 13,
  sayHello: hello,
  sayHelloWindow: hello.bind(this), // передаем контекст this = window
  logInfo: function(job, tel){
    console.group(`${this.name} info: `)
    console.log(`Name is ${this.name}`)
    console.log(`Age is ${this.age}`)
    console.log(`Job is ${job}`)
    console.log(`Tel is ${tel}`)
    console.groupEnd()
  }
}

const lena = {
  name: 'Elena',
  age: 25
}

// person.logInfo.bind(lena, 'Frontend', '777777777777')() // возвращает новую функцию
// person.logInfo.call(lena, 'Frontend', '777777777777') // сразу вызывает функцию
// person.logInfo.apply(lena, ['Frontend', '777777777777']) // всегда передается два параметр

const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n){
  return this.map((value) => value * n) // this смотрит на array, this = array
}

console.log(array.multBy(2))