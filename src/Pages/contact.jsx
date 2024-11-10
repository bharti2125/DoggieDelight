import axios from "axios";
import { useState } from "react";


function Contact() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [phone,setPhone]=useState("");
 const [message,setMessage]=useState("");
  const handleSubmit = async ()=>{
    let response =await  axios.post("http://localhost:4000/data",{name,email,phone,message});
    console.log(response.data);
    alert(response.data.message);
  }
  const handleNameChange = (event)=>{
    setName(event.target.value);
    console.log("name is ",name);
  }
  const handleEmailChange = (event)=>{
    setEmail(event.target.value);
    console.log("email is ",name);
  }
  const handlePhoneChange = (event)=>{
    setPhone(event.target.value);
    console.log(" is phone",name);
  }
  const handleMessageChange = (event)=>{
    setMessage(event.target.value);
    console.log("message is ",name);
  }

  return (
    <div className="contact">
      <h1 className="contact-heading">Contact Us</h1>
       <form> 
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"  onChange={handleNameChange} value={name}/>
        <br />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleEmailChange} value={email}  />
        <br />
        <label for="number">Phone Number:</label>
        <input type="number" id="number" name="number"  onChange={handlePhoneChange} value={phone}/>
        <br />
        <label for="message">Message:</label>
        <textarea id="message" name="message" onChange={handleMessageChange} value={message}></textarea>
        <br />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form> 
    </div>
  );
}

export default Contact;
