import { DepartmentData } from "../models/department";
import { EmployeeData } from "../models/employeemodel";


export interface ProductsStateType {
    loading: boolean,
    errorMessage: string,
    employee:EmployeeData[] | null,
    employeeId:string
}

export const initialEmployeesState: ProductsStateType = {
    loading: true,
    errorMessage: '',
    employee:null,
    employeeId:''
}

export interface DepartmentStateType {
    loading: boolean,
    errorMessage: string,
    department:DepartmentData[] | null
}

export const initialDepartmentState: DepartmentStateType = {
    loading: true,
    errorMessage: '',
    department: null
}
