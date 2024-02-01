import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './IncrementSlicw/UserSlice';
import UserLogin from './SLICES/PagesSlice'

const  store= configureStore({
  reducer: {
    
    user:UserLogin
 }
})

export default store;