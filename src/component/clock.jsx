import React, { useState,useEffect} from "react";
import { cleanup } from "@testing-library/react";

const Clock= (props)=>{
    const [time,setTime]=useState(new Date());

    function updateTime(){
        setTime(new Date());
    }
    // This works:-
    // setInterval(()=>updateTime(),1000);

    // But this is Good Practice:-
    useEffect(()=>{
        var timer =setInterval(()=>updateTime(),1000)
        return function cleanup(){
            clearInterval(timer);
        }
    });
    return(
        <div className="top">
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    )
}


export default Clock;