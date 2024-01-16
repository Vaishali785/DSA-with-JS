function reverse1(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "Not good";
    }
    console.log(str.split("").reverse().join(""));
}

const word1 = "Vaishali";
const word2 = "bus";
const word3 = "laptop";
const str = "Hi I am Vaishali";
// reverse(word1);
// reverse(word2);
reverse1(str);


function reverse2(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return "Not good";
    }
    let reversedWord = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedWord += str[i];
    }
    console.log(reversedWord);
}

reverse2(str);