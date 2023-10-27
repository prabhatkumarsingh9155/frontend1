import React, { useState } from "react";

function Ex1() {

    const [course,setCourse] = useState("MERN Stack")
    const [view,setView] = useState(false)
    const [num,setNum] = useState(10)
    const [emp,setEmp] = useState({
        name: "John",
        email: "john@gmaul.com",
        age: 24

    })
    
    const [colors,setColors] = useState(["red", "blue", "green"])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-3 text-primary">Reaquest path not found</h3>
                </div>
            </div>
         
            <div className="row">
                <div className="col-md-12 ">
             </div>
             </div>
        </div>
    )
}

export default Ex1