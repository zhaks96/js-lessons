const person = Object.create(
  {
    calculateAge(){
      return new Date().getFullYear() - this.birthYear
    }
  }, 
  {
  name: {
    value: 'Zhansultan',
    enumerable: true,
    writable: true,
    configurable: true
  }, 
  birthYear: {
    value: 1996,
    enumerable: false, // default, можно не писать
    writable: false, // default, можно не писать
    configurable: false // default, можно не писать
  }, 
  age: {
    get(){
      return new Date().getFullYear() - this.birthYear
    }, 
    set(value) {
      console.log('Set age: ', value)
    }
  }
})

// const person = {
//   name: 'Zhansultan',
//   birthYear: 1996
// }

console.log(person)
for(let key in person){
  console.log('Key: ', key)
}