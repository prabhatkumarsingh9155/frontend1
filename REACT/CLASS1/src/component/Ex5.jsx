import React, { useState } from 'react'

function Ex5(props){
// const [state,handler]=usestate(init value)

const [title,settitle]=useState("welcome to react")

const handleState=()=>{
settitle("first strings statement")

}
const handleStrings=()=>{
    settitle("second strings statement")
    
    }

return(
<div>
<h3> state in functional components</h3>
<p> state is an private date in a components</p>
<p> state in component is essential to mange and communicate data in your application</p>

<p> in functional component state is defined using useState hook</p>
<h3> {title}</h3>

<button onClick={handleState}> update state</button>{/* function binding*/}

<button onClick={handleStrings}> update state</button>{/* callback*/}

</div>




)






}

export default Ex5
