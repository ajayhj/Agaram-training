import { useState,useEffect } from 'react'
import Commondata from './common'
import axios from 'axios'
let Formdata=(props)=>{
        //   let [inputvalues,setInputitems]=useState('')
          let [Todos,setTodos]=useState(["mobile","charger","power bank"])



          axios({
            method: 'get',
            url: 'http://agaram.academy/api/action.php',
            responseType: 'stream',
          })
            .then(function (response) {
              console.log(response)})

             useEffect (()=>{
                 Alertdata();
             },[])
            
              const DeleteTodos= (a )=>{
                let updateTodo=Todos.filter((h)=>h!==a)
                setTodos(updateTodo)    
               }
        const Alertdata=()=>{
            
        }

          return(
            <>
            {props.islogged.condition?<h5>welcome {props.islogged.email}</h5>:<h1>guest</h1>}
                <table border={1} cellSpacing={1}>
                    <tr>
                        <th>No</th>
                        <th>Todos</th>
                    </tr>
                    {
                        Todos.map((a,h)=>(
                            <tr>
                                <td>{h+1}</td>
                                <td>{a}</td>
                                <button onClick={()=>DeleteTodos(a)}>Delete</button>
                            </tr>
                    ))
                    }
                </table>
            
                <Commondata item={Todos} setItem={setTodos}/>
                
                
            
             
            </>
          )
    
}
export default Formdata;

