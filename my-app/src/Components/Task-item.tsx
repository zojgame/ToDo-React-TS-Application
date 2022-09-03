import React, {useContext, useState} from "react";

const ItemTextContext = React.createContext({itemTextValue : ''});

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
    
    <ItemTextContext.Provider value ={{itemTextValue}}>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClickSquare}></div>
            {isEditing 
            ? (<TaskEdit isChecked={isChecked} handleKeyPress={handleKeyPress} setItemTextValue={handleOnInputChange}/>) 
            : <TaskItem isChecked={isChecked} handleClickEdit={handleClickEdit}/>}
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
& {handleClickEdit: () => void};

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

function TaskItem({isChecked, handleClickEdit} : TaskItemProps){
    const itemTextValue = useContext(ItemTextContext).itemTextValue;
    return (
            <div className={isChecked ? `text-field item-done` : `text-field`} onClick={handleClickEdit}><p>{itemTextValue}</p></div>
        );
}


