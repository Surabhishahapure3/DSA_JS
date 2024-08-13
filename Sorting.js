
// Sorting 

// 1. Bubble sort
/*
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [3, 4, 2, 7, 6, 5];
bubbleSort(arr);
console.log(arr);
*/


// Selection sort
/*
function selectionsort(arr)
{
    let n = arr.length;
    for(let i=0;i<n-1;i++)
    {
        let midindex = i
        for(let j=i+1;j<n;j++)
        {
            if(arr[midindex]>arr[j])
            {
                midindex = j
            }
        }
        if(midindex !==i)
        {
            [arr[i],arr[midindex]] = [arr[midindex],arr[i]]
        }
    }

    return arr
}

let arr = [2,3,4,1,8,7,6]
selectionsort(arr)
console.log(arr)
*/

// Insertion sort
/*
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;
        // Corrected the condition to use `key` instead of `arr[key]`
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key; // Place the key in the correct position
    }
}

arr = [2, 3, 4, 1, 8, 7, 6];
insertionSort(arr);
console.log(arr); 
*/
