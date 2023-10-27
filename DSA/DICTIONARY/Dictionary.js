



function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}

// this function takes 2 params, a key and a value, the key is the index for the value elements
function add(key,val) {
    this.dataStore[key] = val;
} 

// this function take a key as its arrangment and return the value associate with it

function find(key) {
    return this.dataStore[key];
}
// removing a key-value pair from a dictionary involves using a built in javascript function:delete
// this function is part of the object class and take  rerfrence to  key as its argument

function remove(key) {
    delete this.dataStore[key];
}


// we'd like to be able to view all the key-value pair in a dictionary

function showAll() {
    let data = Object.keys(this.dataStore);
    data.forEach((item,key) => {
        console.log(`index = ${key} and key ${item} and value = ${this.dataStore [item]}`);
    });
}