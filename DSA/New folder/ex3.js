let user =new CLList();

user.insert("john","head");
user.insert("Robo","John");
user.insert("Ram","Robo");

user.display();
console.log('\n');

user.remove("John");
user.display();
console.log('\n');

user.remove("Robo");
user.display();
console.log(`\n`);

user.remove("Ram");
user.display();
console.log(`\n`);