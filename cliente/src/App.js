import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

import Home from "./Components/Home/home";
import Room from "./Components/Room/room";





function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        {//<Route path="/room/:id" element={<Room/>}/> 
        } 
 
      </Routes>
    </BrowserRouter>
       
    </div>
  );
}

export default App;