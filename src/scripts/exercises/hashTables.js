/**
 * Google Question: Given an array, find first recurring number
 */


/**
 * Example One (incorrect): O(n^2)
 */
function findFirstRecurringCharacterInefficiently(inputArray) {

    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {

            if (inputArray[i] === inputArray[j]) {
                return inputArray[i];
            }
        }
    }
}


/**
 * Example Two (correct): O(n)
 */
function findFirstRecurringCharacter(inputArray) {

    let hashCount = {};

    return inputArray.find((number) => {

        if (!hashCount[number]) {
            hashCount[number] = 1;
        } else if (hashCount[number] === 1) {
            return hashCount[number];
        }

    });
}

function hashTableExample() {

    console.log('Hash Table Examples Start');

    const arrayOne = [2, 5, 1, 2, 3, 5, 1, 2, 4]; // It should return 2
    const arrayTwo = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // It should return 2
    const arrayThree = [2, 3, 4, 5]; // It should return undefined
    const arrayFour = [2, 5, 5, 2, 3, 5, 1, 2, 4]; // It should return 5 because the pairs are before 2,2

    // innefficient example: not working for arrayFour due to how the loop works differently
    console.log('innefficient example: ', findFirstRecurringCharacterInefficiently(arrayFour));

    console.log('arrayOneResult: ', findFirstRecurringCharacter(arrayOne));
    console.log('arrayTwoResult: ', findFirstRecurringCharacter(arrayTwo));
    console.log('arrayThreeResult: ', findFirstRecurringCharacter(arrayThree));
    console.log('arrayFourResult: ', findFirstRecurringCharacter(arrayFour));

    console.log('Hash Table Examples End');

}

export default hashTableExample;

