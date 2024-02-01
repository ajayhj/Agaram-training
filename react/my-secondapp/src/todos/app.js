import Formdata from "./todopage";
import Listdata from "./userpage";
import Listpage from "./loginpage";
import Timer from "./timer";
import { useState ,useEffect} from "react";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";



  
function App() {

    let [islogged,setislogged]=useState({
      condition:false,
      email:""});
  
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Listpage islogged={islogged} setislogged={setislogged}/>
        },
        {
            path: "/Homepage",
            element:<Formdata islogged={islogged} setislogged={setislogged}/> 
          },
          {
            path: "/Listpage",
            element: <Listdata islogged={islogged} setislogged={setislogged} />,
          },
          {
            path: "/",
            element: <Listdata islogged={islogged} setislogged={setislogged} />,
          },
          {
            path:"/Timer",
          }
      ]);

      // useEffect(()=>{
      //    ;
      // },[])

  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={router} />
       
    
      </header>
    </div>
  );
}

export default App;