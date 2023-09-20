let op=document.getElementById("op");
let out=document.getElementById('output');

function submitHandler(){
let val=op.value;

switch (val) {
    case "square":
    let a =prompt('enter a side value');
    let area=areaSqauare(Number(a))
    out.innerText=` Area of square=${area} units`
        break;

        case "circle":
        let r=Number(prompt('enter a side value'));
        
        let areac=Math.PI*(r*r)
        out.innerText=` Area of circle=${areac} units`
        break;

        case "rect":
        let l=Number(prompt('enter lenght of rectangle'));
        let w=Number(prompt('enter width rectangle'));

         let areaa=l*w;
         out.innerText=` Area of rectangle=${areaa} units`;


        break;

        case "tri":
            let base=Number(prompt('enter base of triangle'));
            let height=Number(prompt('enter height triangle'));
        let BaseHeight=base*height;
        let prabhat=1/2;
        AreaofTriangle=prabhat*BaseHeight;
        out.innerText=` Area of triangle=${AreaofTriangle} units`;  
        break;

        default :
        out.innerText=` choose proper shapes`
        break;
}



function areaSqauare(a){

 return a*a


}

}