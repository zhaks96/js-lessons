console.log('Reauest data...')

// setTimeout(() => {
//   console.log('Preparing data...')

//   const response = {
//     server: 'server',
//     port: 2000,
//     status: 200,
//   }

//   setTimeout(() => {
//     response.modified = true
//     console.log('Data recived', response)
//   }, 2000)
// }, 2000)


// 1
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...')
    const response = {
      server: 'server',
      port: 2000,
      status: 200,
    }
    resolve(response) // если успешно
    // reject(response) // если ошибка
  }, 2000)
})

p.then((r) => {
  console.log('Promise resolved')
  console.log(r)
}).catch((err) => {
  console.log('Error: ', err)
}).finally(() => console.log('Finally!'))

// 2
const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

Promise.all([sleep(2000), sleep(5000)]).then((r) => {
  console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then((r) =>{
  console.log('Race promises')
})