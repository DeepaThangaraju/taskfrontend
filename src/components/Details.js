import axios from "axios"
import { Table,Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"



export function Details({detail}){

  
const history=useHistory()

    const deleteDetail=async (id)=>{
        try{
        const det=axios.get(`http://localhost:5000/api/job/${id}`)
        if(det){
            if(window.confirm("Are you sure")){
                await axios.delete(`http://localhost:5000/api/job/${id}`)
                window.location.reload(false);
            }
        }
       
        }catch(err){
            window.alert(err)
        }
    }

    return(
        <div className="container table-container">
            <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Job-Type</th>
              <th>Email</th>
              <th>Location</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {detail.map(user => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.mobile}</td>
                <td>{user.jobType}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>{user.dob}</td>
                <td>
                    <Button variant="primary" style={{marginRight:"10px"}} onClick={()=>{
                        history.push(`/api/edit/${user._id}`)
                        }
                    }>Edit</Button>
                    <Button variant="danger" onClick={()=>{deleteDetail(user._id)}}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </div>
    )
}