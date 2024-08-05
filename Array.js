// Array enables storing a collection of multiple items under a single variable name, and has mention for performing common array operation
// 1. arrays are resizable and can contain a mix of different data types.dynamic size,built-in methods,index-based,length property,multi-deminsional

const a = [1,2,3,4,5]
// console.log(a[0])

const b = ["Surabhi","Alisha","Sam","Arushi"]
// console.log(b[0])

//Array Methods

// 1. Push: adds at the end of the array
a.push(0)
a.push(10)
a.push(6)
console.log(a)

//2. pop : delete last element from array
a.pop()
console.log(a)

//3. unshift:add element at the first
a.unshift(5)
console.log(a)

//4. shift:deletes element from first of array
a.shift()
console.log(a)

//5, includes
console.log(a.includes(1))

//6. indexof
console.log(a.indexOf(4))

//7. join
const newarr = a.join()
console.log(newarr)
console.log(typeof(newarr))

//8. slice:
console.log(a.slice(1,4))

//splice
console.log(a)
let z = a.splice(2,2)
console.log(z)

