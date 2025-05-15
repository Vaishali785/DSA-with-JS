- Sorting is an algorithm which can easily be done using sort() function in JS.
- But the issue arises when the data is too large, as for Google , amazon. That's why we need to learn different sorting algorithms , so that we can create our custom sorting method based on the need.

- Main sorting algorithms:
  - Elementary Sorts
    1. Bubble Sort
    2. Selection Sort
    3. Insertion Sort
  - Complex Sorts 4. Merge Sort 5. Quick Sort

---

# Bubble Sort

- Easiest but the least efficient one
- Bubble up the largest value and then go again to the beginning

exp:- 6 5 3 1 8 7 2 4
; | n | represents the sorted biggest element

<pre>
    - <ins>5 6</ins> 3 1 8 7 2 4
    - 5 <ins>3 6</ins> 1 8 7 2 4
    - 5 3 <ins>1 6</ins> 8 7 2 4
    - 5 3 1 6 <ins>7 8</ins> 2 4
    - 5 3 1 6 7 <ins>2 8</ins> 4
    - 5 3 1 6 7 2 <ins>4 8</ins></br>
    - // 5 3 1 6 7 2 4 | 8 |
    - <ins>3 5</ins> 1 6 7 2 4 8
    - 3 <ins>1 5</ins> 6 7 2 4 8
    - 3 1 5 6 <ins>2 7</ins> 4 8
    - 3 1 5 6 2 <ins>4 7</ins> 8</br>
    // 3 1 5 6 2 4 | 7 8 |
    - <ins>1 3</ins> 5 6 2 4 7 8
    - 1 3 5 <ins>2 6</ins> 4 7 8
    - 1 3 5 2 <ins>4 6</ins> 7 8</br>
    // 1 3 5 2 4 | 6 7 8 |
    - 1 3 <ins>2 5</ins> 4 6 7 8
    - 1 3 2 <ins>4 5</ins> 6 7 8</br>
    // 1 3 2 4 | 5 6 7 8 |
    - 1 <ins>2 3</ins> 4 5 6 7 8</br>
    // 1 2 3 | 4 5 6 7 8 |
    // 1 2 | 3 4 5 6 7 8 |
    // 1 | 2 3 4 5 6 7 8 |
</pre>

# Selection Sort

- It is also a simple sorting algorithm.
- Find the smallest element and swap it to the first position ( and the element on the first position to the index of the swapped element position).

exp:- 8 5 2 6 9 3 1 4 0 7</br>
; `n` represents the smallest number</br>
; <ins>m</ins> represents the element to check next</br>
; | r | represents sorted smallest elements</br>

<pre>
    - `8` <ins>5</ins> 2 6 9 3 1 4 0 7
    - 8 `5` <ins>2</ins>6 9 3 1 4 0 7
    - 8 5 `2` <ins>6</ins> 9 3 1 4 0 7
    - 8 5 `2` 6 <ins>9</ins> 3 1 4 0 7
    - 8 5 `2` 6 9 <ins>3</ins> 1 4 0 7
    - 8 5 2 6 9 3 `1` <ins>4</ins> 0 7
    - 8 5 2 6 9 3 1 4 `0` <ins>7</ins><br>
      // | 0 | 5 2 6 9 3 1 4 8 7
    - 0 | `5` <ins>2</ins> 6 9 3 1 4 8 7
    - 0 | 5 `2` <ins>6</ins> 9 3 1 4 8 7
    - 0 | 5 `2` 6 <ins>9</ins> 3 1 4 8 7
    - 0 | 5 `2` 6 9<ins>3</ins> 1 4 8 7
    - 0 | 5 2 6 9 3 `1` 4 8 7
    - 0 | 5 2 6 9 3 `1` <ins>4</ins> 8 7
    - 0 | 5 2 6 9 3 `1` 4 <ins>8</ins> 7
    - 0 | 5 2 6 9 3 `1` 4 8 <ins>7</ins></br>
      // 0 1 | 2 6 9 3 5 4 8 7
    - 0 1 | `2` <ins>6</ins> 9 3 5 4 8 7
    - 0 1 | `2` 6 <ins>9</ins> 3 5 4 8 7
    - 0 1 | `2` 6 9 <ins>3</ins> 5 4 8 7
    - 0 1 | `2` 6 9 3 <ins>5</ins> 4 8 7
    - 0 1 | `2` 6 9 3 5 <ins>4</ins> 8 7
    - 0 1 | `2` 6 9 3 5 4 <ins>8</ins> 7
    - 0 1 | `2` 6 9 3 5 4 8 <ins>7</ins></br>
    // 0 1 2 | 6 9 3 5 4 8 <ins>7</ins>
    - 0 1 2 | `6` <ins>9</ins> 3 5 4 8 7
    - 0 1 2 | `6` 9 <ins>3</ins> 5 4 8 7
    - 0 1 2 | 6 9 `3`<ins>5</ins> 4 8 7
    - 0 1 2 | 6 9 `3` 5 <ins>4</ins> 8 7
    - 0 1 2 | 6 9 `3` 5 4 <ins>8</ins> 7
    - 0 1 2 | 6 9 `3` 5 4 8 <ins>7</ins></br>
    // 0 1 2 3 | 9 6 5 4 8 7
    - 0 1 2 3 | `9` <ins>6</ins> 5 4 8 7
    - 0 1 2 3 | 9 `6` <ins>5</ins> 4 8 7
    - 0 1 2 3 | 9 6 `5`<ins>4</ins> 8 7
    - 0 1 2 3 | 9 6 5 `4`<ins>8</ins> 7
    - 0 1 2 3 | 9 6 5 `4` 8 <ins>7</ins></br>
    // 0 1 2 3 4 | 6 5 9 8 7
    - 0 1 2 3 4 | `6` <ins>5</ins> 9 8 7
    - 0 1 2 3 4 | 6 `5` <ins>9</ins> 8 7
    - 0 1 2 3 4 | 6 `5` 9 <ins>8</ins> 7
    - 0 1 2 3 4 | 6 `5` 9 8 <ins>7</ins></br>
    // 0 1 2 3 4 5 | 6 9 8 7
    - 0 1 2 3 4 5 | `6` <ins>9</ins> 8 7
    - 0 1 2 3 4 5 | `6` 9 <ins>8</ins> 7
    - 0 1 2 3 4 5 | `6` 9 8 <ins>7</ins></br>
    // 0 1 2 3 4 5 6 | 9 8 7
    - 0 1 2 3 4 5 6 | `9` <ins>8</ins> 7
    - 0 1 2 3 4 5 6 | 9 `8` <ins>7</ins>
    - 0 1 2 3 4 5 6 | 9 8 `7`</br>
    // 0 1 2 3 4 5 6 7 | 8 9
    - 0 1 2 3 4 5 6 7 | `8` <ins>9</ins>
    // 0 1 2 3 4 5 6 7 8 9

</pre>

# Insertion Sort

- It is not the most efficient algorithm but in some cases, it is extremely fast
- Checks if next element is smaller than previous, if yes checks where to put it into the array.

exp:- 6 5 3 1 8 7 2 4</br>

<pre>
    - 6 | `5` 3 1 8 7 2 4
    - 5 6 | `3` 1 8 7 2 4
    - 3 5 6 | `1` 8 7 2 4
    - 1 3 5 6 | `8` 7 2 4
    - 1 3 5 6 8 | `7` 2 4
    - 1 3 5 6 7 8 | `2` 4
    - 1 2 3 5 6 7 8 | `4`
    - 1 2 3 4 5 6 7 8 |
</pre>

# Merge Sort

- It uses divide & conquer rule.
- Splits array in half and then half them until you get o=single element, and then compares them.
- This is better because you dont need to compare all elements with all other elements (as in the other sorting algos).
- It's time complexity is O(n logn)

Exp:- 6 5 3 1 8 7 2 4</br>
; | represents the splitting of array</br>

<pre>
    - 6 5 3 1   |  8 7 2 4
    - 6 5 | 3 1 | 8 7 | 2 4
    - 6 | 5    3 | 1    8 | 7    2 | 4
    // Sorting each group
    - 5 | 6    1 | 3    7 | 8    2 | 4
    // Sorting first two groups -> 5 and 1, 5 and 3
    - 1 3 5 6  |  2 4 7 8
    - 1 2 3 4 5 6 7 8
</pre>
