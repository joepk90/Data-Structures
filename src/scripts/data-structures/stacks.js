/**
 * Stacks
 * Linear Data structure.
 * Traversable sequentially (one by one)
 *
 * LIFO: Last In First Out
 *
 * Usage: array or linked list
 * 
 * - lookup: O(n)
 * - Pop: O(1)
 * - Push: O(1)
 * - Peek: O(n1) - see the next inline (first item)
 * 
 * Positives vs Negatives:
 * + Fast Operations
 * + Fast Peek
 * + Ordered
 * - Slow Lookup
 * +/- Restrictions apply (Only useful for getting the first or last element quickly/inserting data)
 * 
 * 
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Example Stack Data Structure: Linked List Implementation
 */
class StackLinkedList {

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {

        let newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let topNode = this.top;
            this.top = newNode;
            this.top.next = topNode;
        }

        this.length++;

    }

    pop() {

        if (this.length === 0) {
            return;
        }

        if (this.top === this.bottom) {
            this.bottom === null;
        }

        const topNode = this.top;

        this.top = this.top.next;
        this.length--;

        return topNode;
    }

    isEmpty() {

        if (this.length === 0) {
            return true;
        }

        return false;

    }
}

/**
 * Example Stack Data Structure: Array Implementation
 */
class StackArray {

    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {

        this.array.push(value);

    }

    pop() {
        return this.array.pop();
    }

    isEmpty() {

        if (this.array.length === 0) {
            return true;
        }

        return false;

    }
}

console.log('Data Structure: Stacks - Start');

console.log('Stacks List List Example:');

const stackList = new StackLinkedList();

stackList.push('facebook');
stackList.push('google');
stackList.push('apple');
stackList.push('netflix');

stackList.pop();

console.log(stackList.peek());
console.log(stackList.isEmpty());
console.log(stackList);

console.log('Stack Array Example:');

const stackArray = new StackArray();

stackArray.push('facebook');
stackArray.push('google');
stackArray.push('apple');
stackArray.push('netflix');

stackArray.pop();

console.log(stackArray.peek());
console.log(stackArray.isEmpty());
console.log(stackArray);

console.log('Data Structure: Stacks - End');