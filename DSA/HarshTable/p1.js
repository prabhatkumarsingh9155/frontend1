const names=["david","john","donie","raymomd"];
let hTable=new HashTable();

for(let i=0;i<names.length;i++){
hTable.put(names[i]);

}

// print the data
hTable.showDistro();