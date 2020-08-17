/**
 * Arrays: Otherwise known as lists, organises items sequentially - one after the other in memory
 * Arrays are the simplest data structure. They have the least amount of rules and leave the smallest footprint of any data structure
 *
 * Static vs Dynamic arrays
 * Programming languages like C++ use static arrays, where the array length must be set, whereas higher level languages use dynamic arrays.
 *
 * Static Arrays: can be faster depending on operationbut require more management within the code
 * Dynamic Arrays: no need to worry about the site of the array, as the programming lnaguage will copy the array and remake it the array size needs to increase (this can effect the Big O of an operation).
 *
 * Array Operations - Big O
 * - Lookup: O(1)
 * - Push/Append: O(1) or O(n) - depending if  a static or dynamic array is in use
 * - Insert: O(n)
 * - Delete: O(n)
 */

const arrays = function () {

    console.log('Data Structure: Arrays - Start');

    const strings = ['a', 'b', 'c', 'd'];
    const numbers = [1, 2, 3, 4, 5];
    // 4*4 = 16 Bytes of storage

    // add array element to the end of the array
    strings.push('e'); // O(1) or O(n) 

    // remove/return array element from the end of the array
    strings.pop(); // O(1)

    // add array element to the start of the array
    strings.unshift('x') // O(n)

    // add array element in the middle of the array
    strings.splice(2, 0, 'alien');

    console.log(strings)

    console.log('Data Structure: Arrays - End');

}

export default arrays;



/**
 * Custom Data Structure: Array
 */
class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--;
        return lastItem
    }
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index)
    }

    // O(n)
    shiftItems(index) {

        for (let i = index; this.lenth - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }
}


const customArray = new CustomArray();

customArray.push('hi');
customArray.push('you');
customArray.push('!');
customArray.pop();
console.log(customArray.get(0));

