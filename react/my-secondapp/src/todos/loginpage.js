import { useState } from "react"
// import { useLoaderData } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Header from "./header";

export default function Listpage(props){

    const navigate = useNavigate();
    
    let [loginuser,setloginuser]=useState({
        email:"ajayh@gmail.com",
        passsword:12345
    })
    
    const  Submit=()=>{
        if (loginuser.email==="ajayh@gmail.com" && loginuser.passsword===12345)
        {
            // alert ("hey scuess")
            props.setislogged({condition:true,
            email:loginuser.email});
            
            navigate("/Homepage")
            
        }
        else{
            // alert ("failed")
            props.setislogged({condition:false});
            // navigate("/Homepage")

        }
    }
   return(
      <>
       {JSON.stringify(loginuser)} 
      <input type="email" defaultValue={"ajayh@gmail.com"} onKeyUp={(e)=>setloginuser({...loginuser,email:e.target.value})} />Email
      <input type="password" defaultValue={"12345"} onKeyUp={(e)=>setloginuser({...loginuser,passsword:e.target.value})} />Password
      <button type="button" onClick={()=>Submit()}>Submit</button>
      {/* <Header/> */}
      </>
   )

}

