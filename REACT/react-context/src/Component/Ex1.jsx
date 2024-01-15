import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const Ex1 = (props) => {
  const context = useContext(DataContext);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">Example</h3>


        </div>
      </div>
      <div className="row">
{
post && posts.map((item,index)=>{
return <PostItem key ={index} {...item}/>

})


}

      </div>
    </div >
  );
};

export default Ex1;
