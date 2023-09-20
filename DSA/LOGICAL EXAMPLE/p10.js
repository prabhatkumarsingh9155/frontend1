let num=document.getElementById("num");
let out=document.getElementById("output");
function submitHandler(event){
event.preventDefault();
let inp =num.value;
console.log("num=",num.value);


// strings to array
let arr=inp.split(",");
console.log('arr=',arr)


// array of strings to number array conversation
let numArr=arr.map((item)=>{

return Number(item)

})

console.log('numArray=',numArr);

let large=Math.max(...numArr);
let small=Math.min(...numArr);


out.innerHTML=`<h1> largest =${large} and smallest =${small}</h1>`


}