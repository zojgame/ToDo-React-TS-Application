import React, {useContext, useState} from "react";
import { TaskType } from "./Task-type";
import del from "../images/delete.png";
import { store } from "../store/store";
import { deleteTask } from "../store/store";
import { useDispatch } from "react-redux";

const ItemTextContext = React.createContext({itemTextValue : ''});

type TaskComponentProps = {
    task : TaskType
}
export function TaskComponent({task} : TaskComponentProps) : JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const dispatch = useDispatch();
    const handleClickSquare = () => {
        clickCheck(!isChecked);
    }

    const handleDeleteBtn = () => {
        const currentItemId = store.getState().editReducer.taskList.filter((t) =>        
            t.id === task.id
        )[0].id;
        dispatch(deleteTask(currentItemId));
        }

    const [isEditing, setEdit] = useState(false);
    const handleClickEdit = () => {
        setEdit(true);
    }

    const [itemTextValue, setItemTextValue] = useState(task.text);

    const handleKeyPress = (evt : React.KeyboardEvent<HTMLInputElement>) => {
        if(evt.code === 'Enter'){
            setEdit(false);
        }
    }

    const handleOnInputChange = (event : React.FormEvent<HTMLInputElement>) => {
        setItemTextValue(event.currentTarget.value)
    }

    return (
    
    <ItemTextContext.Provider value ={{itemTextValue}}>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClickSquare}></div>
            {isEditing 
            ? (<TaskEdit isChecked={isChecked} handleKeyPress={handleKeyPress} setItemTextValue={handleOnInputChange}/>) 
            : <TaskItem isChecked={isChecked} handleClickEdit={handleClickEdit} handleDeleteBtn={handleDeleteBtn}/>}
    </ItemTextContext.Provider>
        
    );
}

type TaskProps = {
    isChecked:boolean
}

type TaskEditProps = TaskProps 
& {handleKeyPress: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
    setItemTextValue: (event: React.FormEvent<HTMLInputElement>) => void};

type TaskItemProps = TaskProps 
& {handleClickEdit: () => void, handleDeleteBtn: () => void};

function TaskEdit({isChecked, handleKeyPress, setItemTextValue} : TaskEditProps):JSX.Element{
    return (
    <ItemTextContext.Consumer>
        {itemTextValue => 
            <div className={isChecked ? `text-field item-done` : `text-field`}>
            <input type='text' defaultValue={itemTextValue.itemTextValue} autoFocus onKeyDown={handleKeyPress} className='edit-form-task' onChange={setItemTextValue}/>
            
            </div>
        }  
    </ItemTextContext.Consumer>)
}

function TaskItem({isChecked, handleClickEdit, handleDeleteBtn} : TaskItemProps){
    const itemTextValue = useContext(ItemTextContext).itemTextValue;
    
    return (
    <>
    {/* <div className={isChecked ? `text-field item-done` : `text-field`} onClick={handleClickEdit}> */}
    <div className={isChecked ? `text-field item-done` : `text-field`} >
        <p onClick={handleClickEdit}>{itemTextValue}</p>
        <div className="delete-btn-container">
        <button className="delete-btn" onClick={handleDeleteBtn}><img src={del} alt="alt"/></button>
        </div>
        </div>
    </>
        );
}


