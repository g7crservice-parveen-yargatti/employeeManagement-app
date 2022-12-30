import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://userdataapi-emp-mgt-sys.onrender.com/employeedata',
    headers:{ 'Content-Type': 'application/json',},
    timeout: 5000,
    timeoutErrorMessage: 'Operation timed out'
})