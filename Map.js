
/*
diff bet object and map:
    object: { string} key must be the string
    map : it can take any data type

*/


/*
let map1 = new Map([
    [1, 2],
    [2, 3],
    [4, 5]
]);

console.log("Map1");
console.log(map1);

let map2 = new Map([
    ["firstname", "sumit"],
    ["lastname", "ghosh"],
    ["website", "geeksforgeeks"]
]);

console.log("Map2");
console.log(map2);
*/




/*******Set Methods******** */
/*
let map1 = new Map();
map1.set("FirstName", "Shobhit");
map1.set("LastName", "Sharma");
map1.set("website", "GeeksforGeeks");

console.log(map1);
*/

/**
 Methods of JavaScript Map
set(key, value): Adds or updates an element with a specified key and value.
get(key): Returns the value associated with the specified key.
has(key): Returns a boolean indicating whether an element with the specified key exists.
delete(key): Removes the element with the specified key.
clear(): Removes all elements from the Map.
size: Returns the number of key-value pairs in the Map.
 */

let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
    .set("friend 1", "gourav")
    .set("friend 2", "sourav");

console.log(map1);

console.log("map1 has website ? " +
    map1.has("website"));

console.log("map1 has friend 3 ? " +
    map1.has("friend 3"));

console.log("get value for key website " +
    map1.get("website"));

console.log("get value for key friend 3 " +
    map1.get("friend 3"));
console.log("delete element with key website "
    + map1.delete("website"));

console.log("map1 has website ? " +
    map1.has("website"));

console.log("delete element with key website " +
    map1.delete("friend 3"));

map1.clear();

console.log(map1);

/*
Advantages of Map
Map object provided by ES6. A key of a Map may occur once, which will be unique in the map’s collection.
There are slight advantages to using a map rather than an object.

Unique Keys: A key can occur only once, ensuring uniqueness within the collection.
Flexible Key Types: Any value (object, function, etc.) can be used as a key.
Order: Maintains the order of entry insertion.
*/
