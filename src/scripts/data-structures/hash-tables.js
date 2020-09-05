/**
 * 
 * Hash Tables
 * 
 * Every language has a built in hash table
 * Javascript: Objects
 * Ruby: Hashes
 * Python: Dictionaries
 * Java: Maps
 * 
 * 
 * Usually assume a time complecity of O(1)
 * 
 *  * Hash Table Operations - Big O
 * - Lookup: O(1)
 * - Push/Append: O(1)
 * - Insert: O(1)
 * - Delete: O(1) 
 * 
 * Negatives:
 * - Operations occasions become O(n) due to collisions in memory
 * - (it's actually O(n) devided by size of elements in menory: O(n/elements)
 * 
 * Collision Resolutions: https://en.wikipedia.org/wiki/Hash_table
 * 
 */


/**
 * Hash Functions: generates a value of a field lenth of each input it gets
 * See md5 Hash Generator: https://www.md5hashgenerator.com/  / http://www.miraclesalad.com/webtools/md5.php
 * 
 * Indempotent: a function given an input always outputs the same output
 * 
 */


class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    /**
     * hash method:
     * O(1)
     */
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };

    /**
     * set method:
     * O(1)
     */
    set(key, value) {

        const address = this._hash(key);

        // console.log('set hashed key: ', address);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);

        return this.data;

    };

    /**
     * get method:
     * 
     * if no collisions: O(1)
     * if collisions O(n)
     */
    get(key) {

        const address = this._hash(key);

        // console.log('get hashed key: ', hashedKey);

        const currentBucket = this.data[address];

        if (!currentBucket) {
            return undefined;
        }


        let bucketItemValue;
        currentBucket.forEach((bucketItem) => {

            if (key !== bucketItem[0]) {
                return;
            }

            bucketItemValue = bucketItem[1];

        });

        return bucketItemValue;

    };

}

function hashTableExample() {

    console.log('Data Structure: Hash Tables - Start');

    const hashTable = new HashTable(50);

    // allocating fewer memory spaces will cause a collision making the get method O(n)
    // const hashTable = new HashTable(2); 

    hashTable.set('grapes', 10000);
    console.log(hashTable.get('grapes'));

    hashTable.set('apples', 9);
    console.log(hashTable.get('apples'));

    // console.log(hashTable.data);

    console.log('Data Structure: Hash Tables - End');

}

export default hashTableExample;