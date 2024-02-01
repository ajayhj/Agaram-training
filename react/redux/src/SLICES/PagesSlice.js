import { createSlice } from '@reduxjs/toolkit'

export const UserLogin = createSlice({
  name: 'user',
  initialState: {
    registeruser: {
      name: "",
      email:"",
      phone:"",
      password:""
  
    },
    loginuser:{
      email: "",
      password:""
    },
    usertable:[],
    setid:0,
    isUserLogged:false
    
    // {email:'',password:''},
  },
  reducers: {
    
    registerdata: (state, action) => {
      
      state.registeruser=action.payload
      
    },
    logindata:(state,action)=>{
      state.loginuser=action.payload
    },
    userdata:(state,action)=>{
      state.usertable=action.payload
    },
    setUser:(state,action)=>{
      state.setid=action.payload
    },
    updateUserLogged:(state,action)=>{
      state.isUserLogged=action.payload
    }
  },

})


export const { registerdata,logindata,userdata,updateUserLogged,setUser } = UserLogin.actions

export default UserLogin.reducer