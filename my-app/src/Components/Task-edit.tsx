import { useState } from "react";

function TaskEditComponent():JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const handleClickSquare = () => {
        clickCheck(!isChecked);
    }

    return (
    <>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClickSquare}></div>
        <div className={isChecked ? `text-field item-done` : `text-field`}><input type='text' defaultValue='fdsfs'/></div>
    </>);
}

export default TaskEditComponent;