import React, { useState } from "react"


function Editemp() {
    const[emp,setEmp]=useState(true)
    const[dept,setDept]=useState(false)

    const handleremp=()=>{
       setEmp(true)
       setDept(false)
    }
    const handlerdept=()=>{
        setEmp(false)
        setDept(true)
    }
	return(
       <>
       
     
       <div className="user-ragistration">
	<div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left ">
                        
                       <h3>Welcome</h3>
                        <p>You are in employee management system!</p>
                       
                    </div>
                    <div className="col-md-9 register-right">  
                        <div className="tab-content" >                            <div>
                                <h3 className="register-heading">Edit Employee</h3>
                                <div className="row register-form">
                                    <div className="col-md-7 " id="hi">
                                        <div className="form-group">
                                            <input type="text" className="form-control " placeholder="Employee Name *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option className="hidden"  selected >Please select your Department *</option>
                                                <option>What is your Birthdate?</option>
                                                <option>What is Your old Phone Number</option>
                                                <option>What is your Pet Name?</option>
                                            </select>
                                        </div >
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Enter Your Email Id *" value="" />
                                        </div>
                                        <div className="form-group">
                                            <input type="date" className="form-control" placeholder="" value="" />
                                        </div>
                                      
                                        
                                        <div className="form-group">
                                            <textarea className="form-control" placeholder="Enter your permanent Address *" value="" ></textarea>
                                        </div>
                                        
                                       
                                    </div>
                                    
                                    <div className="form-group">
                                    <input type="submit" className="btn btn-success btn-md" value="   Add  "/>&nbsp;&nbsp;
                                          <input type="button" className="btn btn-danger btn-md" value="Cancel"/>
                                             
                                    </div>
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
	
        
	)
}
export default Editemp