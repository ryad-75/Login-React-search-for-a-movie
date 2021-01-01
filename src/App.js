import React,{useState} from 'react';
import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"

function App() {
const [setVerify]=useState({
  Login:true,
  Signup:false
})

return (
  <>
    <Login setVerify={setVerify}/>
    <Signup setVerify={setVerify}/>
  </>
  );
}

export default App;
