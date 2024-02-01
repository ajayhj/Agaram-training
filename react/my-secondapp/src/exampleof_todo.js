import { useState } from "react";
let NewDatas=()=>{
    let [todo,functiontodo]=useState('')
    let [Newdata,setNewvalue]=useState([])
    return (
        <>
          <table border={1} cellSpacing={1}>
            <tr>
                <th>Name</th>
                <th>ToDo-List</th>
            </tr>
            {
                Newdata.map(()=>(
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td></td>
                    </tr>
            ))
            }

          </table>
           {/* {todo} */}
          <input type="text" onKeyUp={(e)=>functiontodo(e.target.value)}/>
          <button type="button" onClick={()=>{setNewvalue(todo)}}>Add</button>
        </>
    )
}
export default NewDatas;

