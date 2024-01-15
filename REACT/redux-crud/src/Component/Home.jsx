import React from 'react'

import { useDispatch } from 'react-redux'
import { retriveAll } from '../Actions/UserAction'
import { toast } from 'react-toastify'

function Home() {

  const dispatch=useDispatch()
  const readData=async()=>{
await dispatch(retriveAll())
.unwrap()
.then(res=>{
console.log('res=',res)


}).catch(err=> toast.error(err.message))


  }

  

  return (
    <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>

                    <h3 className='display-3 text-success'>Home</h3>
                </div>

            </div>


            <div className='row'>
{

Users && userEvent.map((item,index)=>{
  return(
<div className='col-md-6 col-sm-12 col-lg-4 mt-2 mb-2 ' key={index}>
<div className='card'>
  <h4 className='text-center'>{item.name}</h4>
</div>
<div className='card-body'>
  <p>
<strong>email</strong>
<span className='text-success'></span>

  </p>
</div>



</div>




  )
})












}








            </div>
        </div>

        
  )
}

export default Home
