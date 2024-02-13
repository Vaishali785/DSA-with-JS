function reverseString(str) {
    let newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    // console.log(newStr);
}

// reverseString("yoyo master");

function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } else {
        let newStr = reverseStringRecursive(str.substr(1)) + str.charAt(0)
        console.log(newStr);
        return newStr;
    }
    // let newStr = str[str.length-1];
}

reverseStringRecursive("yoyo master");