import React, { ReactElement, useEffect, useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';

import Addemp from './addemp'
import Adddepartment from './adddept'
import Stack from '@mui/material/Stack';
import './employee.css'
import { EmpData } from './empdefinedata'
import Paper from '@mui/material/Paper/Paper'
import Box from '@mui/material/Box/Box'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { JsxElement } from 'typescript'
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'

import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

import { AppDispatch, RootState } from '../redux/store'
import {  empidActionCreator, failureDeptActionCreator,  failureEmpActionCreator, initiateDeptActionCreator, initiateEmpActionCreator, successDeptActionCreator, successEmpActionCreator } from '../redux/productSlice'
import { deleteEmployee, getAllDepartments, getAllEmployees } from '../services/services'
import { AxiosResponse } from 'axios'
import { DepartmentData } from '../models/department'
import { ApiResponse } from '../models/apiresponse.model'
import { EmployeeData } from '../models/employeemodel'
const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
  };
  type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function Employee() {
	const [con,setCon]=useState(false)
	const[first,setFirst]=useState(0)
	const[last,setLast]=useState(8)
	const[filt,setFilt]=useState("")
	const[chk,setChk]=useState(false)
	const[isbackground,setBackground]=useState(false)
	const[rowIsActive,setRowIsActive]=useState('')

	const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleclose = () => {
    setOpen(false);
  };

    const DeparmentState = useSelector((states: RootState) => states.allDepartments)
        const dispatchFnRef1 = useDispatch<AppDispatch>()
    
        const { department } = DeparmentState
            const fetchDeptData = () => {
        const initiateAction = initiateDeptActionCreator()
        dispatchFnRef1(initiateAction)
        const promise = getAllDepartments()
        promise
            .then(
                (resp: AxiosResponse<ApiResponse<DepartmentData[]>>) => {
                    const apiResponse = resp.data
                    if (apiResponse.data !== null) {
                        const successAction = successDeptActionCreator(apiResponse.data)
                        dispatchFnRef(successAction)
						console.log(employee)
                    } else {
                        const failureAction = failureDeptActionCreator(apiResponse.message)
                        dispatchFnRef(failureAction)
                    }
                },
                (err) => {
                    const failureAction = failureDeptActionCreator(err.message)
                    dispatchFnRef(failureAction)
                }
            )
		}
	

	const EmployeeState = useSelector((states: RootState) => states.allEmployees)
    const dispatchFnRef = useDispatch<AppDispatch>()

    const { loading, errorMessage,employee,employeeId } = EmployeeState
	const fetchEmpData = () => {
        const initiateAction = initiateEmpActionCreator()
        dispatchFnRef(initiateAction)
        const promise = getAllEmployees()
        promise
            .then(
                (resp: AxiosResponse<ApiResponse<EmployeeData[]>>) => {
                    const apiResponse = resp.data
                    if (apiResponse.data !== null) {
                        const successAction = successEmpActionCreator(apiResponse.data.reverse())
                        dispatchFnRef(successAction)
					
						
						
                    } else {
                        const failureAction = failureEmpActionCreator(apiResponse.message)
                        dispatchFnRef(failureAction)
                    }
                },
                (err) => {
                    const failureAction = failureEmpActionCreator(err.message)
                    dispatchFnRef(failureAction)
                }
            )
    }
    console.log(employee);
    console.log(loading);
    console.log(errorMessage);
	console.log(department);
	
    const handlePrev=()=>{
		if(first>0 && last>8){
            setFirst(first-8)
			setLast(last-8)
		}
	} 
	const handleNext=()=>{
			if(employee?.length!=null){
					if(first>=0 && last<employee.length){
						setFirst(first+8)
						setLast(last+8)
					}
		}
	} 
	const handleFilter=(e:any)=>{
           setFilt(e.target.value)
		   const found=employee?.filter(en => (en.EmployeeName.toLowerCase().includes(e.target.value.toLowerCase())))
		   console.log(found);
		   console.log(found?.length);
		   
		   if (found?.length===0 ){
			setChk(true)
		   }
		   if(found?.length!==0){
			setChk(false)
		   }
	}
    useEffect(()=>{

	},[first,last])
    
    
	const handleCon=()=>{
		setdept(false)
		// if(con==true){
		// 	setCon(false)
		// 	setCon(true)
		// }
		const fetchingEmpId =empidActionCreator("")
		dispatchFnRef(fetchingEmpId)
		console.log(employeeId);
		
		con===true?setCon(false):setCon(true)
	}
    
	const [dept,setdept]=useState(false)
	const handleDept=()=>
	{
		setCon(false)
		dept===true?setdept(false):setdept(true)
	}
    const handleClose=(val:any)=>{
		
		
		setCon(val)
		setdept(val)
	}
    const fetchCall=()=>{
		fetchEmpData();
		fetchDeptData();
	}
	const removeData=(id:string)=>{
		const remove=deleteEmployee(id)
		remove.then((res)=>{
          console.log(res);
		  fetchEmpData();
		  fetchDeptData();
		},
		(err:any)=>{
          console.log(err.message);
		  
		})
	}

    
	const handleEmpId=(value:any)=>{
		const fetchingEmpId =empidActionCreator(value)
		dispatchFnRef(fetchingEmpId)
		
		
		
		
		setCon(true)
		setdept(false)
	}

	 useEffect(()=>{
      fetchEmpData();
	  fetchDeptData();
	
	  
	 },[])

	 const [open1, setOpen1] = React.useState(false);
	 const [transition, setTransition] = React.useState<
	   React.ComponentType<TransitionProps> | undefined
	 >(undefined);

      const timesup1=()=>{
		setTimeout(()=>{ setOpen1(false)},2000)
	  }
      const timesstart1=()=>{
		setTimeout(()=>{ setOpen1(true)
		
		
		},1000)}

	 const handleClick1 = (Transition: React.ComponentType<TransitionProps>) => () => {
	   setTransition(() => Transition);
	   setOpen1(true);
	 };
   
	 const handleClose1 = () => {
	   setOpen1(false);
	 };

	 const [open2, setOpen2] = React.useState(false);
	 const [transition2, setTransition2] = React.useState<
	   React.ComponentType<TransitionProps> | undefined
	 >(undefined);
      const timesup2=()=>{
		setTimeout(()=>{ setOpen2(false)},3000)
	  }
      const timesstart2=()=>{
		setTimeout(()=>{ setOpen2(true)},1000)
	  }


	  const [open3, setOpen3] = React.useState(false);
	 const [transition3, setTransition3] = React.useState<
	   React.ComponentType<TransitionProps> | undefined
	 >(undefined);
      const timesup3=()=>{
		setTimeout(()=>{ setOpen3(false)},3000)
	  }
      const timesstart3=()=>{
		setTimeout(()=>{ setOpen3(true)},1000)
	  }
	 
	  const [open4, setOpen4] = React.useState(false);
	 const [transition4, setTransition4] = React.useState<
	   React.ComponentType<TransitionProps> | undefined
	 >(undefined);
      const timesup4=()=>{
		setTimeout(()=>{ setOpen4(false)},3000)
	  }
      const timesstart4=()=>{
		setTimeout(()=>{ setOpen4(true)},1000)
	  }

	  
	  const handleHighlight=(e:any)=>{
        setBackground(true)
		 
	  }
	  const toggleActive=(id:any)=>{
		setRowIsActive(id);
	  }
	  const toggleDeActive=()=>{
		setRowIsActive("");
	  }
	  


    let design:ReactElement;

	if(loading===true){
		design=<h1>Loading......</h1>
	}
	else if (errorMessage!=''){
		design=<h1>{errorMessage}</h1>
	}
	else if(employee==null){
		design=<h1>No Record Found</h1>
	}else{
		design=<>
		
		 <div className='app'>
	<br/>
	<Box
      sx={{
        display: 'flex',
        flexDirection:'column',
		alignItems:'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 1200,
          height: 128,
        },
      }}
    >
     
      <Paper style={{flexBasis:138}}>
		<div className="table-wrapper">
			<div className="table-title">
				<div className="row " >
					{/* <div className="col-sm-6 "> */}
					<div className='header'>
						<h2><b>Employee Management System</b></h2>
						</div>
					{/* </div> */}
				</div>
				 <div className=" top-button"> 
						<a href='#AddEmployee'  className="btn btn-success" data-toggle="modal" onClick={handleCon}><i
								className="material-icons">&#xE136;</i> <span>Add New Employee</span></a>
				     &nbsp;
					    <a href="#addDepartmentModal" className="btn btn-success" data-toggle="modal" onClick={handleDept}><i
								className="material-icons">&#xE147;</i> <span>Add New Department</span></a>
					   {/* <button><FilterAltIcon color='primary'/></button> */}
					    
					 </div> 
				<br/>
				<div className="row">
					<div className="col-sm-3 ">
						<div className="form-group">
							 <input type="text" id="search-name" className="form-control" placeholder="Search by Employee Name" value={filt} onChange={handleFilter}/> 
						</div>
					</div>
				</div>
				</div>
				</div>
				</Paper>
				<Paper style={{flexBasis:480}}>
				<Modal
        open={open}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
		
      >
        <Box sx={style} style={{textAlign:"center"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete Employee Record
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
		  Are you sure you want to delete employee record?
          </Typography>
		  <Stack spacing={2} direction="row" sx={{ mt: 1 }}>
                                       
      <Button variant="contained" color='primary'  sx={{width:100,marginLeft:7}} onClick={handleclose}>Cancel</Button>
      <Button variant="contained" color='error'  sx={{width:100,marginLeft:7}} onClick={()=>{
		removeData(employeeId)
		handleclose()
		timesstart1()
		timesup1()
		
	  }}>Delete</Button>                              
                                     
      </Stack>
	  
        </Box>
		
      </Modal>
				<div className="container-fluid" >
		
		         
		<div className="table-responsive">
			<table id="employee-table " className="table table-striped table-hover ">
			<thead className='table-info'>
					<tr >
					
						<th>Employee Name</th>
						<th>Department Name</th>
						<th>Email Id</th>
						<th>DOB</th>
						<th>Address</th>
						<th>Actions</th>
					   </tr>
				</thead>
				<tbody>
					                                                              
					
					{  
					
					 employee.filter(e => e.EmployeeName.toLowerCase().includes(filt.toLowerCase())).map((emp,index)=>{
			
							if(index>=first && index<last){
							 
                        return <tr
						className={`tr${rowIsActive === emp.EmployeeId ? 'active' : ''}`}
						key={emp.EmployeeId}
						>
							<td>{emp.EmployeeName}</td>
							<td>{emp.DepartmentId}</td>
							<td>{emp.EmailId}</td>
							<td>{emp.DOB}</td>
							<td>{emp.Address}</td>
							<td>
							<Tooltip title="Click here to Edit">
							<a href='#AddEmployee'>	<button className='ebtn1' onClick={(e:any)=>{
								handleEmpId(emp.EmployeeId)
								toggleActive(emp.EmployeeId)
								handleHighlight(e)
							}} ><EditIcon color='primary'/></button ></a></Tooltip><Tooltip title="Click here to Delete"><button className='ebtn2' onClick={handleOpen}><DeleteIcon onClick={()=>{
								handleEmpId(emp.EmployeeId)
								handleOpen()
								setCon(false)
								setdept(false)
								
								
  

							}} color='error'/></button></Tooltip></td>
						</tr>
						
						
							}
						
						})

						
					  
			       }{
					
					 (chk && <tr><td>No Record Found</td></tr>)
				   }
					
				</tbody>
			</table>
		</div>
		<div className="text-right">
		<div className="clearfix ">
	    
			<div className="hint-text">Total of <b className="count">{employee.length}</b> entries</div>
			</div>
			<div>
			 <ul className="pagination " >

				<li className="page-item"><a href="#" id="js-previous" className="page-link" onClick={handlePrev}>Prev</a></li>
				<li className="page-item"><a href="#" id="js-next" className="page-link" onClick={handleNext}>Next</a></li>
			</ul> 
			</div>
			</div>
		</div>

		 
	
				</Paper>
   

    </Box>
				 <a id="AddEmployee"></a>
	              
                 {con && <Addemp handleDeActivate={toggleDeActive} departments={department} id={employeeId} handlerClose={handleClose} handleFetch={fetchCall} employees={employee} handleAddStart={timesstart2} handleAddEnd={timesup2} handleEditStart={timesstart3} handleEditEnd={timesup3}/>}
    
                 <a id='addDepartmentModal'></a>
                 {dept && <Adddepartment handlerClose={handleClose} departments={department} handleFetch={fetchCall} handleAddDeptStart={timesstart4} handleAddDeptEnd={timesup4} />} 
				 <Snackbar
                open={open1}
                onClose={ timesup1}
                TransitionComponent={transition}
                message=" Department record Deleted Successfully"
               
                 />
				 
				 	 <Snackbar
                open={open2}
                TransitionComponent={transition}
                message="Employee Record Created Successfully"
              
                 />
				 	 <Snackbar
                open={open3}
               
                TransitionComponent={transition}
                message="Employee Record Upadated Successfully"
              
                 />
				 	 <Snackbar
                open={open4}
                
                TransitionComponent={transition}
                message="Employee Record Added Successfully"
               
                 />
		</div> 
	
		</>
	}


  return design;
}

export default Employee