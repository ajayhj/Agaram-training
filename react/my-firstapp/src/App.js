import logo from './logo.svg';
import './App.css';
import Header from './header'
import {useState} from'react';
function App() {
  let [newcount,setNewcount]=useState(0)
  return (
    <div className="App">
      <header className="App-header">
       
        {newcount}
        <button  onClick={()=>setNewcount(newcount+1)}>User</button>
        <Header name="ajay"/>
      </header>
    </div>
  );
}

export default App;
