/**
 * Binary Tree
 *
 * JS Package: https://github.com/afiore/arboreal
 * 
 * A Balanced Binary Tree:
 * Level 0: 2^0 = 1
 * Level 1: 2^1 = 2
 * Level 2: 2^2 = 4
 * Level 3: 2^3 = 8
 *
 *
 */

// h=Levels
// number of nodes = 2^h - 1
// log nodes = steps


/**
 * Binary Search Tree
 * 
 * Rules:
 * 1. All child nodes in the right hand branch of the tree must be greater then the current node
 * 2. A node can only have up to 2 children
 * 
 * Advantages:
 * - Operations are better than O(n) (assuming the tree is balanced)
 * - Ordered
 * - Flexible Size
 * 
 * Disadvantaged:
 * - no O(1) operations
 * 
 * Operations: 
 * Lookup: O(log N)
 * Insert: O(log N)
 * Delete: O(log N)
 * 
 * Data is structured - they preserves relationships
 * - Parent node
 * - Sub node
 * - Sub node
 * 
 * Good for searching/comparing things'
 * Not always the fastest, but under some conditions out perform objects and arrays
 * 
 */

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        let testNode = this.root;
        while (testNode !== null) {

            if (currentNode === null) {

                currentNode = newNode;

                testNode = null;

            }
            else if (value > currentNode.value) {

                if (currentNode.right === null) {

                    currentNode.right = newNode;

                    testNode = null;

                } else {
                    currentNode = currentNode.right;

                }

            }
            else if (value < currentNode.value) {

                if (currentNode.left === null) {

                    currentNode.left = newNode;

                    testNode = null;

                }
                else {
                    currentNode = currentNode.left;
                }

            } else {
                console.log('this number already exists');
                testNode = null;
            }

        }
    }

    lookup(value) {

    }


    remove() {

    }

}

console.log('Data Structure: Trees - Start');

const searchTree = new BinarySearchTree();
searchTree.insert(9);
searchTree.insert(4);
searchTree.insert(6);
searchTree.insert(20);
searchTree.insert(170);
searchTree.insert(15);
searchTree.insert(1);

//     9
//  4     20
//1  6  15  170

console.log('Tree: ', searchTree);

console.log('Data Structure: Trees - End');