class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    _hash(key) { // _ To tell this is a private property
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    } // it's very fast,O(1)

    set(key, value) {
        const address = this._hash(key);
        console.log(address);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data);
    }; //O(1)

    get(key) {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (var i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    console.log(currentBucket[i][1])
                }
            }
        }
        console.log(undefined);
    }; // In most of the cases it is O(1) , but in our case it is O(n)

    keys() {
        const keysArray = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                if (this.data[i].length > 1) {
                    for (var j = 0; j < this.data[i].length; j++) {
                        keysArray.push(this.data[i][j][0])
                    }
                } else {
                    keysArray.push(this.data[i][0][0])
                }
            }
        }
        console.log(keysArray);
    }

}


const myHashTable = new HashTable(20);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 10000);
// myHashTable.get("grapes");
myHashTable.keys();