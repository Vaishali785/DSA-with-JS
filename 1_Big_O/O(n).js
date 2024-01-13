/**
 * more the number of input more number of steps are required to finish the function.
 * so we can say number of steps required are directly proportional to number of inputs(n).
 * 
 * It is linear and not bad.
 */

const small = ['nemo'];

const large = ['a', 'b', 'c', 'nemo', 'd', 'e', 'f'];

const largest = Array(1000).fill("nemo");

const findNemo = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "nemo") {
            console.log("FOUND NEMO!!!");
        }
    }
}

findNemo(small);
findNemo(large);
findNemo(largest);