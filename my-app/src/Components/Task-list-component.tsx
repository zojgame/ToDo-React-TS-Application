import { TaskComponent } from "./Task-item";
import { store } from "../store/store";
import { addTask } from "../store/store";
import AddTaskComponent from "./Add-task";
// import { TaskType } from "./Taks-type";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { State } from "./state";


function TaskListComponent():JSX.Element{
    // const initialTask : TaskType = {
    //     id: nanoid(),
    //     text: 'first Task',
    // } 

    // store.dispatch(addTask(initialTask));
    // const tasks = store.getState().editReducer.taskList;
    const tasks = useSelector((state : State) => state.editReducer.taskList)

    return (
        <div className='to-do-list'>
            <div className='item'>                    
                    {tasks.map((task) => <TaskComponent task={task} key={nanoid()}/>)}                    
            </div>            
                <AddTaskComponent />   
        </div>    
    );
}

export default TaskListComponent;