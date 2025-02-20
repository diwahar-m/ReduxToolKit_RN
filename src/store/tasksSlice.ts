import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export const fetchTasks = createAsyncThunk('tasks/fetchTasks',async () => {
    const storedTasks = await AsyncStorage.getItem('tasks'); 
    return storedTasks ? JSON.parse(storedTasks) : [];
})

export const addTask = createAsyncThunk('tasks/addTask', async (task: Omit<Task, 'id'>) => {
    console.log(task);
    const newTask = { ...task, id: Date.now().toString()}
    const storedTasks = await AsyncStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : []; 
    tasks.push(newTask); 

    await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask
})

export const deleteTask = createAsyncThunk('tasks.deleteTask', async(taskId: string, {getState})=>{
    const state = getState() as {tasks: TaskState} 
    const updatedTasks = state.tasks.tasks.filter(item => item.id !== taskId); 
    await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks)); 

    return taskId;
})

export const toggleTask  = createAsyncThunk('tasks/toggleTask', async (taskId: string, {getState})=>{ 
    const state = getState() as {tasks: TaskState} 
    const task = state.tasks.tasks.find((taskItem) => taskItem.id === taskId) 
    if(task){
        const updatedTask = {...task, completed: !task.completed} 
        const updatedTasks = state.tasks.tasks.map((taskItem)=> taskItem.id === taskId ? updatedTask : taskItem )
        await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks))
        return updatedTask
    }

    throw new Error('Task not found')

})

const tasksSlice = createSlice({
    name: 'tasks', 
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchTasks.pending, state => {
            state.status = 'loading'
        }).addCase(fetchTasks.fulfilled, (state,action: PayloadAction<Task[]>)=> {
            state.status = 'succeeded'
            state.tasks = action.payload
        }).addCase(fetchTasks.rejected, (state, action)=> {
            state.status = 'failed'
            state.error = action.error.message || null
        } ).addCase(addTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload)
        }).addCase(deleteTask.fulfilled, (state, action: PayloadAction<string>)=> {
            state.tasks= state.tasks.filter(item => item.id !== action.payload)
        }).addCase(toggleTask.fulfilled, (state, action: PayloadAction<Task>)=> {
            const index = state.tasks.findIndex(item => item.id === action.payload.id)
            if(index !== -1){
                state.tasks[index] = action.payload
            }
        })
    }
})

export default tasksSlice.reducer