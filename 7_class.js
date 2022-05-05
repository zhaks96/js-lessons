class Animal {
  static type = 'Animal'

  constructor(options){
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice(){
    console.log('I am Animal')
  }
}

const animal = new Animal({
  name: 'Animal',
  age: 5,
  hasTail: false
})


class Cat extends Animal {
  constructor(options){
    super(options) // чтобы передать color для Cat
    this.color = options.color
  }

  voice(){
    super.voice()
    console.log('I am Cat')
  }

  get ageInfo(){
    return this.age * 7
  }

  set ageInfo(newAge){
    this.age = newAge
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 10,
  hasTail: true,
  color: 'black'
})
