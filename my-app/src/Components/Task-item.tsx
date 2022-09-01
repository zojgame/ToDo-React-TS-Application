import React, {useState} from "react";

export function TaskComponent() : JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const handleClick = () => {
        clickCheck(!isChecked);
    }

    return (
    <>
        <div className={`square-field` + isChecked ? `checked-item` : ``} onClick={handleClick}></div>
        <div className='text-field'>fsdfs</div>
    </>);
}


