import { useState } from 'react'
let MyTodos=()=>{
          let [inputvalues,setInputitems]=useState('')
          let [Todo,setNewvalue]=useState(["mobile","charger","power bank"])

        //   let Todo=["mobile","charger","power bank"]

        //   function setNewvalue(){
        //     Todo.push()
        //   }

          const DeleteTodo= (a )=>{
            let updateTodo=Todo.filter((h)=>h!==a)
            setNewvalue(updateTodo)    
           }
                
          return(
            <>
                <table border={1} cellSpacing={1}>
                    <tr>
                        <th>No</th>
                        <th>Todos</th>
                    </tr>
                    {
                        Todo.map((a,h)=>(
                            <tr>
                                <td>{h+1}</td>
                                <td>{a}</td>
                                <td><button onClick={()=>DeleteTodo(a)}>Delete</button></td>
                            </tr>
                    ))
                    }
                </table>
                {/* {inputvalues} */}
                <input type="text" onKeyUp={(e)=>setInputitems(e.target.value)} />
                <button type="button" onClick={()=>{setNewvalue([...Todo,inputvalues])}}>Add</button>
            </>
          )
    
}
export default MyTodos;

