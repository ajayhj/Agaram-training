
// import { configureStore } from '@reduxjs/toolkit';
import store from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { Counter } from './IncrementSlicw/CounterSlice'
import LoginData from './Pages/Login';
import Homepage from './Pages/Home';
import RegData from './Pages/Register';
import UserDetails from './Pages/Userdetail';
const router=createBrowserRouter([
  {
    path:"/Counter",
    element:<Counter/>
  },
  {
    path:"/Login",
    element:<LoginData/>
  },{
    path:"/",
    element:<Homepage/>
  },{
    path:"/Register",
    element:<RegData/>
  },{
    path:"/user/:userid",
    element:<UserDetails/>
  }
])

function App() {
  return (
    <>
    <Provider store={store}>
    {/* <div className="App">
      <header className="App-header"> */}
      <RouterProvider router={router}/>
      {/* </header>
    </div> */}
    </Provider>
    </>
  );
}

export default App;
