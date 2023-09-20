let fInp=document.getElementById('inp');
let result =document.getElementById('result');


const subnitHandler=async(event)=>{

event.preventDefault();
let x=fInp.value;
let res1=test(x);
if(res1){

result.innerHTML=`<h1>input =${x} is polindrom</h1>`;



}else {


    result.innerHTML=`<h1>input =${x} is not polindrom</h1>`;

}



}
// polindrome or not
function test(x){




    if(x.length<=1){

return true


    }

    if(x[0]!==x[x.length-1]){

        return false



    }else{


        return test(x.slice(1,x.lenght-1))

    }
}