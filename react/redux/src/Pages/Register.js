import React from "react";
// import { useState } from "react";
import  Axios  from "axios";
import { useDispatch,useSelector } from "react-redux";
import { registerdata } from "../SLICES/PagesSlice";
import { useNavigate } from "react-router-dom";
export default function RegData(){
    
// const [Register,setUserRegister]=useState({
//     name: "",
//     email:"",
//     phone:"",
//     password:""

// })
const registeruserData=useSelector(state=>state.user.registeruser)
const dispatch = useDispatch()

dispatch(registerdata)
const Navigate=useNavigate()

function RegsiterAllData(){
    Axios({
        method: 'post',
        url: 'http://agaram.academy/api/action.php',
        Data:registeruserData
        
      }).then(function(response){
        
        console.log(response)
         Navigate("/Login")
    })
}
    return(
        <>
       <>{JSON.stringify(registeruserData)}</>
        <h1>Register</h1><br/>
        Name<input type="text" onKeyUp={(e)=>dispatch(registerdata({
        ...registeruserData,
         name: e.target.value   })) }/><br/>
        Email<input type="email" onKeyUp={(e)=>dispatch(registerdata({...registeruserData,email:e.target.value}))}/><br/>
        Phone<input type="Phone" onKeyUp={(e)=>dispatch(registerdata({...registeruserData,phone:e.target.value}))}/><br/>
        Password<input type="password" onKeyUp={(e)=>dispatch(registerdata({...registeruserData,password:e.target.value}))}/><br/>
        <button type="button" onClick={()=>RegsiterAllData()}>Register</button>
        {/* {JSON.stringify(Register)} */}
        </>
    )
}