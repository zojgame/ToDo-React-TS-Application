import React, {useState} from "react";

export function TaskComponent() : JSX.Element{
    const [isChecked, clickCheck] = useState(false);
    const handleClick = () => {
        clickCheck(!isChecked);
    }

    return (
    <>
        <div className={isChecked ? `square-field checked-item` : `square-field`} onClick={handleClick}></div>
        <div className={isChecked ? `text-field item-done` : `text-field`}><p>fsdfs</p></div>
    </>);
}


