import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice"; 
import projectReducer from "./projectsSlice"



export const store = configureStore({
    reducer: {
        tasks: taskReducer, 
        projects: projectReducer
    }
}) 

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;