import React, { useEffect } from "react";
import axios from "axios";
// import { useState } from "react";
import { userdata } from "../SLICES/PagesSlice";
import { useNavigate ,Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import Userpage from "../Components/Userpage";

function Homepage(){

    // const [tab,useTable]=useState([])
    const Status=useSelector((state) => state.user.usertable)
    const dispatch = useDispatch()
    

const Navigate=useNavigate()

// function ShowData(){
//     axios.get("http://agaram.academy/api/action.php?request=getAllMembers").
//     then(response=>{
//      console.log(response)

//     let userData=response.data.data
//     console.log(userData.tab)
//     dispatch(userdata(useTable(userData)))}
//     )

// }
//     useEffect(()=>{
    //    ShowData()
       
    
    //  },[])
        
    
    
    function Logout(){
        localStorage.removeItem("login")
        Navigate("/Login")
    }
    // function DeleteData(id){
    //     axios.get(`http://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(res=>{console.log(res)
    // })}

    return(
        <>
        
        
        <h1>Homepage</h1>
         <button type="button" onClick={()=>Logout()}>Logout</button>
         {/* {JSON.stringify(Status)} */}
         <Userpage deleteVisible={false}/>
        </>
    )
}

export default Homepage;