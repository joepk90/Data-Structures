import arrays from './data-structures/arrays';
import hashTables from './data-structures/hash-tables';
import reverseString from './exercises/reverseString';
import mergeSortedArrays from './exercises/mergeSortedArrays';
import hashTablesExamples from './exercises/hashTables';

/**
 * Data Structures
 */

arrays();
hashTables();


/**
 * Exercises:
 */

console.log('Exercise - reverseString: ', reverseString('I am Joe'));
console.log('Exercise - mergeSortedArrays: ', mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log('Exercise - Hash Tables: ', hashTablesExamples());