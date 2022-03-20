import { Form, Col, Row,Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios" 
import { useHistory } from "react-router-dom";


export function EditPage({updateDetail}){
    

    console.log(updateDetail);

  const [fullName,setFullName]=useState(updateDetail.fullName);
  const [mobile,setMobile]=useState(updateDetail.mobile);
  const [jobType,setJobType]=useState(updateDetail.jobType);
  const [profilepic,setProfilePic]=useState(updateDetail.profilePic);
  const [location,setLocation]=useState(updateDetail.location);
  const [email,setEmail]=useState(updateDetail.email);
  const [dob,setDob]=useState(updateDetail.dob);
  

  const history=useHistory()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const detail={
      _id:updateDetail._id,
      fullName,
      mobile,
      jobType,
      location,
      email,
      profilepic,
      dob
    }
    try{
    axios
    .put(`http://localhost:5000/api/job/${updateDetail._id}`,detail)
    .then((res)=>console.log(res))
    .catch(err=>console.log(err))
    history.push("/")
    }catch(err){
      window.alert("Not updated")
    }
}

  return (
    <div>
    <div className="container form-container">
       <h3 className="regis">Edit</h3>
       
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Full Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter name" 
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Profile pic URL</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter the Url" 
            value={profilepic}
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
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
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
        <Button variant="primary" onClick={handleSubmit}>Edit</Button>
        </Form.Group>
        </Row>
      </Form>
    </div>
    </div>
  );
}
