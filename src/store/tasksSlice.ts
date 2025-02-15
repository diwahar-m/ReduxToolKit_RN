import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskState {
    tasks: Task[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null
}


const initialState: TaskState = {
    tasks: [], 
    status: 'idle', 
    error: null
}

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<Task, 'id'>) => {
    console.log(task);
    const newTask = { ...task, id: Date.now().toString()}
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : []; 
    tasks.push(newTask); 

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask
})

const tasksSlice = createSlice({
    name: 'tasks', 
    initialState: {},
    reducers: {}
})

export default tasksSlice.reducer