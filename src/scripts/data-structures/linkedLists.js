/**
 * Linked Lists
 * https://visualgo.net/en/list
 *
 * A linked list containes a set of nodes.
 * Each node has a 2 elements:
 * - Value of the data
 * - A pointer to the next node in line
 *
 * First node is called the head
 * Last node is called the tail
 * 
 * Linked Lists are null terminated: null signifies end of the list
 * 
 * Not all langauges have lined lists built in:
 * - Javascript 
 *
 */



/**
 * Pointers: A reference to something else in memory
 */
const basket = ['apples', 'grapes', 'pears'];
/**
 * Pointer Examples:
 *
 * linked list = apples -> grapes -> pears
 *
 *  apples
 *  3647 -->  grapes
 *            3627 -->  pears
 *                      370 --> null
 */


/**
 * Example references using JS objects
 * Javascript is garbage colected (memory manegement is automatic)
 */

let objectOne = { a: true };
let objectTwo = ObjectOne; // object two will point to the same reference in memory as objectOne

objectOne.a = 'false';
delete ObjectOne;

// enabling the following line would remove the original object ({a: true}) from memory (JS memory management: garbage collection)
// objectOne.a = 'hello';

// both objectOne and objectTwo will change: objectTwo.a will also equal false
// console.log('objectOne: ', objectOne);
console.log('objectTwo: ', objectTwo);

