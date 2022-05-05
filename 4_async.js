// event loop
// http://latentflip.com/loupe/
console.log('Start')

console.log('Start 2')
setTimeout(() => {
  console.log('0 timout')
},0)

new Promise(function(resolve, reject) {
  console.log('Promise')
  new Promise(function(resolve, reject) {
    console.log('Promise 2')
  })
})

setTimeout(()=>{
  console.log('Timeout 2000')
}, 2000)

console.log('end')