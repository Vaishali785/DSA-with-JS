const nums = [6, 5, 3, 1, 8, 7, 2, 4]
const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
function bubbleSort(arr) {
	let len = arr.length
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
}

bubbleSort(nums2)
console.log(nums2)

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
