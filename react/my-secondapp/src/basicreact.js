import React from 'react';
//userstate-default function -atha function kula use pana mudium-oru function and name 
import {useState} from 'react';



let Myapp=()=>{

    let [name,Keyfunction]=useState("Hello")

    
    return(
        <>
            <h1>Welcome </h1>
            <h1>{name}</h1>
            <button onClick={()=>Keyfunction("test")}>Submit</button>
       </>
    )
}

export default Myapp;