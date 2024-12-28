import React, { children, useContext } from "react";
import { ReactDOM } from "react";
import SavedList  from './savedTimelist';
import { Thecontext } from "./TimerContext";


const Timelist = (props) => {
    const TimelistContext = useContext(Thecontext)
    return (
        <>
          <h1>
            {TimelistContext.TimeListState.map((c) => (
                <SavedList>{c}</SavedList>
            ))}

          
        </h1>
        </>
    )
}
export default Timelist;

