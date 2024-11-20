// function hash(key, arrayLen){
//     let total = 0;
//     for (const char of key) {
//         let value = char.charCodeAt(0)-96;
//         total = (total+value) % arrayLen;
//     }
//
//     return total;
// }


// console.log(hash('cyan',10))
// console.log(hash('blue',10))
// console.log(hash('yellow',10))
// console.log(hash('green',10))


//Improving
// function hashImproved(key, arrayLen){
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0)-96;
//         total = (total * WEIRD_PRIME + value) % arrayLen;
//     }
//
//     return total;
// }
//
// console.log(hashImproved('hello',13))
// console.log(hashImproved('goodbye',13))

//Hash Table class

class HashTable{
    constructor(size=53) {
        this.keyMap = new Array(size);
    }
     _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0)-96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    set(key, value){
        const index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
        return this.keyMap;
    }

    get(key){
        let index = this._hash(key)
        if(!this.keyMap[index]) return undefined

        if(this.keyMap[index].length === 1)
            return this.keyMap[index][0][1];
        else{
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key)
                    return this.keyMap[index][i][1]
            }
        }
    }

    keys(){
        let keys = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!keys.includes(this.keyMap[i][j][0])){
                        keys.push(this.keyMap[i][j][0])
                    }
                }
            }
        }

        return keys;
    }

    values(){
        let values = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }

        return values;
    }
}

let hashTable = new HashTable(3);
hashTable.set('blue', '#2218ab')
hashTable.set('yellow', '#f4c00e')
hashTable.set('green', '#4eca2f')
hashTable.set('red', '#ce1111')
hashTable.set('gr', '#565651')
hashTable.set('duplicated', '#565651')
// console.log(hashTable.get('yellow'))
console.log(hashTable.keys())
console.log(hashTable.values())
// console.log(hashTable)