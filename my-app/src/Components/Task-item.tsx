import {useState} from "react";

export function TaskComponent() : JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const handleClickSquare = () => {
        clickCheck(!isChecked);
    }

    const [isEditing, setEdit] = useState(false);
    const handleClickEdit = () => {
        setEdit(true);
    }

    const handleKeyPress = (evt : React.KeyboardEvent<HTMLInputElement>) =>{
        console.log(evt.code);
        if(evt.code === 'Enter'){
            setEdit(false);
        }
    }

    return (
    <>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClickSquare}></div>
        {isEditing 
        // ? (<div className={isChecked ? `text-field item-done` : `text-field`}><input type='text' defaultValue='fdsfs' autoFocus onKeyDown={handleKeyPress}/></div>) 
        ? (<TaskEdit isChecked={isChecked} handleKeyPress={handleKeyPress}/>) 
        // : (<div className={isChecked ? `text-field item-done` : `text-field`} onClick={handleClickEdit}><p>fsdfs</p></div>)}
        : <TaskItem isChecked={isChecked} handleClickEdit={handleClickEdit} />}
    </>);
}
type TaskProps = {
    isChecked:boolean, 
    // handleKeyPress: (evt: React.KeyboardEvent<HTMLInputElement>) => void
}
type TaskEditProps = TaskProps 
& {handleKeyPress: (evt: React.KeyboardEvent<HTMLInputElement>) => void};

type TaskItemProps = TaskProps 
& {handleClickEdit: () => void};

function TaskEdit({isChecked, handleKeyPress} : TaskEditProps):JSX.Element{
    return (<div className={isChecked ? `text-field item-done` : `text-field`}><input type='text' defaultValue='fdsfs' autoFocus onKeyDown={handleKeyPress}/></div>)
}

function TaskItem({isChecked, handleClickEdit} : TaskItemProps){
    return (<div className={isChecked ? `text-field item-done` : `text-field`} onClick={handleClickEdit}><p>fsdfs</p></div>);
}


