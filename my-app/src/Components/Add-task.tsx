import { addTask, store } from "../store/store";
import { nanoid } from "@reduxjs/toolkit";
import { TaskType } from "./Taks-type";
import { useDispatch } from 'react-redux';


function AddTaskComponent():JSX.Element{
    const dispatch = useDispatch();
    const handleBtnClick = () => {
        const newTask : TaskType = {
            id: nanoid(),
            text: 'new Task'
        }
        dispatch(addTask(newTask));
        console.log(store.getState().editReducer.taskList);
    }

    return (<div className="add-btn-container">
                <div className="add-button" onClick={handleBtnClick}>Add Task</div>
            </div>);
}

export default AddTaskComponent;