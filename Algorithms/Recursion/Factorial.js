
function findFactorialIterative(num) { //O(n)
    let fac = 1;
    for (var i = 1; i <= num; i++) {
        fac = fac * i;
    }
    console.log(fac);
}

let fac = 1;
function findFactorialRecursive(num) {  // O(n)

    if (num === 2) {
        return 2;
    }
    console.log(num * findFactorialRecursive(num - 1));
    return num * findFactorialRecursive(num - 1);
}




findFactorialRecursive(4);