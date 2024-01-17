const array = ['a', 'b', 'c', 'd'];

array[1] //O(1)

array.pop() //O(1)
array.push("e") ///O(1)

array.splice(3, 0, "alien") //O(n)
array.unshift("x"); //O(n)

console.log(array);