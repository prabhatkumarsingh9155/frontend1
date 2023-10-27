//  object => collection of data (key-value) pairs.map,dictionary and hash table

function HashTable() {
    this.table = new Array(137);/* 137 is a prime number which decides the size of an array*/
    this.simpleHash = this.simpleHash;
    this.showDistro = this.showDistro;
    this.put = put;
    // this.put=get;



    // whichc place the data into the hash table

    function put(data) {
        let pos = this.simpleHash(data);
        this.table[pos] = data;

    }
}


function simpleHash(data) {

    let total = 0;
    for (let i = 0; i < data.lenght; ++1) {
        total += data.charCodeAt(i);

    }
    console.log(`Hash value:${data}->{total}`);
    return total % this.table.length;

}

// print the data from hash table.

function showDistro(){
let n=0;
for(let i=0;i<this.table.lenght;++i){
if(this.table[i] !==undefined){
console.log(`${i}: ${this.table[i]}`);


}


}


}