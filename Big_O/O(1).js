/**
 * O(1) means constant time, it can also be O(2),O(3) and so on but as they all are constants,
 * they are represented by O(1)= constant.
 * 
 * It is very scalable and it is excellent.
 */

const array = [1, 2, 3, 4, 5, 6, 7];

function logFirstValue(arr) {
    console.log(arr[0]);
}

function logFirstTwoValues(arr) {
    console.log(arr[0]);
    console.log(arr[1]);
}

logFirstValue(array); // O(1)
logFirstTwoValues(array); //O(2)