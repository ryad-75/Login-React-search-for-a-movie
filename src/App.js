import React,{useState} from 'react';
import './App.css';
import Signup from "./components/Signup"

function App() {
const [setVerify]=useState({
  Signup:false
})

return (
  <>
  
  <Signup setVerify={setVerify}/>
     
    </>
  );
}

export default App;
