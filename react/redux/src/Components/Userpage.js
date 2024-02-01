import React, { useEffect } from "react";
import axios from "axios";
// import { useState } from "react";
import { userdata } from "../SLICES/PagesSlice";
import { useNavigate ,Link} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { updateUserLogged } from "../SLICES/PagesSlice";
import { setUser } from "../SLICES/PagesSlice";
function Userpage(props){

    // const [tab,useTable]=useState([])
    const Status=useSelector((state) => state.user.usertable)
    const dispatch = useDispatch()
    
    const LoginStatus=useSelector((state)=>state.user.isUserLogged)    
    const Setdata=useSelector((state)=>state.user.setid)

const Navigate=useNavigate()

function ShowData(){
    axios.get("http://agaram.academy/api/action.php?request=getAllMembers").
    then(response=>{
     console.log(response)
    
    let userdatas=response.data.data
    // console.log(userData.Status)
    dispatch(userdata(userdatas))}
    )

}
    useEffect(()=>{
       ShowData()
    
    
     },[])
        
    function Viewdata(id){
        if (localStorage.getItem("login")=='success'){
                  Navigate(`/user/${id}`)
    }
       else{
        dispatch(setUser(id))
        localStorage.setItem("guest","true")
            Navigate('/Login')
       }
}
    
    function DeleteData(id){
        axios.get(`http://agaram.academy/api/action.php?request=removeMember&id=${id}`).then(res=>{console.log(res)
    })
}
    return(
        <>
        {JSON.stringify(setUser)}
         <button type="button" onClick={()=>ShowData()}></button> 
        <table border={2} >
            <tr>
                <th>name</th>
                <th>id</th>
                <th>email</th>
                <th>phone</th>
                <th>adhar</th>
                <th>city</th>
                <th>area</th>
                <th>Link</th>
                {props.deleteVisible?<th>Delete</th>:null}
            </tr>
            <tbody>
                 {
                  Status.map((data)=>(
                  <tr>
                  <td>{data.name}</td>
                  <td>{data.id}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.aadhar}</td>
                  <td>{data.city}</td>
                  <td>{data.area}</td>
                  <td><button type="button" onClick={()=>Viewdata(data.id)}>View</button></td>
                  {/* <td><button type="button"><Link to={`/user/${data.id}`}>link</Link></button></td> */}
                  {props.deleteVisible?<td><button type="button" onClick={()=>DeleteData(data.id)}>Delete</button></td>:null}
                  </tr>))
                 }
            </tbody>
        </table><br/>
         {/* <button type="button" onClick={()=>Logout()}>Logout</button> */}
         {/* {JSON.stringify(Status)} */}
        </>
    )
}

export default Userpage;