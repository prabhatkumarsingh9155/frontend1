let pr =document.getElementById('pr');
let ti =document.getElementById('yr');
let rate =document.getElementById('rate');


let out =document.getElementById('output');

function submitHandler(e){
e.preventDefault();



let p =Number(pr.value);
let t=Number(ti.value);
let r =Number(rate.value);


let a=(p*t*r)/100;
out.innerHTML=`<div>
<h1>simple intrest=${a}</h1>
<h3>princple=${p}</h3>
<h3>rate of intrest =${r}</h3>
<h3>time(year)=${t}</h3>



</div>`;






}
