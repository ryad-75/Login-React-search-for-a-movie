import React,{useState} from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import "./Loginstyle.css"
import Form from 'react-bootstrap/Form'
import Ryad from "./assets/Ryad.png";

const Forgot=(props)=>{


const [userid,setUserid]=useState("")
const [email,setEmail]=useState("")



const idchanged=(event)=>{
setUserid(event.target.value)
}
const emailchanged=(event)=>{
    setEmail(event.target.value)
    }

const onSubmit=()=>{
    
        fetch('https://login-react-signup.herokuapp.com/forget', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email":email,
                "userid":userid
                
            }),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
        alert("Login Now using OTP sent to mail")
        props.setVerify({
            Login:true,
            Signup:false,
            Forgot:false,
            Table:false
            });
            
        ;
    }
        
         
    

return(
    <div className="logo">
        <img src={Ryad} alt="Logo"  />
    <Container className="reset-password">
   <h2>Reset your password</h2>
<Form>
<Form.Group controlId="formBasicEmail">
    <Form.Label>UserId</Form.Label>
    <Form.Control type="email" placeholder="" onChange={idchanged}/>
   
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="" onChange={emailchanged}/>
   
  </Form.Group>

  
  <Button variant="primary" type="button" onClick={onSubmit}>
    Submit
  </Button>
</Form>
</Container>
</div>
)
}
export default Forgot;