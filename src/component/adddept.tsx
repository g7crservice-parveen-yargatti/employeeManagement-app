import React, { useState } from 'react'
import './addemp.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { setTextRange } from 'typescript';
import { addDept } from '../services/services';

function Adddepartment(props:any) {
    const[deptName,setDptName]=useState('');
    const[dis,setDis]=useState(true)
    const[txt,setTxt]=useState("")


    let depart=props.departments
    const handleNameChange=(event:any)=>{
        setDptName(event.target.value)
    }
    const handleClose=()=>{
        props.handlerClose(false)
    }
    // const handleShowButton=(e:any)=>{
    //     if(e.target.value!=="")
    //   {
    //     setDis(false)
    //      }
    // }
    const handleShwButton=(e:any)=>{
        if(e.target.value=="")
      {
        setDis(true)
         }
    }
    const addData=(dept:any)=>{
        const add=addDept(dept)
        add.then((res)=>{
                  console.log(res);
                  props.handleFetch()
                  props.handleAddDeptStart(true)
                  props.handleAddDeptEnd(false)
                  
        },(err)=>{
         console.log(err.message);
         
        })
       }
    const handlerSave=()=>{
        console.log("hiiiii");
        let DepartmentDetail={
            DepartmentName:deptName,    
         }
              let ConvertDepartment=JSON.stringify(DepartmentDetail)
            setDptName('')
            addData(ConvertDepartment)  
       }
       const handlechk=(e:any)=>{
        let found= depart.filter((eN:any) =>eN.DepartmentName===e.target.value )
       
       if(found.length>0){
        if(found[0].DepartmentName===e.target.value ){
            console.log("if");
            
            found=[]
            setTxt("This Department already exit") 
            setDis(true)
        }
        else{
            console.log("else");
            
            setTxt("")
            setDis(false)
        }
        }else{
            setTxt("")
            setDis(false)
        }
       }
    return (
        <div>
           <div className="user-ragistration">
                <div className="container register">
                    <div className="row" >
                        <div className="col-md-3 register-left sidebar">
                          <div>
                            <h3>Welcome</h3>
                            <p>You are in employee management system!</p>
                            </div>
                        </div>
                        <div className="col-md-9 register-right">
                            <div className="tab-content" >
                                <div>
                                    <h3 className="register-heading">Add Department</h3>
                                    <div className="row register-form">
                                        <div className="col-md-7 " id="hi">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="* Enter Department Name " value={deptName} onChange={(e:any)=>{

                                               
                                               handleNameChange(e)
                                               handlechk(e)
                                            //    handleShowButton(e)
                                               handleShwButton(e)
                                               
                                                }} />
                                                <span className="errortext" style={{
                                                fontWeight: 'bold',
                                                marginLeft:"20%",
                                                color: 'red',
                                            }}>{txt}</span>
                                            </div>
                                            
                                            <div className="form-group">
                                                
                                            </div >
                                            <div className="form-group">
                                            </div>
                                            <div className="form-group">
                                            </div>


                                            <div className="form-group">
                                            </div>


                                        </div>

                                        <div className="form-group">
                                        <Stack spacing={2} direction="row">
                                       
                                       <Button variant="contained" color='success' disabled={dis} sx={{width:100,marginLeft:38}} onClick={
                                        ()=>{
                                            handleClose()
                                            handlerSave()
                                        }
                                       } >Save</Button>
                                       <Button variant="contained" color='error'   sx={{width:100}} onClick={()=>{ handleClose()}}>Cancel</Button>
                                     </Stack>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        
        </div>
    )
}

export default Adddepartment
