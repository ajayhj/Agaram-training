import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name:"",
    email:"",
    place:""
   
  },
  
  
  reducers: {
    changeName:(state,action)=>{
        // state.name="Ajay"
        state.name=action.payload
        
          }
    }

})


export const { changeName } = userSlice.actions

export default userSlice.reducer