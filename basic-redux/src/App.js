import store from "./store";
import React from "react";
import { Provider } from 'react-redux'
import Home from "./Home.js/index";
function App() {
  return (
    <>
    <Provider store={store}>
    <Home/>
    </Provider>
         
    </>
  );
}

export default App;
