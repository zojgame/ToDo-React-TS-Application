// IMPORTS
import {combineReducers, createSlice} from '@reduxjs/toolkit';

//  REDUCER
type InitialState = {
    isEditing: boolean;
}

const initialState : InitialState = {
    isEditing : false
}

const editReducer = createSlice({
    name: 'editReducer',
    initialState,
    reducers : {
        changeEditingStatus: (state, action) => {
            state.isEditing = action.payload;
        }
    }

});

export const {changeEditingStatus} = editReducer.actions;

// ROOTREDUCER
export const rootReducer = combineReducers({
    'editReducer' : editReducer.reducer,
})

// SELECTORS
// type State = ReturnType<typeof 
// export const getEditingStatus = (state : InitialState) : boolean => state["isEditing"].isEditing;
