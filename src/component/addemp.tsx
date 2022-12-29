import React, { useState } from "react"
import Validator from "validator";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AnyARecord } from "dns";
import { AxiosResponse } from 'axios'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { ApiResponse } from '../models/apiresponse.model'
import {  failureDeptActionCreator, initiateDeptActionCreator, successDeptActionCreator } from '../redux/productSlice'
import { AppDispatch, RootState } from '../redux/store'
import { addEmp, getAllDepartments, getAllEmployees, updateEmployee } from '../services/services'
import { DepartmentData } from "../models/department";
import { EmployeeData } from "../models/employeemodel";

function Addemp(props:any) {

    
   
      
    // const[emp,setEmp]=useState(true)
    // const[dept,setDept]=useState(false)

    // const handleremp=()=>{
    //    setEmp(true)
    //    setDept(false)
    // }
    // const handlerdept=()=>{
    //     setEmp(false)
    //     setDept(true)
    // }
    const [empName, setEmpName] = useState('')
    const [dptName, setdptName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState("2014-02-09")
    const [address, setAddress] = useState('')
    const [emailError, setEmailError] = useState('')
    const [dateError, setDateError] = useState('')
    const [nameError,setNameError]=useState('')
    const[addressError,setAddressError]=useState('')
    const[dis,setDis]=useState(true)
    const [opt,setOpt]=useState(true)
    const[disable,setDisable]=useState(false)
   

    


     
    let employees=props.employees
    let depts = props.departments
    let id=props.id
    console.log(id);
    
    
    

    let empobj:EmployeeData|null;
    if(props.id!=""){
       
        empobj=props.employees.find((value:any)=>{
            return (value.EmployeeId===props.id)
        })
       
    }
      const handleDate=(e:any)=>{
        if(e.target.value){
            const dateArr=e.target.value.split("-")
            const[year,month,day]=dateArr
            if(Number(year)>=1900 && Number(year)<=2022 && year){
                setDateError("")
            }else{
               
                setDateError("Enter Valid Date")
            }
            
        }
      }
    

    const handleShowButton=()=>{
        if(dptName!=''  && empName!='' && email!=''  && emailError=='' && nameError==''&&date!="" )
      {  
        console.log(date);
        
        setDis(false)
      }
    }
    const handleShwButton=()=>{
        if(dptName=='' || empName=='' || email==''  ||emailError!='' || nameError!=''||date=="" )
      {
        setDis(true)
         }
    }

    const handleClose=()=>{
        setDisable(false)
        
        setAddress("")
        setDate("")
        setEmail("")
        setEmpName("")
        setdptName("")
     
        props.handlerClose(false)
    }
    //const handle
    
    // const validateEmail = (e: any) => {
    //     var email = e.target.value

    //     if (Validator.isEmail(email)) {
    //         setEmailError('')
    //     } else {
    //         setEmailError('Enter valid Email!')
    //     }
    // }
     
    const validateName = (e: any) => {
        var name = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/

        if (e.target.value.match(name)) {
            setNameError('')
        } else {
            setNameError('Enter valid Name!')
        }
    }
    const validateAddress= (e: any) => {
        var address = e.target.value

        if (address!="") {
            setAddressError('')
        } else {
            setAddressError('Enter address')
        }
    }

    const handlenameChange = (e: any) => {
        setEmpName(e.target.value)

    }

    const handledeptnameChange = (e: any) => {
        setdptName(e.target.value)
    }

    const handleemailChange = (event: any) => {
        setEmail(event.target.value)
    }

    const handledateChange = (event: any) => {
        setDate(event.target.value)
    }

    const handleaddressChange = (event: any) => {
        setAddress(event.target.value)
    }
    // const handleopt=()=>{
    //     setOpt(false)
    // }
   
    
    const addData=(emp:any)=>{
     const AxiosAdd=addEmp(emp)
     AxiosAdd.then((res)=>{
               console.log(res);
               props.handleFetch()
               
     },(err)=>{
      console.log(err.message);
      
     })
    }
    const updateData=(emp:any)=>{
        const Axiosupdate=updateEmployee(emp,props.id)
        Axiosupdate.then((res)=>{
                  console.log(res);
                  props.handleFetch()
                  props.handleDeActivate()
                  
        },(err)=>{
         console.log(err.message);
         
        })
       }
   console.log(props.id);
   
   

   const handlerSave=()=>{
    console.log("hiiiii");

    let EmployeeDetail={
      
        DepartmentId:dptName,
        EmployeeName:empName,
        EmailId:email,
        DOB:date,
        Address:address!=""?address:"NA"
     }
     console.log(EmployeeDetail);
     

        let ConvertEmployee=JSON.stringify(EmployeeDetail)
        setAddress('')
        setDate('')
        setEmail('')
        setEmpName('')
        setEmail('')
        if(props.id){
          updateData(ConvertEmployee)
          props.handleEditStart(true)
         props. handleEditEnd(false)
        }
        else{
        addData(ConvertEmployee)  
       props.handleAddStart(true)
       props.handleAddEnd(false)
        }  
    
   }
   const handlecheck=(e:any)=>{
    let found= employees.filter((eN:any) =>eN.EmailId===e.target.value )
       
    if(found.length>0){
     if(found[0].EmailId===e.target.value ){
        setEmailError('Email is already exit')
        
     }
     else{ 
        setEmailError('')
     }
     }else{
        var email = e.target.value

        if (Validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
        
     }
    
   }
  useEffect(()=>{
     if(id!==""){
        if(empobj!==null){
           
            let arr=empobj.DOB.split("-")
            const[year,month,day]=arr
            
            
            console.log(year);
            console.log(month);
            console.log(day);
            
            
            
            setAddress(empobj.Address)
             setDate(`${year}-${month}-${day}`)
            setEmail(empobj.EmailId)
            setEmpName(empobj.EmployeeName)
            setdptName(empobj.DepartmentId)
             setDisable(true)
        }
    }else{
        setAddress('')
        setDate("")
        setEmail("")
        setEmpName("")
        setdptName("")
        setDisable(false)
    }
       

       
     
  },[id])

  console.log(props.departments)
 const Handledatedisable=(e:any)=>{
    
    
     e.preventDefault();
     
     setDate(e.target.value)
     handleShowButton()
  
 }
 



    return(
        <>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left sidebar ">
                     
                        <div>
                        <h3><b>Welcome</b></h3>
                        <p>You are in employee management system!</p>
                        </div>
                       
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" >
                            <div>
                                <h3 className="register-heading ">Add Employee</h3>
                                <div className="row register-form">
                                    <div className="col-md-7 " id="hi">
                                        <div className="form-group">
                                           <label className="alignLeft">Enter Employee Name <span className="star">*</span> :</label>
                                            <input type="text" className="form-control" disabled={disable} placeholder="Enter Employee Name *" value={empName} onChange={(e:any)=>{
                                                 handlenameChange(e)
                                                 validateName(e)
                                                 handleShowButton()
                                                 handleShwButton()
                                            }}  />
                                             <span className="errortext" style={{
                                                fontWeight: 'bold',
                                                color: 'red',
                                            }}>{nameError}</span>
                                        </div>
                                        <div className="form-group">
                                        <label className="alignLeft">Enter Employee DOB <span className="star">*</span>:</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder=""
                                                value={date}
                                              
                                                max={new Date().toISOString().split("T")[0]}
                                                disabled={disable}
                                                required
                                                onKeyDown={
                                                    (e:any)=>{
                                                        Handledatedisable(e)
                                                    }
                                                }
                                                
                                                onChange={(e:any)=>{
                                                    handledateChange(e)
                                                    handleDate(e)
                                                    // handleShowButton()
                                                    // handleShwButton()
                                                   
                                                }}
                                               
                                                />
                                                 <span className="errortext" style={{
                                                fontWeight: 'bold',
                                                color: 'red',
                                              
                                            }}>{dateError}</span>
                                        </div>
                                        <div className="form-group">
                                        <label className="alignLeft">Select Employee Department <span className="star">*</span> :</label>
                                            <select className="form-control"
                                             value={dptName} 
                                             disabled={disable}
                                             
                                            onChange={(e:any)=>{
                                                handledeptnameChange(e)
                                                 handleShowButton()
                                                 handleShwButton()
                                            }} placeholder="Please Select Your Department *">
                                               {  opt&&<option value="">Please Select Department</option>

                                               }
                                                {
                                                      
                                                    //  props.departments.map((dept:DepartmentData)=>{

                                                    //     <option value={dept.DepartmentId} key={dept.DepartmentId}>{dept.DepartmentName}</option>
                                                    //  })

                                                    depts.map((dept:any) => <option value={dept.DepartmentName} key={dept.DepartmentId}>{dept.DepartmentName}</option>)
                                                }
                                            </select>
                                        </div >
                                        <div className="form-group">
                                        <label className="alignLeft">Enter Employee Email Id <span className="star">*</span> :</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Your Email Id *"
                                                disabled={disable}
                                                value={email}
                                                onChange={(e: any) => {
                                                    // validateEmail(e)
                                                    handleemailChange(e)
                                                    handleShowButton()
                                                    handleShwButton()
                                                    handlecheck(e)
                                                }} />
                                            <span className="errortext" style={{
                                                fontWeight: 'bold',
                                                color: 'red',
                                              
                                            }}>{emailError}</span>

                                        </div>
                                      

                                        
                                        <div className="form-group">
                                        <label className="alignLeft">Enter Employee Address :</label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Enter your permanent Address "
                                                maxLength={500}
                                                value={address}
                                               
                                                onChange={(e:any)=>{
                                                  handleaddressChange(e)
                                                 //  validateAddress(e)
                                                   handleShowButton()
                                                   handleShwButton()
                                                }} ></textarea>
                                                 <span className="errortext" style={{
                                                fontWeight: 'bold',
                                                color: 'red',
                                            }}>{addressError}</span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                    <Stack spacing={2} direction="row">
                                    
                                      <Button  variant="contained" color="primary" className="savebtn" style={{color:"black"}} sx={{width:100,marginLeft:38,}} disabled={dis}  onClick={
                                    
                                     ()=>{
                                           
                                            handlerSave()
                                            handleClose()
                                        }
                                      }>Save</Button>
                                      <Button variant="contained" color='error' style={{color:"black",fontStyle:"bold"}} onClick={
                                        ()=>{
                                            handleClose()
                                            props.handleDeActivate()
                                            }}  sx={{width:100}}>Cancel</Button>
                                    
                                    </Stack>
                                  

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
export default Addemp





