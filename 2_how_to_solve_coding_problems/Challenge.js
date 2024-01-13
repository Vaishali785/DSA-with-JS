// Given 2 arrays , create a function that let's the user know (true/false) whether these two arrays contain any common items
// For example:
// array1=['a','b','c','x']
// array2=['z','y','i']
// return false
// array1=['a','b','c','x']
// array2=['z','y','x']
// return true

// ------------------ METHOD1 --------------------------------//

// 2 inputs 
// return boolean value

function checkCommonItem(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
                return true;
            }
        }
    }
    return false;
}
const array11 = ['a', 'b', 'c', 'x']
const array12 = ['z', 'y', 'i']
checkCommonItem(array11, array12)

// Time Complexity = O( n*m )
// Space Complexity = O(1)


// ------------------------ METHOD2 --------------------------------//
// array1=> object{
//     a:true,
//     b:true,
//     c:true,
//     d:true
// }
// check array 2 items are there in above object
function checkCommonItem2(arr1, arr2) {
    let arrayToObject = {};
    // converts array to object
    arr1.forEach(item => { if (!arrayToObject[item]) arrayToObject[item] = true });

    // check item of second array are present in the object
    for (let i = 0; i < arr2.length; i++) {
        if (arrayToObject[arr2[i]]) {
            console.log(arr2[i])
            return true;
        }
    }
    return false;

}
const array21 = ['a', 'b', 'c', 'x']
const array22 = ['z', 'y', 'x']
checkCommonItem2(array21, array22);

// Time Complexity = O( n+m )
// Space Complexity = O(n)

// ------------------------ METHOD3 --------------------------------//

function checkCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
const array31 = ['a', 'b', 'c', 'x']
const array32 = ['z', 'y', 'x']
checkCommonItem2(array31, array32);


// ------------------------ TESTING --------------------------------//

const a1 = ['a', 'b', 'c', 'x']
const a2 = ['z', 'y', 'x']

const b1 = ['a', 1, 'c', 'x']
const b2 = ['z', 1, 'x']

const c1 = ['a', 'b', [], 'x']
const c2 = ['z', [], 'x']

const d1 = ['a', null, 'b', 'c', 'x']
const d2 = ['z', 'y', null, 'x']

const e1 = ['a', undefined, 'b', 'c', 'x']
const e2 = ['z', 'y', undefined, 'x']