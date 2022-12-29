import TextField from '@mui/material/TextField';

import PersonIcon from '@mui/icons-material/Person';
 import './delete.css';
import React from 'react'

function Delete() {
  return (
	<div >
		
		
		<PersonIcon className='person'/>
		< TextField  className="bar" id="standard-basic" label="Employee Name *" variant="standard" InputProps={{ style: { width:"400px" } }}/><br/>
		<PersonIcon className='person'/>
		< TextField  className="bar" id="standard-basic" label="Employee Name *" variant="standard" InputProps={{ style: { width:"400px" } }}/><br/>
		<PersonIcon className='person'/>
		< TextField  className="bar" id="standard-basic" label="Employee Name *" variant="standard" InputProps={{ style: { width:"400px" } }}/><br/>
		<PersonIcon className='person'/>
		< TextField  className="bar" id="standard-basic" label="Employee Name *" variant="standard" InputProps={{ style: { width:"400px" } }}/>

	</div>
  )
}

export default Delete








    // <div className='box'>
    //     <div className='modal-head'>
	// 	<div className="modal-dialog  modal-confirm">
	// 		<div className="modal-content">
	// 			<form id="delete-employee-form">
	// 				<div className="modal-header ">
	// 					<h4 className="modal-title w-100">Delete Employee</h4>
	// 					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	// 				</div>
	// 				<div className="modal-body">
	// 					<p>Are you sure you want to delete ?</p>
	// 					<p className="text-warning"><small>This action cannot be undone.</small></p>
	// 				</div>
	// 				<div className="modal-footer">
	// 					<input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
	// 					<input type="submit" className="btn btn-danger" value="Delete"/>
	// 				</div>
	// 			</form>
	// 		</div>
	// 	</div>
	// </div>
    // </div>
//   )
// }

// export default Delete