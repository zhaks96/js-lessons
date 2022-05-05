// 1-example
// function createCalc(n){
//   return function(){
//     console.log(1000 * n) // n замкнуто
//   }
// }

// const calc = createCalc(42)
// calc()

// 2-example
// function createIncrementor(n){
//   return function(num){
//     return num + n
//   }
// }

// const addOne = createIncrementor(1)

// console.log(addOne(10))

// 3-example
// function urlGenerator(domain){
//   return function(url){
//     return `https://${url}.${domain}`
//   }
// }

// const comUrl = urlGenerator('com')

// console.log(comUrl('google'))

// 4-example
function bind(person, func){
  return function(...args){
    func.apply(person, args)
    // return `Person: ${person.name}, ${person.age}, ${person.job}`
  }
}

function logPerson(){
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const personBind = bind({name: 'Name1', age: 22, job: 'Frontend'}, logPerson)
console.log(personBind())