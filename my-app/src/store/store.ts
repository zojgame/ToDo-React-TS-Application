// IMPORTS
import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';
import {TaskType} from '../Components/Task-type';

//  REDUCER
type InitialState = {
    isEditing: boolean;
    taskList: TaskType[]
}

const initialState : InitialState = {
    isEditing : false,
    taskList: []
}

const editReducer = createSlice({
    name: 'editReducer',
    initialState,
    reducers : {
        changeEditingStatus: (state, action) => {
            state.isEditing = action.payload;
        },
        addTask: (state, action) => {
            state.taskList = [...state.taskList, action.payload];
        },
        deleteTask: (state, action) => {
            const newList = state.taskList.filter((task) => task.id !== action.payload);
            state.taskList = newList;
        },
        editTask : (state, action) => {
            const editedTask : TaskType= action.payload;
            const newList = state.taskList.filter((task) => task.id !== editedTask.id);
            state.taskList = [...newList, editedTask];
        }
    }
});

export const {addTask, deleteTask, editTask} = editReducer.actions;

// ROOTREDUCER
export const rootReducer = combineReducers({
    'editReducer' : editReducer.reducer,
})

// SELECTORS

//STORE
export const store = configureStore({reducer :rootReducer});

