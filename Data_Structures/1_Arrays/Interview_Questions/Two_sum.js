function twoSums(nums, target) {
    // console.log(lastArrayItem);
    console.log(nums);
    for (var i = 0; i < nums.length - 1; i++) {

        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return ([i, j]);
            }
        }
    }

};

twoSums([2, 11, 15, 7], 26)