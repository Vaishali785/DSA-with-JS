const nums = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(arr) {
	for (let j = 0; j < arr.length; j++) {
		let smallestElemIdx = j
		for (let i = j + 1; i < arr.length; i++) {
			if (arr[smallestElemIdx] > arr[i]) {
				smallestElemIdx = i
			}
		}
		let temp = arr[j]
		arr[j] = arr[smallestElemIdx]
		arr[smallestElemIdx] = temp
	}
}

selectionSort(nums2)
console.log(nums2)

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
