let fstart=document.getElementById('start');
let fend=document.getElementById('end');
let result=document.getElementById("result");



const submitHandler=async(event)=>{
event.prevenDefault();


let x=Number(fstart.value);

let y=Number(fend.value);

let res1=range(x,y);
result.innerHTML=`<h1> result=${res1}</h1>;`

}
function range(start,end){
if(end-start===2){// 1,3=2

return[start+1]


}else{
let list=range(start,end-1);
list.push(end-1);
return list


}





}