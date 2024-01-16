/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * @param {number[]} nums
 * 
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 */


function moveZeroesToEnd(nums) {
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        if (len > 1 && nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            len--;
            i--;
            // console.log(nums);
        }
    }
    console.log(nums);

}

moveZeroesToEnd([0, 1, 0, 3, 12])
moveZeroesToEnd([0])
moveZeroesToEnd([12, 0, 0, 3, 0]) 