import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com";
function Ex2() {
  const [post, setPost] = useState([]);
  /* useEffect => let a component connect to and synchronize with external system
    
    
    */

  const readPost = async () => {
    await fetch(`${URL}/posts`, {
      method: "GET",
      headers: {
        " content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log("output=", res);
      })
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    readPost();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-primary">Ex2</h3>
        </div>
      </div>
      <div className="row">
      {
post && post.map((item,index)=>{
return(
<div className="col-md-4 mt-2 col-sm-6 col-lg-3" key={index}>
<div className="card">
<div className="card-header">
    <h6>{item.id}{item.title}</h6>
</div>
<div className="card-body">
    <p className="text-justify">{item.body}</p>
</div>
</div>

</div>












)







})




      }


      </div>
    </div>
  );
}

export default Ex2;
