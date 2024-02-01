import { useEffect, useState } from "react";

function Timer(){
    
   let [TimerStart,setTimerStart]=useState(0)
   let [Timerpause,setTimerPause]=useState(true)


   useEffect (()=>{
       if(Timerpause){
       setTimerStart(TimerStart+1)
       }
   },)

   return(
    <>
    <h1>Timer</h1>
    {TimerStart}
    <button onClick={()=>{setTimerPause(!Timerpause)}}>{Timerpause?'start':'stop'}</button>
    <button onClick={()=>{}}>Reset</button>
    </>
   )


}
export default Timer;