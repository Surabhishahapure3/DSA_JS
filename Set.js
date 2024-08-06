/*A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.
*/

/*
let a = new Set([1,2,3,4,2,3])
let sum =0
a.forEach((x)=>
{
    sum = sum + x

})
console.log(sum)
*/

/*
const letters = new Set();

const a = "a";
const b = "b";
const c = "c";

letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters)
*/

/*has method*/
/*
const letters = new Set(["a","b","c"]);

answer = letters.has("d");
console.log(answer)
*/


/*forEach method*/
/*
const letters = new Set(["a","b","c"]);

let text = "";
letters.forEach (function(value) {
  text += value;
})
  */


/*values*/
/*
const letters = new Set(["a","b","c"]);

const myIterator = letters.values();
console.log(myIterator)
// let text = "";
// for (const entry of myIterator) {
//   text += entry;
// }
let text =" "
for(let x of myIterator)
{
    text+=x
}
console.log(text)
*/

/*key*/
/*
const letters = new Set(["a","b","c"]);

const myIterator = letters.keys();

let text = "";
for (const x of myIterator) {
  text += x;
}
console.log(text)
*/

/*entities*/
/*
const letters = new Set(["a","b","c"]);

// Get all Entries
const myIterator = letters.entries();

// List all Entries
let text = "";
for (const entry of myIterator) {
  text += entry;
}
*/


