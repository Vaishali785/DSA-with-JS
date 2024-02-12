// Given a number N return the index value of the fibonacci series , where the sequence is 
// 0,1,1,2,3,5,8,13,21,34,55,89,.....

function fibonacciIterative(num) { // O(n)
    let first = 0;
    let second = 1;
    let third = first + second;

    while (num - 3) {
        first = second;
        second = third;
        third = first + second;
        num--;
    }
    console.log(third);
}

// let fac = 1;
function fibonacciRecursive(num) { // O(2^n)
    if (num < 2) {
        return num;
    }
    return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}



// fibonacciIterative(5);
fibonacciRecursive(0);