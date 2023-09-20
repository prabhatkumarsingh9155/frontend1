import React, { useState } from 'react'

function Ex7(props){
const[num,setNum]=useState(0)
const incValue=(val)=>{
setNum(num+val)


}

return(
<div>
<h1>number as state value</h1>
<h3> num={num}</h3>
<hr/>
<button onClick={()=>incValue(10)}>add +10</button>

<button onClick={()=>incValue(50)}>add +10</button>

</div>


)



}

export default Ex7
