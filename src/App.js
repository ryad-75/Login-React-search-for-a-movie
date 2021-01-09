import React,{useState} from 'react';
import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Forgot from "./components/Forgot";
import DisplayTable from "./components/DisplayTable";

function App() {
const [verify,setVerify]=useState({
  Login:true,
  Signup:false,
  Forgot:false,
  Table:false
})

  return (
    <>
     {
     verify.Login?<Login setVerify={setVerify}/>:verify.Signup?<Signup setVerify={setVerify}/>:verify.Forgot?<Forgot setVerify={setVerify}/>:<DisplayTable  />}
    

{/* <DisplayTable  /> */}
    </>
  );
}

export default App;
