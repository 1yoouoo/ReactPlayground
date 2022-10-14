import {React, useRef} from "react";

function Header() {


    const inputEl = useRef(null);

    const onButtonClick = () => {
        console.log()
        if (inputEl.current.value.length < 3) {
            inputEl.current.focus();
        }
        else {
            alert("저장성공")
        }

    };
    return (
        <div>
            <input ref={inputEl} placeholder="Enter your task"/>
            <button onClick={() => {
                onButtonClick();
            }}>Add</button>
        </div>
    )
}

export default Header