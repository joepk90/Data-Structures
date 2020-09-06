/**
* Queues
* Linear Data structure.
* Traversable sequentially (one by one)
* 
* Usage: Linked List (Arrays not suitable for creating a Queue)
*
* FIFO: First In First Out
*
* - lookup: O(n)
* - Enqueue (push): O(1)
* - Dequeue (pop): O(1)
* - Peek: O(n1) - see the next inline (last item)
* 
* 
* Positives vs Negatives:
* + Fast Operations
* + Fast Peek
* + Ordered
* - Slow Lookup
* +/- Restrictions apply (Only useful for getting the first or last element quickly/inserting data)
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {

        const isEmpty = this.isEmpty();

        if (isEmpty) {
            return 'queue is empty';
        }

        return this.first;

    }

    enqueue(value) {

        let newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {

            // O(1)
            this.last.next = newNode;
            this.last = newNode;


            // if (this.first.next === null) {
            //     this.first.next = newNode;
            // } else {

            //    O(n)
            //     let currentNode = this.first;
            //     while (currentNode.next !== null) {
            //         currentNode = currentNode.next;
            //     }

            //     currentNode.next = newNode;

            //     this.length++;

            // }
        }

        this.length++;

    }

    dequeue() {

        if (this.length === 0) {
            return;
        }

        if (this.first === this.last) {
            this.last === null;
        }

        const firstNode = this.first;

        this.first = this.first.next;
        this.length--;

        return firstNode;

    }

    isEmpty() {

        if (this.length === 0) {
            return true;
        }

        return false;

    }

}

console.log('Data Structure: Queues - Start');

const queue = new Queue();

queue.enqueue('Joe');
queue.enqueue('Nick');
queue.enqueue('Alex');
queue.enqueue('Ben');

queue.dequeue();
// queue.dequeue();

console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue);

console.log('Data Structure: Queues - End');