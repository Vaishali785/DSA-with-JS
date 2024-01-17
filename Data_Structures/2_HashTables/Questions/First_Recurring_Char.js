function firstRecurringChar1(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] == input[j]) {
                console.log(input[i]);
                return;
            }
        }
    }
    console.log("no match")
}
firstRecurringChar1([1, 2, 2, 3, 5, 6, 7]) //O(n^2) , O(1)



function firstRecurringChar2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
        if (map[input[i]]) {
            console.log(input[i]);
            return;
        } else {
            map[input[i]] = true;
        }
    }
    console.log(map);
}

// firstRecurringChar2([1, 2, 2, 3, 5, 6, 7])  //O(n) , Space= O(n) 