import React,{useEffect, useState} from "react";
const url='https://jsonplaceholder.typicode.com'

// custom hook

function usePost(props){

const [post,setPost]=useState([])

const getData=async()=>{
await fetch(`${url}/posts`)
.then(res=>res.json())
.then(res=>{
console.log('post=',res)
setPost(res)



}).catch(err=>console.log(err.message))


}
useEffect(()=>{
getData()


},[])
return{

props:[props,setPost]


}

}

export default usePost