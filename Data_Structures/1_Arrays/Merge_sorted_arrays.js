function mergeSorted(arr1, arr2) {
    const mergedArr = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArr.push(arr1Item);
            arr1Item = arr1[i];
            i++;
        } else {
            mergedArr.push(arr2Item);
            arr2Item = arr2[j];
            j++;
        }
    }
    console.log(mergedArr);
}
// mergeSorted([0, 3, 4, 31], [4, 6, 30])


function mergeSorted1(arr1, arr2) {
    if (typeof arr1 == "object" || typeof arr2 == "object") {
        const mergedArr = arr1.concat([...arr2]);
        // console.log(mergedArr);
        console.log(mergedArr.sort((a, b) => a - b));
    }
}

// mergeSorted1([0, 3, 4, 31], [4, 6, 30])


function mergeSorted2(arr1, arr2) {
    // console.log(typeof arr2);
    if (typeof arr1 != "object" || typeof arr2 != "object") {
        console.log("OOPs");
        // console.log(mergedArr.sort((a, b) => a - b));
    } else {
        const mergedArr = [...arr1, ...arr2];
        console.log(mergedArr.sort((a, b) => a - b));

    }
}

// mergeSorted2([0, 3, 4, 31], [4, 6, 30]);
