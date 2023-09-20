/*
A
A B
A B C
A B C D
A B C D E



1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5







*
* *
* * *
* * * *
* * * * * 








*/

let n = 5;

let str = "";
let str1 = "";

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str =str+ String.fromCharCode(j + 97); // lowercase a-z
  }
  str += "\n";
}
console.log(str);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str1 += String.fromCharCode(j + 65); 
  }
  str1 += "<br>";
}
document.getElementById("res1").innerHTML = str1;


for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str1 += String.fromCharCode(j + 49); 
    }
    str1 += "<br>";
  }
  document.getElementById("res1").innerHTML = str1;
  
 
  