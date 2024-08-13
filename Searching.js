//Linear search :
/*Linear search is a simple searching algorithm where you sequentially check each element of a list or array until you find the
 target element or reach the end of the list.*/
/*
 const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; 
        }
    }
    return -1; 
};


const numbers = [4, 2, 7, 1, 9, 3];
const target = 7;
const index = linearSearch(numbers, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}

*/

// Binary search:

const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return middle; 
        } else if (array[middle] < target) {
            left = middle + 1; 
        } else {
            right = middle - 1; 
        }
    }

    return -1; 
};


const numbers = [1, 2, 3, 4, 7, 9];
const target = 7;
const index = binarySearch(numbers, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
