
function pairs(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]
pairs(array); //O(n^2)