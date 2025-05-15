const nums = [6, 7, 8, 1, 2, 0, 5, 9]

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr
	}

	const len = arr.length
	const half = Math.floor(len / 2)
	// Split arr in left and right
	const left = arr.slice(0, half)
	const right = arr.slice(half)

	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const result = []
	let leftIndex = 0
	let rightIndex = 0
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex])
			leftIndex++
		} else {
			result.push(right[rightIndex])
			rightIndex++
		}
	}

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(nums)
console.log(answer)
