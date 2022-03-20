import { Form, Col, Row,Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios" 
import {Display} from "./Display"


export function Forms() {

  const [fullName,setFullName]=useState('');
  const [mobile,setMobile]=useState('');
  const [jobType,setJobType]=useState('PT');
  const [profilePic,setProfilePic]=useState('');
  const [location,setLocation]=useState('Chennai');
  const [email,setEmail]=useState('');
  const [dob,setDob]=useState('');

  

  const handleSubmit=(e)=>{
    e.preventDefault()
    const detail={
      fullName,
      mobile,jobType,location,email,profilePic,dob
    }
    
    axios.post("http://localhost:5000/api/job",detail)
    .then(()=>window.location.reload())
    .catch((err)=>
      window.alert("not Added")
    )
    
}

  return (
    <div className="container form-container">
       <h3 className="regis">REGISTRATION</h3>
       
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Profile pic URL</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Url" 
            value={profilePic}
            onChange={(e)=>setProfilePic(e.target.value)}
            
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Mobile</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter mobile number" 
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col}>
        <Form.Label>Job-Type</Form.Label>
        <Form.Select  aria-label="job-type"   value={jobType}
            onChange={(e)=>setJobType(e.target.value)}>
          <option value="pt">PT</option>
          <option value="ft">FT</option>
          <option value="consultant">Consultant</option>
        </Form.Select>
      </Form.Group>
        <Form.Group as={Col}>
            <Form.Label>D.O.B</Form.Label>
            <Form.Control type="date"
              value={dob}
              onChange={(e)=>setDob(e.target.value)} />
          </Form.Group>
        </Row>
        
        <Row className="mb-3">
        <Form.Group as={Col}>
        <Form.Label>Pre.Location</Form.Label>
        <Form.Select aria-label="Preffered-location"   value={location}
            onChange={(e)=>setLocation(e.target.value)}>
          <option value="chennai">chennai</option>
          <option value="bangalore">Bangalore</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mt-4" >
        <Button variant="primary" onClick={handleSubmit}>ADD</Button>
        </Form.Group>
        </Row>
      </Form>
      <Display/>
    </div>
  );
}
