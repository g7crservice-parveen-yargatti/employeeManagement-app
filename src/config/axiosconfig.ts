import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/employeedata',
    headers:{ 'Content-Type': 'application/json',},
    timeout: 5000,
    timeoutErrorMessage: 'Operation timed out'
})