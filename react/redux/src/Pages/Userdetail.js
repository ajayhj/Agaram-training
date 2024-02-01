import React from "react";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";
import  axios  from "axios";
import Homepage from "./Home";
import Userpage from "../Components/Userpage";
function UserDetails(){
    const id=useParams()
     console.log(id.userid)

const Specificuser=()=>{
    axios.get(`https://agaram.academy/api/action.php?request=getMemberDetail&id=${id.userid}`).then((res)=>{console.log(res)
    
    }) 
   
      
}
useEffect(()=>{
    Specificuser()
},[])

    return(
        <>
          <h1></h1>
          <Userpage deleteVisible={true}/>
          {JSON.stringify(useParams())}
        </>
    )
}

export default UserDetails;