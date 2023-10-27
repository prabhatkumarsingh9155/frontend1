let pbook =new Dictionary();
pbook.add("john","111");
pbook.add("David","345");
pbook.add("Mike","567");



console.log("john's extension="+pbook.find("john"));
console.log("David's extension="+pbook.find("David"));

console.log("Mike's extension="+pbook.find("Mike"));

console.log(`\n`);


pbook.showAll();

console.log(`\n`);
pbook.remove("David");

pbook.showAll();