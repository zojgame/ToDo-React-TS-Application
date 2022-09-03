import React, {useState} from "react";

export function TaskComponent() : JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const handleClickSquare = () => {
        clickCheck(!isChecked);
    }

    const [isEditing, setEdit] = useState(false);
    const handleClickEdit = () => {
        setEdit(true);
    }

    const [itemTextValue, setItemTextValue] = useState('');

    const handleKeyPress = (evt : React.KeyboardEvent<HTMLInputElement>) =>{
        console.log(evt.code);
        if(evt.code === 'Enter'){
            setEdit(false);
        }
    }

    const handleOnInputChange = (event : React.FormEvent<HTMLInputElement>) => {
        setItemTextValue(event.currentTarget.value)
    }

    return (
    <>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClickSquare}></div>
        {isEditing 
        ? (<TaskEdit isChecked={isChecked} handleKeyPress={handleKeyPress} itemTextValue={itemTextValue} setItemTextValue={handleOnInputChange}/>) 
        : <TaskItem isChecked={isChecked} handleClickEdit={handleClickEdit} itemTextValue={itemTextValue}/>}
    </>);
}
type TaskProps = {
    isChecked:boolean, 
    itemTextValue:string
}

type TaskEditProps = TaskProps 
& {handleKeyPress: (evt: React.KeyboardEvent<HTMLInputElement>) => void,
    setItemTextValue: (event: React.FormEvent<HTMLInputElement>) => void};

type TaskItemProps = TaskProps 
& {handleClickEdit: () => void};

function TaskEdit({isChecked, handleKeyPress, itemTextValue, setItemTextValue} : TaskEditProps):JSX.Element{
    return (<div className={isChecked ? `text-field item-done` : `text-field`}>
        <input type='text' defaultValue={itemTextValue} autoFocus onKeyDown={handleKeyPress} className='edit-form-task' onChange={setItemTextValue}/>
        </div>)
}

function TaskItem({isChecked, handleClickEdit, itemTextValue} : TaskItemProps){
    return (<div className={isChecked ? `text-field item-done` : `text-field`} onClick={handleClickEdit}><p>{itemTextValue}</p></div>);
}


