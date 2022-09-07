import { TaskComponent } from "./Task-item";
import AddTaskComponent from "./Add-task";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { State } from "./state";
import { useEffect } from "react";
import { getData } from "../api-actions/api-actions";


function TaskListComponent():JSX.Element{
    const tasks = useSelector((state : State) => state.editReducer.taskList)
    useEffect(() => {
        getData()();
    }, []);

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