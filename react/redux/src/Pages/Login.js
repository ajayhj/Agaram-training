import React, { useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { logindata } from "../SLICES/PagesSlice";
import { useNavigate } from "react-router-dom";
import { setUser } from "../SLICES/PagesSlice";
// import Homepage from "../HOME";
export default function LoginData(){

    
    const loginuserdata=useSelector(state=>state.user.loginuser)
    // const [UserLogin,setUserLogin]=useState({
    //     email: "",
    //     password:""
    // })
    const dispatch = useDispatch()
    dispatch(logindata)
    const Navigate=useNavigate()
    const userid=useSelector((state)=>state.user.setid)
    function submitData(){

        axios({
            method: 'POST',
            url: 'http://agaram.academy/api/action.php',
            Data:
            {
                request:'candidate_login',
                email:loginuserdata.email,
                password:loginuserdata.password
            }
            
          }).then(function(response){
            // dispatch(itslog(response.data))
            console.log(response)
            Navigate("/")
            // let checklog=response.data.status
            // if (checklog=="success"){
            
            localStorage.setItem("login","success")
            // Navigate("/")
            if (localStorage.getItem("guest")){
                localStorage.removeItem("guest")
                Navigate(`/user/${userid}`)
            }
           
        })
            
        // alert('f')
        // console.log('d')
    }
    // useEffect(()=>{
    //     if (localStorage.getItem("login")=='sucess'){
    //      Navigate("/")
    //     }
    //     else{
         
    //     }
    //  })
     
     return(
        <>
{JSON.stringify(loginuserdata)}
{JSON.stringify(userid)}
        email<input type="email" onKeyUp={(e)=>{dispatch(logindata({
        ...loginuserdata,
         email: e.target.value   
    }))
        }}/>
       password <input type="password" onKeyUp={(e)=>{dispatch(logindata({
        ...loginuserdata,
        password: e.target.value
       }))
    }}/>
        <button type="button" onClick={()=>submitData()}>submit</button>
        <br/>
        {/* {JSON.stringify(UserLogin)} */}
        </>
     )
}

