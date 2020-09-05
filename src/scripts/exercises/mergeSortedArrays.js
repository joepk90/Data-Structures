/**
 * 
 * Exercise - Merge Sorted Arrays
 * 
 * @param {*} firstArray 
 * @param {*} secondArray 
 */
function mergeSortedArrays(firstArray, secondArray) {

    // argument values: [0, 3, 4, 31], [4, 6, 30]

    // Simple Solution

    let joinedArrays = firstArray.concat(secondArray);

    return joinedArrays.sort(function (a, b) { return a - b; });


    // Manual Solution

    if (firstArray.length === 0) return secondArray;
    if (secondArray.length === 0) return firstArray;

    let mergedArray = [];
    firstArrayItem = firstArray[0];
    secondArrayItem = secondArray[0];
    firstArrayIndex = 1;
    secondArrayIndex = 1;

    while (firstArray || secondArray) {

        if (!secondArray || firstArrayItem < secondArrayItem) {
            mergedArray.push(firstArrayItem);
            firstArrayItem = firstArray[firstArrayIndex];
            firstArrayIndex++;
        } else {
            mergedArray.push(secondArrayItem);
            secondArrayItem = secondArray[secondArrayIndex];
            secondArrayIndex++;
        }

    }

    return mergedArray;

}

console.log('Exercise - mergeSortedArrays: ', mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));