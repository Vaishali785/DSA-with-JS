/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false *  if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */

function checkDuplicates(nums) {
    let foundDuplicate = false;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                foundDuplicate = true;
            }
        }
    }
    console.log(foundDuplicate);
}

// checkDuplicates([1, 2, 3, 1, 2])
// checkDuplicates([1, 2, 3, 4])
// checkDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])