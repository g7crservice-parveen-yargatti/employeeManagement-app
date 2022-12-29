import { configureStore } from "@reduxjs/toolkit"
import { allDepartmentsReducer, allEmployeesReducer } from "./productSlice"

const store = configureStore({
    reducer: {
        allEmployees: allEmployeesReducer,
        allDepartments: allDepartmentsReducer,
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store