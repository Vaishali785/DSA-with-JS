const nums1 = [8, 5, 2, 6, 9, 3, 1, 4, 0, 7]
const nums2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const nums = [6, 7, 8, 1, 2, 0, 5]
function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[0]) {
			arr.unshift(arr.splice(i, 1)[0])
		} else {
			for (let j = 1; j < i; j++) {
				if (arr[i] < arr[j] && arr[i] > arr[j - 1]) {
					arr.splice(j, 0, arr.splice(i, 1)[0])
				}
			}
		}
	}
}

insertionSort(nums2)
console.log(nums)
