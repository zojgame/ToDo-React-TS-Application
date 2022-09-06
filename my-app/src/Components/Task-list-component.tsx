import { TaskComponent } from "./Task-item";
import AddTaskComponent from "./Add-task";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { State } from "./state";


function TaskListComponent():JSX.Element{
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