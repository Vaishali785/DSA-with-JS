function printHi(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Hi");
    }
}

function addHiToArray(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = "Hi";
    }
    return arr;
}



printHi([1, 2, 3, 4, 5]);
/**
 * Space Complexity is O(1) bcoz of i=0
 * 
 * */


addHiToArray(6)
/**
 * Space Complexity is O(n) bcoz each item takes additional space in memory
 * 
 * */
