/**
 * 
 * Exercise - Reverse String
 * 
 * @param {*} string 
 */
function reverseString(string) {

    let reversedString = [];

    for (let i = string.length; i >= 0; i--) {
        reversedString.push(string[i]);
    }

    return reversedString.join('');

}

export default reverseString;