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
let str2="";
let str3=""
let str4=""
let str5=""
/*for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str =str+ String.fromCharCode(j + 97); // lowercase a-z
  }
  str += "\n";
}
console.log(str);*/ 




for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    str += String.fromCharCode(j + 65); 
  }
  str += "<br>";
}
document.getElementById("res").innerHTML = str;




for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str1 += String.fromCharCode(j + 49); 
    }
    str1 += "<br>";
  }
  document.getElementById("res1").innerHTML = str1;
  




  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str2 += "*" 
    }
    str2 += "<br>";
  }
  document.getElementById("res2").innerHTML = str2;
  
 /*
 
 
 1
 22
 333
 4444
 55555*/
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str3 += `${i}`
    }
    str3 += "<br>";
  }
  document.getElementById("res3").innerHTML = str3;
  /*
  
  
  
  
  1
  2 3
  4 5 6
  7 8 9 10
  11 12 13 14 15*/
  let count=1;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str4 += `${count}&nbsp`
      count++;
    }
    str4 += "<br>";
  }
  document.getElementById("res4").innerHTML = str4;
  /*1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5   */



  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      str5 += "&nbsp;&nbsp;";
      
    }

    // extra space 


    for(let k=1; k<=i;k++){

      str5 += "&nbsp;&nbsp;"+ k;

    }

    str5+= `<br>`;
  }
  document.getElementById("res5").innerHTML = str5;