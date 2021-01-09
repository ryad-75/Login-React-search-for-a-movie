import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Form from 'react-bootstrap/Form';
import "./Loginstyle.css";
import Ryad from "./assets/Ryad.png";

const Login=(props)=>{
var valid=false;

const [userid,setUserid]=useState("")
const [pwd,setPwd]=useState("")
const [array,setArray]=useState("")
useEffect(()=>{

    fetch("https://login-react-signup.herokuapp.com/all")       // return a Promise that resolves when res is loaded
    .then((res)=>res.json())                // return a Promise with result of above function
    .then((res)=>setArray(res))  
    
    
},[])

const idchanged=(event)=>{
  setUserid(event.target.value)
  }
  const pwdchanged=(event)=>{
      setPwd(event.target.value)
  }
  const onSubmit=()=>{
      
      array.forEach((obj)=>{
          
          if(obj._id===userid && obj.password===pwd)
          {props.setVerify({
              Login:false,
              Signup:false,
              Forgot:false,
              Table:true
              });
              valid=true;
          ;}
      })
    
    if(valid===false){
    alert("Wrong credentials")}      //Wrong credentials; alert sending
}
const onSignup=()=>{
    props.setVerify({
        Login:false,
        Signup:true,
        Forgot:false,
        Table:false
        });
        
    
}
const onHref=()=>{
    props.setVerify({
        Login:false,
        Signup:false,
        Forgot:true,
        Table:false
        });
}

return(
  <div className="container-login">
    <div className="container-presentation">
    <img src={Ryad} alt="Logo" className="logo" />
      <div className="text-presentation">
        <h2>Welcome</h2> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p> <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis hic molestiae, velit voluptate accusamus molestias omnis labore numquam nisi iusto nostrum! Itaque, velit? Reprehenderit cumque dicta numquam dolore, quos suscipit!</p>
        </div>
    </div>
    <div className="container">
        <Container>
        <h3 className="title-form">Login Form</h3>
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={idchanged}/>
        
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={pwdchanged}/>
        </Form.Group>
        <Button variant="success" className="n1" type="button" onClick={onSubmit}>
          Login
        </Button>
        <Button variant="primary" className="n1" type="button" onClick={onSignup}>
          Signup
        </Button>
        <Button variant="dark" onClick={onHref}>Forget Password</Button>
      </Form>
      </Container>
    </div>
  </div>
   
)
}
export default Login 