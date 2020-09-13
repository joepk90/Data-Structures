/**
 * Other Types of Tree Data Structues
 *
 * Auto Balanced Trees Data Types (Often used on production)
 * https://stackoverflow.com/questions/13852870/red-black-tree-over-avl-tree
 * - AVL Trees
 * - Red Black Trees
 *
 *
 * Heaps (Not to be confused with memory heap)
 * - Binary Heap: two children per node
 * - Every node Level 1 has a greater value than every node on the next level down
 * - No order from left to right: The left child node does not need to be less than the right child nodes value
 * - Max Heap (Root node is largest)
 * - Min Heap (Root node is smallest)
 *
 * Advantages:
 * - Usually better than O(n)
 * - Good for priortiy (Priority Queues)
 * - Flexible Size
 * - Fast Insert
 *
 * Disadvantaged
 * - Slow Lookup
 *
 * Operations:
 * - Lookups: O(n) - Due to Binary Heaps rules, Logarithmic searching does not work
 * - Inserts: Worst case - O(log n) / Best Case O(1) --- data restructures can be required
 * - Good at performing comparative operations
 *   - For example - get all values over a certain number (would be very fast)
 *
 * Trie (Prefix Tree):
 * Specialised Tree used for searching
 * In most cases can outperform Binary Tree, Hash Tables etc. depending on type of search
 * Good for autocompletion
 * Big O = O(length of word)
 *
 */