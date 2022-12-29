
import { axiosInstance } from "../config/axiosconfig"
import { ApiResponse } from "../models/apiresponse.model"
import { DepartmentData } from "../models/department"
import { EmployeeData } from "../models/employeemodel"

export const getAllEmployees = () => {
    return axiosInstance.get<ApiResponse<EmployeeData[]>>('/emp')

}
export const getAllDepartments = () => {
    return axiosInstance.get<ApiResponse<DepartmentData[]>>('/dept')

}
export const addEmp = (employee: EmployeeData) => {
    return axiosInstance.post<ApiResponse<EmployeeData>>('/emp', employee)
}
export const addDept = (department: DepartmentData) => {
    return axiosInstance.post<ApiResponse<DepartmentData>>('/dept', department)
}
export const updateEmployee = (employee: EmployeeData, id: string) => {
    return axiosInstance.put<ApiResponse<EmployeeData>>(`/emp/${id}`, employee)
}
export const deleteEmployee = (id: string) => {
    return axiosInstance.delete<ApiResponse<EmployeeData>>(`/emp/${id}`)
}
export const getEmployee = (id: string) => {
    return axiosInstance.get<ApiResponse<EmployeeData>>(`/emp/${id}`)
}