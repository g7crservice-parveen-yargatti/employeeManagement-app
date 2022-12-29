import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { DepartmentData } from "../models/department"
import { EmployeeData } from "../models/employeemodel"
import { initialDepartmentState, initialEmployeesState } from "./intialstate"

export const EmployeessSlice = createSlice({
    name: 'employees',
    initialState: initialEmployeesState,
    reducers: {
        initiate: (state, action: PayloadAction<undefined>) => {
            state.loading = true
            state.employee= []
            state.errorMessage = ''
            state.employeeId=''
        },
        success: (state, action: PayloadAction<EmployeeData[]>) => {
            state.loading = false
            state.errorMessage = ''
            state.employee = action.payload
            state.employeeId=''
        },
        failure: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.errorMessage = action.payload
            state.employee= null
            state.employeeId=''
        },
        
            empid:(state,action:PayloadAction<string>)=>{
              state.employeeId=action.payload
            }
        
        }
        })

        export const DepartmentSlice = createSlice({
            name: 'departments',
            initialState: initialDepartmentState,
            reducers: {
                initiate: (state, action: PayloadAction<undefined>) => {
                    state.loading = true
                    state.department = []
                    state.errorMessage = ''
                    
                },
                success: (state, action: PayloadAction<DepartmentData[]>) => {
                    state.loading = false
                    state.errorMessage = ''
                    state.department = action.payload
                },
                failure: (state, action: PayloadAction<string>) => {
                    state.loading = false
                    state.errorMessage = action.payload
                    state.department = null
                }
            }})

        export const { initiate: initiateEmpActionCreator, success: successEmpActionCreator, failure: failureEmpActionCreator,empid:empidActionCreator } = EmployeessSlice.actions
        export const { initiate: initiateDeptActionCreator, success: successDeptActionCreator, failure: failureDeptActionCreator } = DepartmentSlice.actions
        export const allEmployeesReducer = EmployeessSlice.reducer
        export const allDepartmentsReducer = DepartmentSlice.reducer