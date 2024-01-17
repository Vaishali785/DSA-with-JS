/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function rotateArray(nums, k) {
    for (var i = 0; i < k; i++) {
        const poppedElement = nums.pop();
        nums.unshift(poppedElement);
    }
    console.log(nums);
}

// rotateArray([1, 2, 3, 4, 5, 6, 7], 3)
// rotateArray([-1, -100, 3, 99], 2)

function rotateArray2(nums, k) {
    const newNums = nums.splice(nums.length - k, k);
    nums.unshift(...newNums);
    console.log(nums);
}
rotateArray2([1, 2, 3, 4, 5, 6, 7], 3)
