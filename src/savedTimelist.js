import React, { children, useContext } from "react";
import { Thecontext } from "./TimerContext";


const SavedList = (props) => {
    const savedListContext = useContext(Thecontext)

    const SavedTimehandller = (e) => {
        alert(e.target.innerHTML);

        savedListContext.setTimeListState(
            savedListContext.TimeListState.filter((t) => 
                t !== e.target.innerText)
    
        )

    }

return <h6 onClick={SavedTimehandller}>
    {props.children}
</h6>
      
}
export default SavedList;