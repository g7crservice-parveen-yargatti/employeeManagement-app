// import { AxiosResponse } from 'axios'
// import { useEffect } from 'react'

// import { useDispatch, useSelector } from 'react-redux'
// import { ApiResponse } from '../models/apiresponse.model'
// import { EmployeeData } from '../models/employeemodel'
// import {  failureEmpActionCreator, initiateEmpActionCreator, successEmpActionCreator } from '../redux/productSlice'
// import { AppDispatch, RootState } from '../redux/store'
// import { getAllEmployees } from '../services/services'

// function Testing() {
//     const EmployeeState = useSelector((states: RootState) => states.allEmployees)
//     const dispatchFnRef = useDispatch<AppDispatch>()

//     const { loading, errorMessage,employee } = EmployeeState

//     const fetchData = () => {
//         const initiateAction = initiateEmpActionCreator()
//         dispatchFnRef(initiateAction)
//         const promise = getAllEmployees()
//         promise
//             .then(
//                 (resp: AxiosResponse<ApiResponse<EmployeeData[]>>) => {
//                     const apiResponse = resp.data
//                     if (apiResponse.data !== null) {
//                         const successAction = successEmpActionCreator(apiResponse.data)
//                         dispatchFnRef(successAction)
//                     } else {
//                         const failureAction = failureEmpActionCreator(apiResponse.message)
//                         dispatchFnRef(failureAction)
//                     }
//                 },
//                 (err) => {
//                     const failureAction = failureEmpActionCreator(err.message)
//                     dispatchFnRef(failureAction)
//                 }
//             )
//     }
//     console.log(employee);
//     console.log(loading);
//     console.log(errorMessage);
    
    
    
//     useEffect(()=>{
//         fetchData();
//     },[])

//     return <div>Hello</div>
// }

//   
export{}