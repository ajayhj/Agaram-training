import { useState } from 'react'
let Commondata=(props)=>{
          let [inputvalues,setInputitems]=useState('')
        

        
                
          return(
            <>
                
                 <input type="text" onKeyUp={(e)=>setInputitems(e.target.value)} />
                <button type="button" onClick={()=>{props.setItemhhhh([...props.item,inputvalues])}}>Add</button>
            </>
          )
    
}
export default Commondata;

