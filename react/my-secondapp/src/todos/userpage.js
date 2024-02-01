import { useState } from 'react'
import Commondata from './common'
let Listdata=(props)=>{
         console.log(props.islogged)
          let [Users,setNewvalue]=useState(["Sobith","Ajil","Ajay"])

        
                
          return(
            <>
                <table border={1} cellSpacing={1}>
                    <tr>
                        <th>No</th>
                        <th>Todos</th>
                    </tr>
                    {
                        Users.map((a,h)=>(
                            <tr>
                                <td>{h+1}</td>
                                <td>{a}</td>
                                
                            </tr>
                    ))
                    }
                </table>
                <Commondata item={Users} setItem={setNewvalue}/>
            </>
          )
    
}
export default Listdata;

