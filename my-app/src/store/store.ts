// IMPORTS
import {combineReducers, configureStore, createSlice} from '@reduxjs/toolkit';
import {TaskType} from '../Components/Taks-type';
// import {TaskComponent} from '../Components/Task-item';
// import {configureStore} from 'redux';

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
        }
    }

});

export const {addTask} = editReducer.actions;

// ROOTREDUCER
export const rootReducer = combineReducers({
    'editReducer' : editReducer.reducer,
})

// SELECTORS

//STORE
export const store = configureStore({reducer :rootReducer});

