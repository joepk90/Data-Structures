/**
 * Graphs
 * - A graph is a set of values that are related in a pair wise fashion
 * - One of the most useful and used data structure  in computer science when it comes to ...modelling real life
 * - Perfonamce/big O can get complicated (There are many types of graphs)
 * - Graphs are good when it comes to relationships between data
 * - Due to graphs complications, scaling can sometimes be difficult
 *
 * Common Graph Database:
 * neof4.com: Cypher — The Graph Query Language
 * 
 * Graphs contain:
 * - Nodes (Vertexes)
 * - Edges (connections)
 *
 * Graphs can be used to represent Friendship circles, family trees, networks (i.e. roads connecting cities or the wordwide web)
 * - Amazon: Recommnedtion Engines
 * - Facebook: Social Network
 * - Google Maps: To determine the shortest path
 *
 * Directed and Undirected Graphs
 * - Are connections between nodes bi-directional, or do the nodes only connect one way?
 * 
 * Weighted and Unweighted Graphs
 * edges contain weights (i.e connection between cities on Google maps to work out the shortest distance)
 * 
 * Cyclic vs Acyclic
 * - if a graph is connected similarly to a circle
 * 
 * Example Graph Names: 
 * - Directed Acyclic Graph
 * - Undirected ACyclic Graph
 * - Directed Weighted Graph
 * - Directed Cyclic Grapch
 */


/**
 * Example Graph Structures
 * https://visualgo.net/en/graphds
 * 
 * 
 *          2 ------------0
 *         /  \
 *        /    \
 *       /      \
 *      1        3
 *
 */

/*
 * Edge List Example
 */

const edgeListGraph = [[0, 2], [2, 3], [2, 1], [1, 3]];


/*
 * Adjacent List Example
 */

// index:      0      1        2        3
const adjacentListGraph = [[2], [2, 3], [0, 1, 3], [1, 2]];

/*
 * Adjacent Matrix
 * 0 = false
 * 1 = true
 */
const adjacentMatrixGraph = [
    [0, 0, 1, 0], // index 0 is connected to 2
    [0, 0, 1, 1], // index 1 is connected to 2 and 3
    [1, 1, 0, 1], // index 2 is connected to 0, 1 and 3
    [0, 1, 1, 0], // index 3 is connected to 1 and 2
];

/**
 * Example of creating an undirected, unqeighted graph using the Adjacency List / Hash Table
 */

class Graph {

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {

        if (Array.isArray(this.adjacentList[node])) return 'Node exists!';

        this.adjacentList[node] = [];
        this.numberOfNodes++;

    }

    addEdge(node1, node2) {

        if (!this.adjacentList[node1] || !this.adjacentList[node2]) return 'One or both Nodes do not exist!';

        const doesNode1EdgeExist = this.adjacentList[node1].includes(node2); // O(n) - use a linked list?
        const doesNode2EdgeExist = this.adjacentList[node2].includes(node1); // O(n) - use a linked list?

        if (!doesNode1EdgeExist) {
            this.adjacentList[node1].push(node2);
        }

        if (!doesNode2EdgeExist) {
            this.adjacentList[node2].push(node1);
        }

    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

console.log('Data Structure: Graphs - Start');

const graph = new Graph();
graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');
graph.addVertex('6');
graph.addEdge('3', '1');
graph.addEdge('3', '4');
graph.addEdge('4', '2');
graph.addEdge('4', '5');
graph.addEdge('1', '2');
graph.addEdge('1', '0');
graph.addEdge('0', '2');
graph.addEdge('6', '5');

console.log(graph);
graph.showConnections();
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

console.log('Data Structure: Graphs - End');