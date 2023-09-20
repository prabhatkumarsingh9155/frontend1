import React, { Component } from 'react'
const p=234;
const q=344;

const isAdmin=true;

const course={

title:"react",
content:["components","state","props","data binding","form"]

}

class Ex4 extends Component{

constructor(props){
super(props)


}

render(){
return(
<div> <h3> class components</h3>
<h1>{course.title}</h1></div>



)



}

}

 export default Ex4
