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
        while (true) {

            if (value < currentNode.value) {

                if (currentNode.left === null) {

                    currentNode.left = newNode;
                    return;

                }

                currentNode = currentNode.left;

            } else if (value > currentNode.value) {

                if (currentNode.right === null) {

                    currentNode.right = newNode;
                    return;

                }

                currentNode = currentNode.right;

            } else {
                console.log('this number already exists');
                return false;
            }

        }
    }

    lookup(value) {

        let currentNode = this.root;

        while (currentNode !== null) {

            if (value < currentNode.value) {

                currentNode = currentNode.left;

            } else if (value > currentNode.value) {

                currentNode = currentNode.right;

            } else if (value === currentNode.value) {

                return currentNode;

            }

            return false;

        }

    }

    mergeNodes(targetNode, parentNode) {

        // find the right child's left most child
        let leftMostNode = targetNode.right.left;
        let leftMostParent = targetNode.right;

        while (leftMostNode.left !== null) {
            leftMostParent = leftMostNode;
            leftMostNode = leftMostNode.left;
        }

        // parent's left subtree is now left most node's right subtree
        leftMostParent.left = leftMostNode.right;
        leftMostNode.left = targetNode.left;
        leftMostNode.right = targetNode.right;

        if (parentNode === null) {
            this.root = leftMostNode;
        } else {
            if (targetNode.value < parentNode.value) {
                parentNode.left = leftMostNode;
            } else if (targetNode.value > parentNode.value) {
                parentNode.right = leftMostNode;
            }
        }

        return parentNode;

    }

    // returns the target node to delete and the parent of the target node
    findTargetNodeAndParent(value) {

        let currentNode = this.root;
        let parentNode = null;
        let targetNode = null;
        while (currentNode !== null) {

            if (currentNode.left !== null && value < currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.left;

            } else if (currentNode.right !== null && value > currentNode.value) {

                parentNode = currentNode;
                currentNode = currentNode.right;

            } else if (currentNode.value !== null && currentNode.value === value) {

                targetNode = currentNode;
                break;

            } else {
                return false;
            }

        }

        return {
            parentNode,
            targetNode
        };
    }


    reorderNodes(targetNode, parentNode, direction = 'left') {

        // if the target node is the root and the child node indended direction does not exist, 
        // delete the root node and move the node in the opporsite direction into it's place
        if (parentNode === null) {
            this.root = targetNodes[direction];
        }

        // if parent is greater then current value, make current left child a child of the parent
        if (targetNode.value < parentNode.value) {
            parentNode.left = targetNode[direction];
        } else if (targetNode.value > parentNode.value) {
            parentNode.right = targetNode[direction];
        }

    }

    remove(value) {

        if (!this.root) {
            return false;
        }

        const targetNodes = this.findTargetNodeAndParent(value);

        if (targetNodes === false) {
            return false;
        }

        let { parentNode, targetNode } = targetNodes;

        if (targetNode.right === null) {

            this.reorderNodes(targetNode, parentNode, 'left');

        } else if (targetNode.right.left === null) {

            targetNode.right.left = targetNode.left;

            this.reorderNodes(targetNode, parentNode, 'right');

        } else {

            this.mergeNodes(targetNode, parentNode);

        }
    }

}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
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
searchTree.insert(2);
searchTree.insert(5);
searchTree.insert(8);
searchTree.insert(10);
searchTree.insert(16);
searchTree.insert(150);
searchTree.insert(180);

searchTree.remove(20);

console.log('Node Lookup: ', searchTree.lookup(20));

//         9
//     4     20
//   1  6  15  170
// 0   2   5   8  10   16  150   180

console.log('Tree: ', traverse(searchTree.root));

console.log('Data Structure: Trees - End');