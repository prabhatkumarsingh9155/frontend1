let base =document.getElementById("base");
let exp=document.getElementById("exp");
let result =document.getElementById("result");

function submitHandler(event){
event.preventDefault();

x=Number(base.value);
y=Number(exp.value);
z=x**y;



/* both method working */
/*let out=recursion(x,y);*/
result.innerHTML=`<h1>RESULT=${z}</h1>`

 }
/* function recursion(x,y){

if(y===0){

return 1;


}else{
return x* recursion(x,y-1)


}



 }*/